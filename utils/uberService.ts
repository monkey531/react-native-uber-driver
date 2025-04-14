import { RequestData, RequestStatus } from './types';

const UBER_API_BASE_URL = 'https://api.uber.com/v1';
const CLIENT_ID = 'mIXI5cFtAR7NrIx1HyklthRwi37yy04h';
const CLIENT_SECRET = 'j38clEhJ6JWfGfdXcj4YzKIn9P8m9GZHKLBUYvS2';

let accessToken: string | undefined;

const getAccessToken = async (): Promise<string> => {
  if (accessToken) return accessToken;

  try {
    // Create the request body as a string
    const body = new URLSearchParams();
    body.append('grant_type', 'authorization_code');
    body.append('client_id', CLIENT_ID);
    body.append('client_secret', CLIENT_SECRET);
    body.append('scope', 'all_trips');

    console.log('Sending OAuth request with:', {
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      scope: 'all_trips'
    });

    const url = `https://auth.uber.com/oauth/v2/authorize?client_id=${CLIENT_ID}&response_type=code&scope=profile`;

    const temRes = await fetch(url);
    console.log(temRes);

    const response = await fetch('https://login.uber.com/oauth/v2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      body: body.toString(),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Uber OAuth error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      });
      throw new Error(`Uber OAuth error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Uber OAuth response:', data);

    if (!data.access_token) {
      console.error('Uber OAuth response missing access token:', data);
      throw new Error('No access token received from Uber API');
    }

    const newToken = data.access_token;
    accessToken = newToken;
    return newToken;
  } catch (error) {
    console.error('Error getting Uber access token:', error);
    throw error;
  }
};

export const fetchUberRequests = async (): Promise<RequestData[]> => {
  try {
    const token = await getAccessToken();
    console.log('Fetching Uber requests with token:', token.substring(0, 10) + '...');

    const response = await fetch(`${UBER_API_BASE_URL}/requests`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Uber API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      });
      throw new Error(`Uber API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Uber API response:', data);
    
    if (!data.requests || !Array.isArray(data.requests)) {
      console.error('Invalid Uber API response format:', data);
      throw new Error('Invalid response format from Uber API');
    }

    return data.requests.map((request: any) => ({
      id: request.request_id,
      guestName: request.rider?.name || 'Anonymous',
      pickupAddress: request.pickup?.address || 'Unknown',
      dropoffAddress: request.dropoff?.address || 'Unknown',
      requestTime: new Date(request.created_at),
      phoneNumber: request.rider?.phone_number || 'N/A',
      status: mapUberStatus(request.status),
      location: {
        pickup: {
          latitude: request.pickup?.latitude || 0,
          longitude: request.pickup?.longitude || 0,
        },
        dropoff: {
          latitude: request.dropoff?.latitude || 0,
          longitude: request.dropoff?.longitude || 0,
        },
      },
    }));
  } catch (error) {
    console.error('Error fetching Uber requests:', error);
    throw error;
  }
};

const mapUberStatus = (uberStatus: string): RequestStatus => {
  switch (uberStatus.toLowerCase()) {
    case 'pending':
      return RequestStatus.UNCONFIRMED;
    case 'accepted':
    case 'arrived':
    case 'in_progress':
      return RequestStatus.CONFIRMED;
    case 'completed':
    case 'cancelled':
      return RequestStatus.COMPLETED;
    default:
      return RequestStatus.UNCONFIRMED;
  }
}; 
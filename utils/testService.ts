import uuid from 'react-native-uuid';

import nameData from '../mocks/name';
import ADDRESSES from '../mocks/address';
import { convert2RequestData } from './index';

export const getRideRequests = async () => {
  const requests = [];
  for (let i = 0; i < 50; i++) {
    const request = generateRandomRideRequest();
    const requestData = convert2RequestData(request);
    requests.push(requestData);
  }

  return requests.sort((a, b) => b.requestTime.getTime() - a.requestTime.getTime());
}

function getRandomNYPhoneNumber() {
  const areaCodes = [212, 347, 646, 718, 917, 929, 332];
  
  // Pick a random area code
  const areaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];
  
  // Generate random 7-digit phone number (XXX-XXXX)
  const centralOfficeCode = Math.floor(100 + Math.random() * 900); // ensures no leading 0
  const lineNumber = Math.floor(1000 + Math.random() * 9000);      // ensures 4 digits

  return `+1${areaCode}${centralOfficeCode}${lineNumber}`;
}

function generateRandomRideRequest() {
  const random = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
  const firstName = random(nameData.RIDER_FIRST_NAMES);
  const lastName = random(nameData.RIDER_LAST_NAMES);
  const pickup = random(ADDRESSES);
  const dropoff = random(ADDRESSES);
  if (pickup === dropoff) return generateRandomRideRequest();
  
  const requestId = uuid.v4();
  
  const guestPhoneNumber = getRandomNYPhoneNumber();
  const driverPhoneNumber = getRandomNYPhoneNumber();

  const response = {
    request_id: requestId,
    request_time: Date.now()-Math.floor(Math.random() * 1000*60*5),
    status: "accepted",
    surge_multiplier: 1,
    requester_name: `${firstName} ${lastName}`,
    requester_uuid: uuid.v4(),
    guest: {
      first_name: firstName,
      last_name: lastName,
      guest_id: uuid.v4(),
      phone_number: guestPhoneNumber,
      locale: "en",
    },
    driver: {
      id: uuid.v4(),
      name: "Joe",
      phone_number: driverPhoneNumber,
      sms_number: driverPhoneNumber,
      pin_based_phone_number: {
        phone_number: driverPhoneNumber,
        pin: String(Math.floor(10000000 + Math.random() * 89999999))
      },
      rating: 4.9,
      picture_url: "https://d1w2poirtb3as9.cloudfront.net/exampleurl",
      regulatory_info: "Licensed by TfL, PHL 123456789"
    },
    vehicle: {
      license_plate: "ABC" + Math.floor(1000 + Math.random() * 9000),
      make: "Oldsmobile",
      model: "Intrigue",
      vehicle_color_name: "white"
    },
    product: {
      product_id: uuid.v4(),
      display_name: "UberX"
    },
    pickup: {
      ...pickup,
      eta: Math.floor(Math.random() * 5) + 1,
      subtitle: "New York, NY",
      timezone: "America/New_York",
      place: {
        place_id: pickup.place_id,
        provider: "google_places"
      }
    },
    destination: {
      ...dropoff,
      eta: Math.floor(Math.random() * 20) + 5,
      subtitle: "New York, NY",
      timezone: "America/New_York",
      place: {
        place_id: dropoff.place_id,
        provider: "google_places"
      }
    },
    location: {
      bearing: 0,
      latitude: pickup.latitude + (Math.random() * 0.01),
      longitude: pickup.longitude + (Math.random() * 0.01)
    },
    location_uuid: uuid.v4(),
    note_for_driver: "Please pick me up near the entrance.",
    expense_memo: "Business ride",
    rider_tracking_url: `https://trip.uber.com/${Math.random().toString(36).substr(2, 10)}`,
    editable_fields: {
      PICKUP: { editable: false, max_radius_meters: 200 },
      STOPS: { editable: false },
      DROPOFF: { editable: false }
    }
  };
  return response;
}

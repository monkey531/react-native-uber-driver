import { RequestData, RequestStatus } from "./types";


export const convert2RequestData = (request: any): RequestData => {
  return {
    id: request.request_id,
    guestName: request.requester_name,
    pickupAddress: request.pickup.address,
    dropoffAddress: request.destination.address,
    requestTime: new Date(request.request_time),
    phoneNumber: request.guest.phone_number,
    status: RequestStatus.UNCONFIRMED,
    location: {
      pickup: {
        latitude: request.pickup.latitude,
        longitude: request.pickup.longitude
      },
      dropoff: {
        latitude: request.destination.latitude,
        longitude: request.destination.longitude
      }
    }
  };
};
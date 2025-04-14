import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { NextApiRequest, NextApiResponse } from "next";

interface RideRequest {
  request_id: string;
  pickup: string;
  dropoff: string;
}

export const getRideRequests = async (): Promise<RideRequest[]> => {
  try {
    const accessToken = await SecureStore.getItemAsync("uberAccessToken");

    if (!accessToken) {
      console.error("No Uber access token found. Authenticate first.");
      return [];
    }

    const response = await axios.get<{ requests: RideRequest[] }>(
      "https://api.uber.com/v1/requests",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data.requests;
  } catch (error) {
    console.error("Error fetching ride requests:", error);
    return [];
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const requests = await getRideRequests();
    return res.status(200).json({ requests });
  } catch (error) {
    console.error("Error in ride requests handler:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

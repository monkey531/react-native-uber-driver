import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { NextApiRequest, NextApiResponse } from "next";

const UBER_CLIENT_ID = "_I2fabO49ax4_RFbCA1JJeUEKbj2BWnc";
const UBER_CLIENT_SECRET = "tA8Y8O_PEpOJB9sK4SU6uBXrp_guCAz2UFBBc6hZ";
const auth = btoa(`${UBER_CLIENT_ID}:${UBER_CLIENT_SECRET}`);

interface AuthResponse {
  access_token: string;
}

export const getUberAccessToken = async (): Promise<string | null> => {
  try {
    const response = await axios.post<AuthResponse>(
      "https://login.uber.com/oauth/v2/token",
      new URLSearchParams({
        // client_id: UBER_CLIENT_ID,
        // client_secret: UBER_CLIENT_SECRET,
        grant_type: "client_credentials",
        scope: "profile request history",
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    const accessToken = response.data.access_token;
    await SecureStore.setItemAsync("uberAccessToken", accessToken);
    return accessToken;
  } catch (error) {
    console.error("Error getting Uber access token:", error);
    return null;
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
    const token = await getUberAccessToken();
    if (!token) {
      return res.status(500).json({ message: "Failed to get Uber access token" });
    }
    return res.status(200).json({ token });
  } catch (error) {
    console.error("Error in Uber auth handler:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

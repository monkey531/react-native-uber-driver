import { Stack } from "expo-router";
import RiderProvider from "@/app/provider/RiderProvider";
export default function RootLayout() {
  return (
    <RiderProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </RiderProvider>
  )
}

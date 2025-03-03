import { IconSymbol } from "@/app-example/components/ui/IconSymbol.ios";
import { Stack, Tabs } from "expo-router";

export default function TabLayout() {
  return <Tabs>
    <Tabs.Screen name="index" options={{
      title: "Home",
      tabBarIcon: ({ color }) => 
        <IconSymbol
          name="house.fill"
          size={26}
          color={"black"}
          />
    }} />
        <Tabs.Screen name="list" options={{
      title: "List",
      tabBarIcon: ({ color }) => 
        <IconSymbol
          name="list.bullet"
          size={26}
          color={"black"}
          />
    }} />
  </Tabs>
}

import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "blue",
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            focused={focused}
                            name="home"
                            size={24}
                            color={color} />
                    ),
                }} />
            <Tabs.Screen
                name="save"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons 
                        name="bookmark" 
                        size={24} 
                        color={color} />
                    ),
                }} />
        </Tabs>
    );
}
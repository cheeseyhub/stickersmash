import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'
import { Ionicons } from "@react-native-vector-icons/ionicons"

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#ffd33d",
            tabBarInactiveTintColor: "white",
            headerStyle: {
                backgroundColor: "#25292e"
            },
            headerTintColor: "#fff",
            headerShadowVisible: false,
            tabBarStyle: {
                backgroundColor: "#25292e"
            }
        }}>
            <Tabs.Screen name='index' options={{
                title: "Home", tabBarIcon: ({ color, focused }) => {
                    return <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />
                }
            }} />
            <Tabs.Screen name='about' options={{
                title: "about", tabBarIcon: ({ color, focused }) => {
                    return <Ionicons name={focused ? "information-circle" : 'information-circle-outline'} color={color} size={24} />
                }
            }} />
        </Tabs>

    )
}

const styles = StyleSheet.create({})
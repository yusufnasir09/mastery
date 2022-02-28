import * as React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from "../../features/Home/screens/home.screen";
import { SettingsScreen } from "../../features/Settings/screens/settings.screen";
import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

export const MyTab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.brand.primary,
                    tabBarInactiveTintColor: colors.brand.muted,
                    tabBarStyle: { height: '7%' },
                }}>
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home-circle" color={color} size={30} />
                        ),
                    }} />
                <Tab.Screen name="Settings" component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-settings-outline" color={color} size={30} />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
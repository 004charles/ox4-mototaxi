import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { LayoutDashboard, UserCircle, Map as MapIcon } from 'lucide-react-native';

import { DriverHomeScreen } from '../screens/driver/DriverHomeScreen';
import { IncomingRequestScreen } from '../screens/driver/IncomingRequestScreen';
import { DriverProfileScreen } from '../screens/driver/DriverProfileScreen';

import { COLORS } from '../theme/theme';

const Tab = createBottomTabNavigator();
const DriverHomeStack = createStackNavigator();

const DriverHomeStackScreen = () => (
    <DriverHomeStack.Navigator screenOptions={{ headerShown: false }}>
        <DriverHomeStack.Screen name="DriverHomeMain" component={DriverHomeScreen} />
        <DriverHomeStack.Screen name="IncomingRequest" component={IncomingRequestScreen} />
    </DriverHomeStack.Navigator>
);

export const DriverTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return <MapIcon size={size} color={color} />;
                    } else if (route.name === 'Profile') {
                        return <UserCircle size={size} color={color} />;
                    }
                    return null;
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.border,
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                }
            })}
        >
            <Tab.Screen name="Home" component={DriverHomeStackScreen} options={{ title: 'Mapa' }} />
            <Tab.Screen name="Profile" component={DriverProfileScreen} options={{ title: 'Portal' }} />
        </Tab.Navigator>
    );
};

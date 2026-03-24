import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, History, User } from 'lucide-react-native';

// Passenger Screens
import { HomeScreen } from '../screens/passenger/HomeScreen';
import { HistoryScreen } from '../screens/passenger/HistoryScreen';
import { ProfileScreen } from '../screens/passenger/ProfileScreen';
import { RequestRideScreen } from '../screens/passenger/RequestRideScreen';
import { ActiveRideScreen } from '../screens/passenger/ActiveRideScreen';
import { RideSummaryScreen } from '../screens/passenger/RideSummaryScreen';

import { COLORS } from '../theme/theme';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="HomeMain" component={HomeScreen} />
        <HomeStack.Screen name="RequestRide" component={RequestRideScreen} />
        <HomeStack.Screen name="ActiveRide" component={ActiveRideScreen} />
        <HomeStack.Screen name="RideSummary" component={RideSummaryScreen} />
    </HomeStack.Navigator>
);

export const PassengerTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return <Home size={size} color={color} />;
                    } else if (route.name === 'History') {
                        return <History size={size} color={color} />;
                    } else if (route.name === 'Profile') {
                        return <User size={size} color={color} />;
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
            <Tab.Screen name="Home" component={HomeStackScreen} options={{ title: 'Início' }} />
            <Tab.Screen name="History" component={HistoryScreen} options={{ title: 'Corridas' }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
        </Tab.Navigator>
    );
};

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { WelcomeScreen } from '../screens/auth/WelcomeScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';
import { DriverLoginScreen } from '../screens/auth/DriverLoginScreen';

import { PassengerTabs } from './PassengerTabs';
import { DriverTabs } from './DriverTabs';

const Stack = createStackNavigator();

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#FFFFFF' }
                }}
            >
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="PassengerAuth" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="DriverAuth" component={DriverLoginScreen} />

                {/* Main App Stacks */}
                <Stack.Screen name="PassengerApp" component={PassengerTabs} />
                <Stack.Screen name="DriverApp" component={DriverTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

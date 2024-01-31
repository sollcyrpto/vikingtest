import React from 'react';
import { Button } from 'react-native';
import Main from './components/home';
import Merchant from './components/merchant';
import Earn from './components/earn';
import Marketplace from './components/marketplace';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                />
                <Stack.Screen
                    name="Merchant"
                    component={Merchant}
                    options={({ navigation }) => ({
                        headerLeft: () => (
                            <Button
                                onPress={() => navigation.navigate('Main')} // Перенаправляем на экран 'Main'
                                title="Back"
                            />
                        ),
                    })}
                />
                <Stack.Screen
                    name="Earn"
                    component={Earn}
                    options={({ navigation }) => ({
                        headerLeft: () => (
                            <Button
                                onPress={() => navigation.navigate('Main')} // Перенаправляем на экран 'Main'
                                title="Back"
                            />
                        ),
                    })}
                />
                <Stack.Screen
                    name="Marketplace"
                    component={Marketplace}
                    options={({ navigation }) => ({
                        headerLeft: () => (
                            <Button
                                onPress={() => navigation.navigate('Main')} // Перенаправляем на экран 'Main'
                                title="Back"
                            />
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

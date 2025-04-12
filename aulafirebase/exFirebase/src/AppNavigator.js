import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UsersListScreen from "./screens/UsersListScreen";
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Register">
                <Stack.Screen 
                    name="Register" 
                    component={RegisterScreen} 
                    options={{ title: "Cadastro" }} 
                />
                <Stack.Screen 
                    name="UserList" 
                    component={UsersListScreen} 
                    options={{ title: "Usuário Cadastrado" }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './views/Login';
import Register from './views/Register';
import UserProvider from './state/UserContext';

const Stack = createStackNavigator();

const App = () => {
    return (
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTintColor: 'white',
                        headerStyle: { backgroundColor: '#8D4F1A' },
                    }}
                    >
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{ title: 'Logowanie', headerTitleAlign: 'center'}}
                        />
                        <Stack.Screen
                            name="Register"
                            component={Register}
                            options={{ title: 'Rejestracja', headerTitleAlign: 'center'}}
                        />
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
};

export default App;
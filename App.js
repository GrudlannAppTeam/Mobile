import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './views/Login';
import Home from './views/Home';
import UserProvider from './state/UserContext';
import TastingRoomProvider from './state/TastingRoomContext';
import TastingRoom from './views/TastingRoom';
import Review from './views/ReviewForm';

const Stack = createStackNavigator();

const App = () => {
    return (
        <UserProvider>
            <TastingRoomProvider>
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
                                name="Home"
                                component={Home}
                                options={{ title: 'Grudlann app', headerTitleAlign: 'center'}}
                            />
                            <Stack.Screen
                                name="Tasting"
                                component={TastingRoom}
                                options={{ title: 'Tasting room', headerTitleAlign: 'center'}}
                            />
                             <Stack.Screen
                                name="Review"
                                component={Review}
                                options={{ title: 'Review', headerTitleAlign: 'center'}}
                            />
                    </Stack.Navigator>
                </NavigationContainer>
            </TastingRoomProvider>
        </UserProvider>
    );
};

export default App;
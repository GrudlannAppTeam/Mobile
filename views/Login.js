import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Alert, ActivityIndicator } from 'react-native';
import Button from '../components/Button/Button.js'
import image from '../assets/home.png'
import { UserContext } from '../state/UserContext'
import { login } from '../service/auth';

export default function Login({ navigation }) {
    const [email, onChangeEmail] = useState('');
    const [pwd, onChangePwd] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { user, setUser } = useContext(UserContext)

    const loginUser = async () => {
        setIsLoading(true);
        setError(false);
        if (email === "" || pwd === "") {
            setError("Email i hasło są wymagane");
            setIsLoading(false);
            return;
        }
        const res = await login({ email: email, password: pwd });

        setIsLoading(false);
        if(res) {
            setUser(res);
            navigation.replace('Home')
        } else {
            setError(true);
        }
    };

    return isLoading ? (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#a76f07" />
        </View>
    ) : (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <Text style={styles.text}>Logowanie</Text>
                    {error && <Text style={styles.error}>Niepoprawne dane</Text>}
                    <StatusBar style="light" />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder='Email'
                        placeholderTextColor="#FFF"
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={onChangePwd}
                        value={pwd}
                        placeholder='Hasło'
                        placeholderTextColor="#FFF"
                    />
                    <Button title='Zaloguj' onPress={loginUser}/>
                </ImageBackground>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%'
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
        marginBottom: 20,
    },
    error: {
        color: "red",
        fontSize: 16,
        textAlign: "center",
    },
    input: {
        borderColor: 'white',
        borderWidth: 2,
        marginHorizontal: 30,
        color: 'white',
        padding: 10,
        marginTop: 20,
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

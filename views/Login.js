import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import Button from '../components/Button/Button.js'
import image from '../assets/home.png'
import { UserContext } from '../state/UserContext'
import { login } from '../service/auth';

export default function Login({ navigation }) {
    const [value, onChangeText] = React.useState();
    const [value2, onChangeText2] = React.useState();

    const [ user, setUser ] = React.useState(null)

    const loginUser = async () => {
        const res = await login({ email: value, password: value2 });

        setUser(res);
    };

    return (
        <UserContext.Consumer>
            {context => (
                <>
                    <View style={styles.container}>
                        <ImageBackground source={image} style={styles.image}>
                            <Text style={styles.text}>Logowanie</Text>
                            <Text style={styles.text}>{user}</Text>
                            <StatusBar style="light" />
                            <TextInput
                                style={styles.input}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                                placeholder=''
                                placeholderTextColor="#FFF"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={text => onChangeText2(text)}
                                value={value2}
                                placeholder='Hasło'
                                placeholderTextColor="#FFF"
                            />
                            <Button title='Zaloguj' onPress={loginUser}/>
                            <Button
                                title='Zarejestruj'
                                onPress={() => navigation.push('Register')}
                            />
                        </ImageBackground>
                    </View>
                </>
            )}
        </UserContext.Consumer>
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
    input: {
        borderColor: 'white',
        borderWidth: 2,
        marginHorizontal: 30,
        color: 'white',
        padding: 10,
        marginTop: 20,
    }
});

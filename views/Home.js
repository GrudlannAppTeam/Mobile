import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Alert, ActivityIndicator } from 'react-native';
import image from '../assets/home.png'
import AppButton from '../components/Button/Button';
import { getTastingRoomById, joinToTastingRoom } from '../service/tastingRoom';
import { UserContext } from '../state/UserContext'

export default function Home({ navigation }) {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { user, setUser } = useContext(UserContext)


    const join = async () => {
        setIsLoading(true);
        setError(false);
        const id = await joinToTastingRoom({ token: user.token, code: code })

        if(id) {
            const tastingRoom = await getTastingRoomById({ token: user.token, id: id });
            setUser({ ...user, tastingRoom: tastingRoom });
        } else {
            setError(true);
        }
        setIsLoading(false);
    };

    const logout = () => {
        setUser(null);
        navigation.replace('Login');
    };

    return isLoading ? (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#a76f07" />
        </View>
    ) : (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <Text style={styles.text}>Witaj {user.nick} w mobilnej wersji aplikacji.</Text>
                    <Text style={styles.text}>Za jej pomocą możesz dołączyć do istniejącej degustacji za pomocą kodu i ocenić piwa.</Text>
                    {error && <Text style={styles.error}>Niepoprawny kod</Text>}
                    {!user.tastingRoom ?
                        <>
                            <TextInput
                                style={styles.input}
                                onChangeText={setCode}
                                value={code}
                                placeholder='Wpisz kod aby dołączyć'
                                placeholderTextColor="#FFF"
                            />
                            <AppButton title='Dołącz' onPress={join}/>
                        </>
                        : <AppButton title='Przejdź do tasting roomu' onPress={() => navigation.push('Tasting')}/>
                    }
                    <AppButton title='Wyloguj' onPress={logout}/>
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
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center",
        paddingHorizontal: 20,
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

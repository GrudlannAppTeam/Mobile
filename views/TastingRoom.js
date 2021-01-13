import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Alert, ActivityIndicator } from 'react-native';
import image from '../assets/home.png'
import AppButton from '../components/Button/Button';
import { getTastingRoomById } from '../service/tastingRoom';
import { UserContext } from '../state/UserContext'

export default function TastingRoom({ navigation }) {
    const [isLoading, setIsLoading] = useState(false);
    const { user, setUser } = useContext(UserContext)


    useEffect(() => {
        const fetchData = async () => {
            const tastingRoom = await getTastingRoomById({ token: user.token, id: user.tastingRoom.id });
            setUser({ ...user, tastingRoom: tastingRoom });
            setIsLoading(false);
        }

        if(user.tastingRoom && user.tastingRoom.id) {
            setIsLoading(true);
            fetchData();
        }
    }, []);

    const handleClick = id => () => {
        console.log('Ocena piwa o id', id);
    };

    return isLoading ? (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#a76f07" />
        </View>
    ) : (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <Text style={styles.text}>Oceń poniższe piwa</Text>
                    {
                        user.tastingRoom.beers.map(beer => <AppButton disabled={true} key={beer.id} title={beer.name} onPress={handleClick(beer.id)}/>)
                    }
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

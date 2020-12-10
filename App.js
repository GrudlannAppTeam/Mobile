import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';

import image from './assets/home.png'

export default function App() {
  const [value, onChangeText] = React.useState();
  const [value2, onChangeText2] = React.useState();
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>Logowanie</Text>
        <StatusBar style="auto" />
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder='Login'
          placeholderTextColor="#FFF"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText2(text)}
          value={value2}
          placeholder='Hasło'
          placeholderTextColor="#FFF"
        />
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
  input: {
    borderColor: 'white',
    borderWidth: 2,
    marginHorizontal: 30,
    color: 'white',
    padding: 10,
    marginTop: 20,
  }
});

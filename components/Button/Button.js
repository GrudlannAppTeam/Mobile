import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const AppButton = ({ onPress, title = 'Buttons' }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 3,
        backgroundColor: "#8D4F1A",
        color: '#000',
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal: 30,
        marginVertical: 10,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default AppButton;
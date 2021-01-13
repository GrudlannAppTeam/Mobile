import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const AppButton = ({ onPress, title = 'Buttons', disabled = false }) => (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={disabled ? styles.disabled : styles.appButtonContainer}>
        <Text style={disabled ? styles.disabledText : styles.appButtonText}>{title}</Text>
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
    disabled: {
        elevation: 3,
        backgroundColor: "#3a1f08",
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
    },
    disabledText: {
        fontSize: 16,
        color: "#d8d6d6",
        fontStyle: 'italic',
        textDecorationLine: 'line-through',
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default AppButton;
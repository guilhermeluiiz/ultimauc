import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.text}>Tela Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Screen1')} style={styles.button}>
            <Text style={styles.buttonText}>Ir para Tela 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Screen2')} style={styles.button}>
            <Text style={styles.buttonText}>Ir para Tela 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Screen3')} style={styles.button}>
            <Text style={styles.buttonText}>Ir para Tela 3</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default HomeScreen;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Screen2 = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Tela 2</Text>
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
    },
});

export default Screen2;

import React, { useEffect } from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home'); 
        }, 3000); 
    }, [navigation]);

    return (
        <View style={styles.container}>
            {/* Exibe a imagem do ícone */}
            <Image 
                source={require('../assets/splash-icon.png')} 
                style={styles.icon}
                resizeMode="contain" 
            />
            {/* Indicador de carregamento abaixo do ícone */}
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 150, 
        height: 150, 
        marginBottom: 20,
    },
});

export default SplashScreen;



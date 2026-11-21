import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const imagenes = [
    { nombre: 'react', source: require('../../assets/images/react-logo.png') },
    { nombre: 'expo', source: require('../../assets/images/expo-logo.png') },
    { nombre: 'icono', source: require('../../assets/images/icon.png') },
];

export default function ImagenAleatoriaScreen() {
    const [indice, setIndice] = useState(0);
    const elegida = imagenes[indice];

    const elegirAleatoria = () => {
        setIndice(Math.floor(Math.random() * imagenes.length));
    };
    return (
        <SafeAreaView style={styles.pantalla}>
            <Image source={elegida.source} style={styles.imagen} />
            <Text style={styles.nombre}>{elegida.nombre}</Text>
            <TouchableOpacity style={styles.boton} onPress={elegirAleatoria}>
                <Text style={styles.textoBoton}>Imagen aleatoria</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    pantalla: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    },
    imagen: {
        width: 120,
        height: 120
    },
    nombre: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    boton: {
        backgroundColor: '#2563eb',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8
    },
    textoBoton: {
        color: 'white',
        fontWeight: 'bold'
    },
});
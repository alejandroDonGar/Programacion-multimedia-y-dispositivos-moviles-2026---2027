import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const COLORES = ['lightblue', 'lightgreen', 'salmon', 'gold', 'plum', 'lightgray'];

export default function ColorAleatorioScreen() {
    // Aqui se guarda el color del fondo
    // Por defecto es blanco
    const [fondo, setFondo] = useState('white');
    const cambiarColor = () => {
        const posicion = Math.floor(Math.random() * COLORES.length);
        const colorElegido = COLORES[posicion];

        Alert.alert(
            'Cambiar color',
            `¿Quieres cambiar el fondo a ${colorElegido}?`,
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Aceptar', onPress: () => setFondo(colorElegido) },
            ]
        );
    };

    return (
        <View style={[styles.contenedor, { backgroundColor: fondo }]}>
            <Button title="Cambio de color" onPress={cambiarColor} />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
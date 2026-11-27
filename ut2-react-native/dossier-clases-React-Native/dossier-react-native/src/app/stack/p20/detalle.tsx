import { Button, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

export default function DetalleP20Screen() {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Detalles</Text>
            <Text style={styles.subtitulo}>La pantalla está encima de la anterior dentro de la pila</Text>
            <Button title="Volver atrás" onPress={() => router.back()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
        gap: 12,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitulo: {
        fontSize: 15,
        color: '#555',
        textAlign: 'center',
        marginBottom: 10
    }
})
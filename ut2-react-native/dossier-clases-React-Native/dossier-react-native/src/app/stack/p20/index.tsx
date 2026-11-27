import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function InicioP20Screen() {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Pantalla de Incio</Text>
            <Text style={styles.subtitulo}>Pulsa el enlace para abrir otra pantalla</Text>
            <Link href="/stack/p20/detalle" style={styles.botonEnlace}>Ir a detalle</Link>
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
        gap: 12
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitulo: {
        fontSize: 15,
        color: '#555',
        textAlign: 'center'
    },
    botonEnlace: {
        marginTop: 10,
        backgroundColor: '#1976d2',
        color: 'white',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        fontWeight: 'bold',
        overflow: 'hidden'
    }
})
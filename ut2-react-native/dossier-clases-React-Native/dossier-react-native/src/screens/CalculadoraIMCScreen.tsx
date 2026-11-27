import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CardPersona from '../components/CardPersona';

export default function CalculadoraIMCScreen() {
    //* -------------------------- *//
    //? Estado con el array de identificadores estables de cada tarjeta
    const [idsTarjetas, setIdsTarjetas] = useState<string[]>(['1']);

    // Añade un nuevo identificador único al array
    const anadirTarjeta = () => {
        const nuevoId = Date.now().toString();
        setIdsTarjetas((actual) => [...actual, nuevoId]);
    };

    // Elimina la tarjeta cuyo id coincida con el recibido desde el hijo
    const eliminarTarjeta = (idAEliminar: string) => {
        setIdsTarjetas((actual) => actual.filter((id) => id !== idAEliminar));
    };
    //* -------------------------- *//

    return (
        <View style={styles.contenedor}>
            {/* Cabecera con el botón «+» para añadir tarjetas */}
            <View style={styles.cabecera}>
                <Text style={styles.titulo}>Calculadora de IMC</Text>
                <TouchableOpacity style={styles.botonAnadir} onPress={anadirTarjeta}>
                    <Ionicons name="add" size={26} color="white" />
                </TouchableOpacity>
            </View>

            {/* Listado de tarjetas */}
            <FlatList
                data={idsTarjetas}
                keyExtractor={(item) => item}
                contentContainerStyle={styles.listaContenido}
                ListEmptyComponent={
                    <Text style={styles.vacio}>Pulsa el botón «+» para añadir una tarjeta.</Text>
                }
                renderItem={({ item }) => (
                    <CardPersona id={item} onEliminar={eliminarTarjeta} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
        gap: 12,
    },
    cabecera: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    botonAnadir: {
        backgroundColor: '#1976d2',
        width: 42,
        height: 42,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listaContenido: {
        gap: 12,
        paddingBottom: 20,
    },
    vacio: {
        textAlign: 'center',
        color: '#888',
        marginTop: 30,
        fontSize: 15,
    },
});
import { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//* ---------------------- *//
//? Como en las otras practicas, creamos la entidad con los datos del diario
type Entrada = {
    id: string;
    texto: string;
    fecha: string;
    icono: 'happy-outline' | 'sad-outline' | 'chatbubble-outline';
};
//* ---------------------- *//

export default function DiarioEmocionesScreen() {
    const [texto, setTexto] = useState('');
    const [lista, setLista] = useState<Entrada[]>([]);

    const guardar = () => {
        if (!texto.trim()) {
            Alert.alert('Error', 'Escribe algo primero');
            return;
        }
        //* -------------------------- *//

        //* -------------------------- *//
        // Elegimos el icono segun si el texto tiene :-) o :-(
        let iconoElegido: 'happy-outline' | 'sad-outline' | 'chatbubble-outline' = 'chatbubble-outline';

        if (texto.includes(':-)')) {
            iconoElegido = 'happy-outline'; // Carita feliz
        } else if (texto.includes(':-(')) {
            iconoElegido = 'sad-outline'; // Carita triste
        }
        //* -------------------------- *//

        //* -------------------------- *//
        // Sacamos la fecha y la hora actual (incluidos los segundos)
        const ahora = new Date();
        const fechaConSegundos = `${ahora.toLocaleDateString()} ${ahora.toLocaleTimeString()}`;

        // Creamos el objeto con todos los datos de la nueva entrada
        const nuevaEntrada: Entrada = {
            id: Date.now().toString(),
            texto: texto.trim(),
            fecha: fechaConSegundos,
            icono: iconoElegido,
        };
        //* -------------------------- *//

        //* -------------------------- *//
        //? Guardamos y limpiamos
        // Añadimos la nueva entrada al principio de la lista sin borrar las anteriores
        setLista([nuevaEntrada, ...lista]);

        // Vaciamos el TextInput para poder escribir otra entrada nueva
        setTexto('');
        //* -------------------------- *//
    };

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Diario de emociones</Text>
            <TextInput
                style={styles.input}
                placeholder="Escribe aquí (usa :-) o :-( )"
                value={texto}
                onChangeText={setTexto}
            />
            <Button title="Añadir al diario" onPress={guardar} />
            <FlatList
                style={styles.lista}
                data={lista}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarjeta}>
                        <Ionicons name={item.icono} size={28} color="#333" />
                        <View style={styles.textos}>
                            <Text style={styles.fecha}>{item.fecha}</Text>
                            <Text style={styles.mensaje}>{item.texto}</Text>
                        </View>
                    </View>
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
        gap: 10,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
    },
    lista: {
        marginTop: 10,
    },
    tarjeta: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
        gap: 12,
    },
    textos: {
        flex: 1,
    },
    fecha: {
        fontSize: 12,
        color: 'gray',
    },
    mensaje: {
        fontSize: 16,
    },
});
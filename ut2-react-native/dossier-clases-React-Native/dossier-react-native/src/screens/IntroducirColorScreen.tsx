import { useState } from 'react';
import { Alert, Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

export default function IntroducirColorScreen() {
    const [fondo, setFondo] = useState('white');
    const [visible, setVisible] = useState(false);
    const [colorEscrito, setColorEscrito] = useState('');

    const esColorValido = (texto: string) => {
        const limpio = texto.trim().toLowerCase();
        if (!limpio) return false;

        const esHex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/.test(limpio);

        const nombresCSS = [
            'white', 'black', 'red', 'green', 'blue', 'yellow', 'orange',
            'purple', 'pink', 'gray', 'grey', 'brown', 'cyan', 'magenta',
            'lightblue', 'lightgreen', 'salmon', 'gold', 'plum', 'lightgray',
        ];

        return esHex || nombresCSS.includes(limpio);
    };

    const aceptarColor = () => {
        const limpio = colorEscrito.trim().toLowerCase();

        if (esColorValido(limpio)) {
            // cambiar fondo
            setFondo(limpio);
            // Limpiar el espacio
            setColorEscrito(''); 
            // Cerrar el dialogo 
            setVisible(false);
        } else {
            Alert.alert('Color no válido', 'Escribe un color CSS válido (ej. lightblue) o hexadecimal (ej. #ff0000).');
        }
    };

    const cancelar = () => {
        // Limpia sin cambiar el fondo.
        setColorEscrito('');
        setVisible(false);
    };

    return (
        <View style={[styles.contenedor, { backgroundColor: fondo }]}>
            <Button title="Cambiar de color" onPress={() => setVisible(true)} />

            {/* Diálogo compatible con Android e iOS */}
            <Modal
                visible={visible}
                transparent
                animationType="fade"
                onRequestClose={cancelar}
            >
                <View style={styles.fondoOscuro}>
                    <View style={styles.cajaDialogo}>
                        <Text style={styles.titulo}>Introduce un color</Text>

                        <TextInput
                            style={styles.input}
                            value={colorEscrito}
                            onChangeText={setColorEscrito}
                            placeholder="Ej: lightblue o #ff9f0a"
                            autoCapitalize="none"
                        />

                        <View style={styles.botones}>
                            <Button title="Cancelar" color="gray" onPress={cancelar} />
                            <Button title="Aceptar" onPress={aceptarColor} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fondoOscuro: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#0008',
    },
    cajaDialogo: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 12,
        gap: 12,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
    },
    botones: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
    },
});

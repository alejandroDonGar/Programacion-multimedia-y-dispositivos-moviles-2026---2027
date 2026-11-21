import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Estos son los valores que podremos seleccinar como valores 'validos' del justifyContent
const JUSTIFY = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'] as const;
type Justify = (typeof JUSTIFY)[number];

// Y estos son los valores que podremos seleccionar pero esta vez de alignItems
const ALIGN = ['flex-start', 'center', 'flex-end', 'stretch'] as const;
type Align = (typeof ALIGN)[number];

export default function PantallaDeAlineacion() {
    const [texto, setTexto] = useState('flex-start');
    const [justify, setJustify] = useState<Justify>('flex-start');
    const [align, setAlign] = useState<Align>('flex-start');
    const cambiarTexto = (valor: string) => {
        setTexto(valor);
        const limpio = valor.trim().toLocaleLowerCase();
        // Aqui lo que hacemos es comprobar si dentro de la lista de opciones de JUSTIFY esta la valiable preparada 'limpio'
        // Si está, cambiamos el valor de valor de justify con su set.
        if ((JUSTIFY as readonly string[]).includes(limpio)) {
            setJustify(limpio as Justify);
        }
    }
    // La opcion que pongamos solo será válida si el texto que introducimos coincide con una de las variables de la lista de JUSTIFY
    const esValido = (JUSTIFY as readonly string[]).includes(texto.trim().toLocaleLowerCase());

    return (
        <SafeAreaView style={styles.pantalla}>
            <TextInput
                style={[styles.input, !esValido && styles.inputError]}
                value={texto}
                onChangeText={cambiarTexto}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="justifyContent"
            />
            {!esValido && <Text style={styles.error}>Valores: {JUSTIFY.join(', ')}</Text>}
            <View style={styles.controles}>
                {ALIGN.map(valor => (
                    <TouchableOpacity
                        key={valor}
                        style={[styles.boton, align === valor && styles.botonActivo]}
                        onPress={() => setAlign(valor)}>
                        <Text style={styles.textoBoton}>{valor}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.estado}>justifyContent: {justify}{'\n'}alignItems: {align}</Text>
            <View style={[styles.escenario, { justifyContent: justify, alignItems: align }]}>
                <Image source={require('../../assets/images/react-logo.png')} style={styles.imagen} />
                <Image source={require('../../assets/images/expo-logo.png')} style={styles.imagen} />
                <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.imagen} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    pantalla: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 15
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#2563eb',
        borderRadius: 8,
        padding: 10,
        marginTop: 10
    },
    inputError: {
        borderColor: '#dc2626'
    },
    error: {
        color: '#dc2626',
        fontSize: 12,
        marginTop: 4
    },
    controles: {
        flexDirection: 'row',
        gap: 6,
        marginVertical: 10
    },
    boton: {
        flex: 1,
        backgroundColor: '#93c5fd',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center'
    },
    botonActivo: {
        backgroundColor: '#2563eb'
    },
    textoBoton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 11
    },
    estado: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    escenario: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        padding: 10
    },
    imagen: {
        width: 80,
        height: 80
    },
});
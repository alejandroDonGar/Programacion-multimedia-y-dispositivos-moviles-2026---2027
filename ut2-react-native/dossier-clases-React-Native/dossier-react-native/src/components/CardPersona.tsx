import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//* -------------------------- *//
//? Props que recibe cada tarjeta desde el componente padre
type CardPersonaProps = {
    id: string;
    onEliminar: (id: string) => void;
};
//* -------------------------- *//

export default function CardPersona({ id, onEliminar }: CardPersonaProps) {
    // Estados locales de cada tarjeta
    const [nombre, setNombre] = useState('');
    const [altura, setAltura] = useState(''); // En metros (ej. 1.75)
    const [peso, setPeso] = useState('');     // En kg

    //* -------------------------- *//
    //? Cálculo y validación del IMC (peso / altura^2)
    const calcularIMC = () => {
        const pesoNum = Number(peso.replace(',', '.'));
        let alturaNum = Number(altura.replace(',', '.'));

        if (!peso.trim() || !altura.trim() || isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
            return null;
        }

        // Si el usuario escribe la altura en centímetros (ej. 175), la pasamos a metros (1.75)
        if (alturaNum > 3) {
            alturaNum = alturaNum / 100;
        }

        const imc = pesoNum / (alturaNum * alturaNum);
        return imc.toFixed(2);
    };


    const imcResultado = calcularIMC();
    //* -------------------------- *//

    return (
        <View style={styles.tarjeta}>
            {/* Cabecera de la tarjeta con el botón de eliminar */}
            <View style={styles.cabecera}>
                <Text style={styles.idTexto}>ID: {id}</Text>
                <TouchableOpacity onPress={() => onEliminar(id)} style={styles.botonEliminar}>
                    <Ionicons name="trash-outline" size={22} color="#d32f2f" />
                </TouchableOpacity>
            </View>

            {/* Campos locales de la persona */}
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
            />

            <View style={styles.filaInputs}>
                <TextInput
                    style={[styles.input, styles.inputMitad]}
                    placeholder="Altura (m) ej: 1.75"
                    value={altura}
                    onChangeText={setAltura}
                    keyboardType="numeric"
                />
                <TextInput
                    style={[styles.input, styles.inputMitad]}
                    placeholder="Peso (kg) ej: 70"
                    value={peso}
                    onChangeText={setPeso}
                    keyboardType="numeric"
                />
            </View>

            {/* Resultado del IMC */}
            <View style={styles.cajaResultado}>
                {imcResultado ? (
                    <Text style={styles.textoResultado}>
                        IMC de {nombre.trim() ? nombre.trim() : 'la persona'}: <Text style={styles.valorIMC}>{imcResultado}</Text>
                    </Text>
                ) : (
                    <Text style={styles.textoAviso}>Introduce altura y peso válidos (&gt; 0)</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tarjeta: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        gap: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    cabecera: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    idTexto: {
        fontSize: 12,
        color: '#888',
        fontWeight: 'bold',
    },
    botonEliminar: {
        padding: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
    },
    filaInputs: {
        flexDirection: 'row',
        gap: 10,
    },
    inputMitad: {
        flex: 1,
    },
    cajaResultado: {
        marginTop: 4,
        padding: 10,
        backgroundColor: '#f0f4f8',
        borderRadius: 8,
        alignItems: 'center',
    },
    textoResultado: {
        fontSize: 15,
        color: '#333',
    },
    valorIMC: {
        fontWeight: 'bold',
        color: '#1976d2',
        fontSize: 16,
    },
    textoAviso: {
        fontSize: 13,
        color: '#777',
    },
});
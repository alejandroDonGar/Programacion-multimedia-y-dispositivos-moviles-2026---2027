import { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

//* -------------------------- *//
//? Entidad del formulario

// Primero hay que definir la estructura que tendra el formulario
type DatosPersona = {
    nombre: string;
    edad: string;
    casado: boolean;
    jubilado: boolean;
};
//* -------------------------- *//

export default function BordeYFormularioScreen() {

    const [bordeActivo, setBordeActivo] = useState(false);
    const [datos, setDatos] = useState<DatosPersona>({
        nombre: '',
        edad: '',
        casado: false,
        jubilado: false,
    });

    // Esta funcion sirve para actualizar cualquier campo del formulario sin repetir código.
    // "K extends keyof DatosPersona" asegura que solo pasemos nombres de campos que existen (nombre, edad, casado, jubilado).
    function cambiarCampo<K extends keyof DatosPersona>(campo: K, valor: DatosPersona[K]) {
        setDatos((actual) => ({
            // Copiamos los datos que tenia ya el formulario
            ...actual,
            // Aqui se sobreescriben los datos que se acaban de introducir
            [campo]: valor
        }));
    }
    const enviarFormulario = () => {
        //* -------------------------- *//
        // Nombre vacio y sin espacios
        const nombreLimpio = datos.nombre.trim();

        if (!nombreLimpio) {
            Alert.alert('Error', 'El valor no puede ser vacio. Escribe un nombre')
            return;
        }
        //* -------------------------- *//

        //* -------------------------- *//
        // Convierte con Number() el string de la edad a numero.
        const edadNumero = Number(datos.edad);

        // isNaN comprueba si edadNumero no es un numero
        if (!datos.edad.trim() || isNaN(edadNumero) || edadNumero <= 0) {
            Alert.alert('Error', 'Introduce una edad valida. Tiene que ser un numero y mayor a 0')
            return;
        }
        //* -------------------------- *//

        //* -------------------------- *//
        //? Alerta guardado

        // Muestra un contenedor tras haber pulsado para guardar la informacion.
        // Solo lo hace si las comprobaciones anterioes son existosas
        Alert.alert(
            'Datos guardados',
            `Nombre: ${nombreLimpio}\n` +
            `Edad: ${edadNumero}\n` +
            `Casado/a: ${datos.casado ? 'Si' : 'No'}\n` +
            `Jubilado/a: ${datos.jubilado ? 'Si' : 'No'}`
        );
        //* -------------------------- *//
    };

    return (
        <ScrollView contentContainerStyle={[styles.contenedor, bordeActivo && styles.conBordeRojo]}>
            //* -------------------------- *//
            //? Boton del borde

            <View style={styles.caja}>
                <Text style={styles.titulo}>1. Control de borde</Text>
                <View style={styles.filaSwitch}>
                    <Text style={styles.etiqueta}>Activar borde rojo:</Text>
                    <Switch
                        value={bordeActivo}
                        onValueChange={setBordeActivo}
                        thumbColor={bordeActivo ? 'orange' : 'brown'}
                        trackColor={{ false: '#d7ccc8', true: '#ffe0b2' }}
                    />
                </View>
            </View>
            //* -------------------------- *//

            //* -------------------------- *//
            //? Caja del formulario

            <View style={styles.caja}>
                <Text style={styles.titulo}>2. Formulario de persona</Text>

                {/* Zona del formulario para la opcion -> Nombre */}
                <Text style={styles.etiqueta}>Nombre:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ej: Alejandro"
                    value={datos.nombre}
                    onChangeText={(texto) => cambiarCampo('nombre', texto)}
                />
                {/* Zona del formulario para la opcion -> Edad */}
                <Text style={styles.etiqueta}>Edad:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ej: 25"
                    value={datos.edad}
                    onChangeText={(texto) => cambiarCampo('edad', texto)}
                    keyboardType="numeric" // Abre el teclado numérico en el móvil
                />
                {/* Zona del formulario para la opcion -> Casado */}
                <View style={styles.filaSwitch}>
                    <Text style={styles.etiqueta}>¿Está casado/a?</Text>
                    <Switch
                        value={datos.casado}
                        onValueChange={(valor) => cambiarCampo('casado', valor)}
                    />
                </View>
                {/* Zona del formulario para la opcion -> Jubilado */}
                <View style={styles.filaSwitch}>
                    <Text style={styles.etiqueta}>¿Está jubilado/a?</Text>
                    <Switch
                        value={datos.jubilado}
                        onValueChange={(valor) => cambiarCampo('jubilado', valor)}
                    />
                </View>
                <Button title="Enviar datos" onPress={enviarFormulario} />
            </View>
            //* -------------------------- *//
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        //! Este permite que la vista ocuper toda la pantalla
        flexGrow: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        gap: 20,
    },
    conBordeRojo: {
        borderWidth: 6,
        borderColor: 'red',
    },
    caja: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        gap: 12,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    etiqueta: {
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
    },
    filaSwitch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 4,
    },
});
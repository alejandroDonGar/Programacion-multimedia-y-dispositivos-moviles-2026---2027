import { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

//* -------------------------- *//
//? Entidades del formulario

// Al igual que en la practica anterior, creamos la entidad persona
type DatosPersona = {
    nombre: string;
    edad: string; // Se guarda como string por el TextInput
    casado: boolean;
    jubilado: boolean;
};
// Ahora creamos la entidad que llevara los datos de las personas que se van a guardar en la lista
type PersonaGuardada = {
    id: string;
    nombre: string;
    edad: number;
    casado: boolean;
    jubilado: boolean;
};
//* -------------------------- *//

export default function FormularioListaScreen() {
    // Aqui estan los estados de la informacion del formulario
    const [datos, setDatos] = useState<DatosPersona>({
        nombre: '',
        edad: '',
        casado: false,
        jubilado: false,
    });

    // Esta linea lo que hace es guardar a la informacion de la ultima persona que entro en la lista
    const [resumen, setResumen] = useState<PersonaGuardada | null>(null);
    const [listaPersonas, setListaPersonas] = useState<PersonaGuardada[]>([
        { id: '1', nombre: 'Ana', edad: 32, casado: true, jubilado: false },
        { id: '2', nombre: 'Luis', edad: 68, casado: false, jubilado: true },
    ]);

    // Igual que la anterior donde copiamos y reemplazamos los valores
    function cambiarCampo<K extends keyof DatosPersona>(campo: K, valor: DatosPersona[K]) {
        setDatos((actual) => ({
            ...actual,
            [campo]: valor,
        }));
    }

    const enviarFormulario = () => {
        //* -------------------------- *//
        // Nombre vacio y sin espacios
        const nombreLimpio = datos.nombre.trim();

        if (!nombreLimpio) {
            Alert.alert('Error', 'El nombre no puede estar vacío.');
            return;
        }
        //* -------------------------- *//

        //* -------------------------- *//
        // Edad de string a numero, sin espacios y comprobando que sea un numero positivo
        const edadNumero = Number(datos.edad);

        if (!datos.edad.trim() || isNaN(edadNumero) || edadNumero <= 0) {
            Alert.alert('Error', 'Introduce una edad válida (número mayor que 0).');
            return;
        }
        //* -------------------------- *//

        // Ahora lo que vamos a hacer que creamos una ultima entidad valida para el formulario.
        const nuevaPersona: PersonaGuardada = {
            id: Date.now().toString(),
            nombre: nombreLimpio,
            edad: edadNumero,
            casado: datos.casado,
            jubilado: datos.jubilado,
        };

        //* -------------------------- *//
        //? Sets para guardar, mostrar y resetear la informacion

        // Se guarda el resumen de la persona del formulario para poder mostrarla
        setResumen(nuevaPersona);

        // Se añade la persona a la ultima posicion de la lista
        setListaPersonas((actual) => [nuevaPersona, ...actual]);

        // Cuando se guarda en la lista alo que se hace es borrar los datos del formulario para poder volver a enviar uno nuevo
        setDatos({
            nombre: '',
            edad: '',
            casado: false,
            jubilado: false,
        });
        //* -------------------------- *//
    };

    return (
        <View style={styles.contenedor}>
            <View style={styles.caja}>
                <Text style={styles.titulo}>Formulario de Persona</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={datos.nombre}
                    onChangeText={(texto) => cambiarCampo('nombre', texto)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Edad"
                    value={datos.edad}
                    onChangeText={(texto) => cambiarCampo('edad', texto)}
                    keyboardType="numeric"
                />
                <View style={styles.filaSwitch}>
                    <Text style={styles.etiqueta}>Casado/a:</Text>
                    <Switch
                        value={datos.casado}
                        onValueChange={(valor) => cambiarCampo('casado', valor)}
                    />
                </View>
                <View style={styles.filaSwitch}>
                    <Text style={styles.etiqueta}>Jubilado/a:</Text>
                    <Switch
                        value={datos.jubilado}
                        onValueChange={(valor) => cambiarCampo('jubilado', valor)}
                    />
                </View>
                <Button title="Guardar y mostrar resumen" onPress={enviarFormulario} />
                {resumen && (
                    <View style={styles.cajaResumen}>
                        <Text style={styles.tituloResumen}>Último registro enviado:</Text>
                        <Text>Nombre: {resumen.nombre}</Text>
                        <Text>Edad: {resumen.edad} años</Text>
                        <Text>Casado/a: {resumen.casado ? 'Sí' : 'No'}</Text>
                        <Text>Jubilado/a: {resumen.jubilado ? 'Sí' : 'No'}</Text>
                    </View>
                )}
            </View>
            <FlatList
                style={styles.lista}
                data={listaPersonas}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <Text style={styles.tituloLista}>Lista de personas ({listaPersonas.length})</Text>
                }
                ListEmptyComponent={
                    <Text style={styles.vacio}>No hay personas registradas todavía.</Text>
                }
                ItemSeparatorComponent={() => <View style={styles.separador} />}
                renderItem={({ item, index }) => (
                    <View style={[styles.filaLista, { backgroundColor: index % 2 === 0 ? '#ffffff' : '#eef2f5' }]}>
                        <Text style={styles.nombreLista}>{item.nombre} ({item.edad} años)</Text>
                        <Text style={styles.detalleLista}>
                            {item.casado ? 'Casado/a' : 'Soltero/a'} · {item.jubilado ? 'Jubilado/a' : 'En activo'}
                        </Text>
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
        gap: 16,
    },
    caja: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        gap: 10,
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
    filaSwitch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    etiqueta: {
        fontSize: 16,
    },
    cajaResumen: {
        marginTop: 8,
        padding: 12,
        backgroundColor: '#e8f5e9',
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: 'green',
    },
    tituloResumen: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    lista: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 12,
        paddingHorizontal: 12,
    },
    tituloLista: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 12,
    },
    filaLista: {
        padding: 12,
        borderRadius: 6,
    },
    nombreLista: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    detalleLista: {
        color: '#555',
        marginTop: 2,
    },
    separador: {
        height: 1,
        backgroundColor: '#e0e0e0',
    },
    vacio: {
        textAlign: 'center',
        color: '#888',
        padding: 20,
    },
});

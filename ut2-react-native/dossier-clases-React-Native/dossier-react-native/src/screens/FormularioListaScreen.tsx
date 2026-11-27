import { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

//* -------------------------- *//
//? Entidades del formulario

// Al igual que en la practica anterior, creamos la entidad producto
type DatosProducto = {
    nombre: string;
    precio: string; // Se guarda como string por el TextInput
    stock: string; // Se guarda como string por el TextInput
};

// Ahora creamos la entidad que llevara los datos de los productos que se van a guardar en la lista
type ProductoGuardado = {
    id: string;
    nombre: string;
    precio: number;
    stock: number;
};
//* -------------------------- *//

export default function FormularioListaScreen() {
    // Aqui estan los estados de la informacion del formulario
    const [datos, setDatos] = useState<DatosProducto>({
        nombre: '',
        precio: '',
        stock: '',
    });

    // Esta linea lo que hace es guardar la informacion del ultimo producto que entro en la lista
    const [resumen, setResumen] = useState<ProductoGuardado | null>(null);
    const [listaProductos, setListaProductos] = useState<ProductoGuardado[]>([
        { id: '1', nombre: 'Teclado', precio: 45.5, stock: 12 },
        { id: '2', nombre: 'Ratón', precio: 20, stock: 25 },
    ]);

    // Igual que la anterior donde copiamos y reemplazamos los valores
    function cambiarCampo<K extends keyof DatosProducto>(campo: K, valor: DatosProducto[K]) {
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
        // Precio de string a numero, sin espacios y comprobando que sea un numero positivo
        const precioNumero = Number(datos.precio);

        if (!datos.precio.trim() || isNaN(precioNumero) || precioNumero <= 0) {
            Alert.alert('Error', 'Introduce un precio válido (número mayor que 0).');
            return;
        }
        //* -------------------------- *//

        //* -------------------------- *//
        // Stock de string a numero, sin espacios y comprobando que sea un numero valido (0 o mayor)
        const stockNumero = Number(datos.stock);

        if (!datos.stock.trim() || isNaN(stockNumero) || stockNumero < 0 || !Number.isInteger(stockNumero)) {
            Alert.alert('Error', 'Introduce un stock válido (número entero igual o mayor que 0).');
            return;
        }
        //* -------------------------- *//

        // Ahora lo que vamos a hacer es crear una ultima entidad valida para el formulario.
        const nuevoProducto: ProductoGuardado = {
            id: Date.now().toString(),
            nombre: nombreLimpio,
            precio: precioNumero,
            stock: stockNumero,
        };

        //* -------------------------- *//
        //? Sets para guardar, mostrar y resetear la informacion

        // Se guarda el resumen del producto del formulario para poder mostrarlo
        setResumen(nuevoProducto);

        // Se añade el producto a la primera posicion de la lista
        setListaProductos((actual) => [nuevoProducto, ...actual]);

        // Cuando se guarda en la lista lo que se hace es borrar los datos del formulario para poder volver a enviar uno nuevo
        setDatos({
            nombre: '',
            precio: '',
            stock: '',
        });
        //* -------------------------- *//
    };

    return (
        <View style={styles.contenedor}>
            <View style={styles.caja}>
                <Text style={styles.titulo}>Formulario de Producto</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={datos.nombre}
                    onChangeText={(texto) => cambiarCampo('nombre', texto)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Precio"
                    value={datos.precio}
                    onChangeText={(texto) => cambiarCampo('precio', texto)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Stock"
                    value={datos.stock}
                    onChangeText={(texto) => cambiarCampo('stock', texto)}
                    keyboardType="numeric"
                />
                <Button title="Guardar y mostrar resumen" onPress={enviarFormulario} />
                {resumen && (
                    <View style={styles.cajaResumen}>
                        <Text style={styles.tituloResumen}>Último registro enviado:</Text>
                        <Text>Nombre: {resumen.nombre}</Text>
                        <Text>Precio: {resumen.precio} €</Text>
                        <Text>Stock: {resumen.stock} uds.</Text>
                    </View>
                )}
            </View>
            <FlatList
                style={styles.lista}
                data={listaProductos}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <Text style={styles.tituloLista}>Lista Productos</Text>
                }
                ListEmptyComponent={
                    <Text style={styles.vacio}>No hay productos registrados todavía.</Text>
                }
                renderItem={({ item, index }) => (
                    <View style={[styles.filaLista, { backgroundColor: index % 2 === 0 ? '#ffffff' : '#eef2f5' }]}>
                        <Text style={styles.nombreLista}>{item.nombre}</Text>
                        <Text style={styles.detalleLista}>
                            Precio: {item.precio} € · Stock: {item.stock} uds.
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
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
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
    vacio: {
        textAlign: 'center',
        color: '#888',
        padding: 20,
    },
});
import { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

//* -------------------------- *//
//? Entidades del formulario

type DatosProducto = {
    nombre: string;
    precio: string; // Se guarda como string por el TextInput
    stock: string;  // Se guarda como string por el TextInput
};

type ProductoGuardado = {
    id: string;
    nombre: string;
    precio: number;
    stock: number;
};
//* -------------------------- *//

export default function ListaProductosScreen() {
    const [datos, setDatos] = useState<DatosProducto>({
        nombre: '',
        precio: '',
        stock: '',
    });

    const [resumen, setResumen] = useState<ProductoGuardado | null>(null);
    const [listaProductos, setListaProductos] = useState<ProductoGuardado[]>([
        { id: '1', nombre: 'Teclado Mecánico', precio: 59.99, stock: 15 },
        { id: '2', nombre: 'Ratón Inalámbrico', precio: 24.50, stock: 30 },
    ]);

    function cambiarCampo<K extends keyof DatosProducto>(campo: K, valor: DatosProducto[K]) {
        setDatos((actual) => ({
            ...actual,
            [campo]: valor,
        }));
    }

    const enviarFormulario = () => {
        const nombreLimpio = datos.nombre.trim();
        if (!nombreLimpio) {
            Alert.alert('Error', 'El nombre del producto no puede estar vacío.');
            return;
        }

        const precioNumero = Number(datos.precio);
        if (!datos.precio.trim() || isNaN(precioNumero) || precioNumero <= 0) {
            Alert.alert('Error', 'Introduce un precio válido (mayor que 0).');
            return;
        }

        const stockNumero = Number(datos.stock);
        if (!datos.stock.trim() || isNaN(stockNumero) || stockNumero < 0 || !Number.isInteger(stockNumero)) {
            Alert.alert('Error', 'Introduce un stock válido (número entero igual o mayor que 0).');
            return;
        }

        const nuevoProducto: ProductoGuardado = {
            id: Date.now().toString(),
            nombre: nombreLimpio,
            precio: precioNumero,
            stock: stockNumero,
        };

        setResumen(nuevoProducto);
        setListaProductos((actual) => [nuevoProducto, ...actual]);

        setDatos({
            nombre: '',
            precio: '',
            stock: '',
        });
    };

    return (
        <View style={styles.contenedor}>
            <View style={styles.caja}>
                <Text style={styles.titulo}>Formulario de Producto</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nombre del producto"
                    value={datos.nombre}
                    onChangeText={(texto) => cambiarCampo('nombre', texto)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Precio (€)"
                    value={datos.precio}
                    onChangeText={(texto) => cambiarCampo('precio', texto)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Stock disponible"
                    value={datos.stock}
                    onChangeText={(texto) => cambiarCampo('stock', texto)}
                    keyboardType="numeric"
                />

                <Button title="Guardar producto" onPress={enviarFormulario} />

                {resumen && (
                    <View style={styles.cajaResumen}>
                        <Text style={styles.tituloResumen}>Último producto añadido:</Text>
                        <Text>Nombre: {resumen.nombre}</Text>
                        <Text>Precio: {resumen.precio.toFixed(2)} €</Text>
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
                            Precio: {item.precio.toFixed(2)} € · Stock: {item.stock} unidades
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
        paddingVertical: 14,
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

import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.lista}>
      <Text style={styles.titulo}>Prácticas de React Native con Expo</Text>
      <Link href="/practica01" style={styles.enlace}>Práctica 1 - Hola mundo</Link>
      <Link href="/practica02" style={styles.enlace}>Práctica 2 - Contador</Link>
      <Link href="/practica03" style={styles.enlace}>Práctica 3 - Pantalla y estilos separados</Link>
      <Link href="/practica04" style={styles.enlace}>Práctica 4 - Tres cajas</Link>
      <Link href="/practica05" style={styles.enlace}>Práctica 5 - Flex dinámico</Link>
      <Link href="/practica06" style={styles.enlace}>Práctica 6 - Botones táctiles</Link>
      <Link href="/practica07" style={styles.enlace}>Práctica 7 - Estilos personalizados</Link>
      <Link href="/practica08" style={styles.enlace}>Práctica 8 - Círculos dinámicos</Link>
      <Link href="/practica09" style={styles.enlace}>Práctica 9 - Alineación e imágenes</Link>
      <Link href="/practica09-1" style={styles.enlace}>Práctica 9.1 - Imagen aleatoria</Link>
      <Link href="/practica10" style={styles.enlace}>Práctica 10 - Calculadora</Link>
      <Link href="/practica11" style={styles.enlace}>Práctica 11 - Hook con Calculadora</Link>
      <Link href="/practica12" style={styles.enlace}>Práctica 12 - Color aleatorio configurable</Link>
      <Link href="/practica13" style={styles.enlace}>Práctica 13 - Introducir color</Link>
      <Link href="/practica14" style={styles.enlace}>Práctica 14 - Bordes y Formularios</Link>
      <Link href="/practica15" style={styles.enlace}>Práctica 15 - Formulario y Listas</Link>
      <Link href="/practica16" style={styles.enlace}>Práctica 16 - Formulario y Listas de productos</Link>
      <Link href="/practica17" style={styles.enlace}>Práctica 17 - Calculadora IMC</Link>
      <Link href="/practica18" style={styles.enlace}>Práctica 18 - Diario de emociones</Link>
      <Link href="/stack/p20" style={styles.enlace}>Práctica 20 - Navegacion con Stack</Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lista: { 
    padding: 20, 
    gap: 16 
  },
  titulo: { 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  enlace: { 
    fontSize: 16, 
    color: '#2563eb' 
  },
});
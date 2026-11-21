import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

export default function ContadorScreen() {
  const [contador, setContador] = useState(0);
  type Props = { nombre: string; style?: StyleProp<ViewStyle> };
  
  return (
    <View style={styles.contenedorCircular}>
      <Text>Contador: {contador}</Text>
      <Button title="Sumar" onPress={() => setContador(n => n + 1)}/>
      <Text></Text>
      <Button title="Restar" onPress={() => setContador(n => n - 1)} />
      <TouchableHighlight onPress={() => Alert.alert('Pulsado')} underlayColor="#ddd">
        <Text>Botón destacado</Text>
      </TouchableHighlight>

      <TouchableOpacity onPress={() => Alert.alert('Pulsado')}>
        <Text>Botón con opacidad</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorCircular: {
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 50,
    padding: 20,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "lightgray"
  },
});
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// Estos son los datos que recibiria cada tecla. 
type Props = {
  texto: string;       // Que pone la tecla
  onPress: () => void; // Que pasa cunado se pulsa la tecla
  color?: string;      // El color de la propia tecla
};

export default function TeclaCalculadora({ texto, onPress, color = '#333' }: Props) {
  return (
    <TouchableOpacity style={[styles.tecla, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tecla: {
    flex: 1,
    height: 75,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: { color: 'white', fontSize: 28 },
});
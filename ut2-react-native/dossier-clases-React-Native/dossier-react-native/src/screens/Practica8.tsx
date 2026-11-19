import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CirculosDinamicosScreen() {
  const [colores, setColores] = useState<string[]>([]);
  const [wrap, setWrap] = useState<'wrap' | 'nowrap'>('nowrap');
  const [direccion, setDireccion] = useState<'row' | 'column'>('row');
  const agregarCirculo = () => {
    const i = colores.length;
    const r = Math.min(255, (i * 50) % 260);
    const g = Math.min(255, (i * 85 + 60) % 260);
    const b = Math.min(255, (i * 120 + 120) % 260);
    const nuevoColor = `rgb(${r}, ${g}, ${b})`;
    setColores([...colores, nuevoColor]);
  };
  const alternarWrap = () => {
    setWrap(prev => (prev === 'nowrap' ? 'wrap' : 'nowrap'));
  };
  const alternarDireccion = () => {
    setDireccion(prev => (prev === 'row' ? 'column' : 'row'));
  };

  return (
    <View style={styles.pantalla}>
      <View style={styles.controles}>
        <TouchableOpacity style={styles.boton} onPress={agregarCirculo}>
          <Text style={styles.textoBoton}>+ Círculo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={alternarWrap}>
          <Text style={styles.textoBoton}>Wrap: {wrap}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={alternarDireccion}>
          <Text style={styles.textoBoton}>Dir: {direccion}</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.escenario, { flexWrap: wrap, flexDirection: direccion }]}>
        {colores.map((color, index) => (
          <View key={index} style={[styles.circulo, { backgroundColor: color }]}/>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
    paddingHorizontal: 15
  },
  controles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    gap: 8
  },
  boton: {
    flex: 1,
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13
  },
  escenario: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    gap: 8
  },
  circulo: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
});

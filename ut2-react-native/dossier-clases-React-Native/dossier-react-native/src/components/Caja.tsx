import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type Props = { nombre: string; bg?: string };

export default function Caja({ nombre, bg }: Props) {
  const [valorFlex, setValorFlex] = useState(0);

  return (
    <View style={[styles.caja, { backgroundColor: bg, flex: valorFlex }]}>
      <Text>{nombre} (Flex: {valorFlex})</Text>
      <Button title="Sumar" onPress={() => setValorFlex(n => n + 1)} />
      <Button title="Restar" onPress={() => setValorFlex(n => Math.max(0, n - 1))} />
    </View>
  );
}

const styles = StyleSheet.create({
  caja: { 
    flexDirection: 'column',
    minHeight: 100,
    width: 100, 
    justifyContent: 'center', 
    alignItems: 'center',
    margin: 5,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: "black"
  },
});

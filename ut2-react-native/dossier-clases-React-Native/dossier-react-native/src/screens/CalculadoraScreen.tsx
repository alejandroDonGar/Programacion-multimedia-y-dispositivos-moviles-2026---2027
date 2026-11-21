import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TeclaCalculadora from '@/components/TeclaCalculadora';

const NARANJA = '#ff9f0a';

export default function CalculadoraScreen() {
  const [pantalla, setPantalla] = useState('0');
  const [primerNumero, setPrimerNumero] = useState<number | null>(null);
  const [operacion, setOperacion] = useState<string | null>(null);

  const pulsarNumero = (numero: string) => {
    if (pantalla === '0') {
      setPantalla(numero);
    } else {
      setPantalla(pantalla + numero);
    }
  }
  const pulsarOperacion = (op: string) => {
    setPrimerNumero(Number(pantalla));
    setOperacion(op);
    setPantalla('0');
  };
  const pulsarIgual = () => {
    if (primerNumero === null || operacion === null) return;
    const segundoNumero = Number(pantalla);
    let resultado = 0;
    switch (operacion) {
      case '+': resultado = primerNumero + segundoNumero; break;
      case '-': resultado = primerNumero - segundoNumero; break;
      case '×': resultado = primerNumero * segundoNumero; break;
      case '÷': resultado = primerNumero / segundoNumero; break;
    }

    setPantalla(String(resultado));
    setPrimerNumero(null);
    setOperacion(null);
  };
  const borrar = () => {
    setPantalla('0');
    setPrimerNumero(null);
    setOperacion(null);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.operacion}>
        {primerNumero !== null ? `${primerNumero} ${operacion}` : ''}
      </Text>
      <Text style={styles.resultado}>{pantalla}</Text>
      <View style={styles.fila}>
        <TeclaCalculadora texto="7" onPress={() => pulsarNumero('7')} />
        <TeclaCalculadora texto="8" onPress={() => pulsarNumero('8')} />
        <TeclaCalculadora texto="9" onPress={() => pulsarNumero('9')} />
        <TeclaCalculadora texto="÷" color={NARANJA} onPress={() => pulsarOperacion('÷')} />
      </View>
      <View style={styles.fila}>
        <TeclaCalculadora texto="4" onPress={() => pulsarNumero('4')} />
        <TeclaCalculadora texto="5" onPress={() => pulsarNumero('5')} />
        <TeclaCalculadora texto="6" onPress={() => pulsarNumero('6')} />
        <TeclaCalculadora texto="×" color={NARANJA} onPress={() => pulsarOperacion('×')} />
      </View>
      <View style={styles.fila}>
        <TeclaCalculadora texto="1" onPress={() => pulsarNumero('1')} />
        <TeclaCalculadora texto="2" onPress={() => pulsarNumero('2')} />
        <TeclaCalculadora texto="3" onPress={() => pulsarNumero('3')} />
        <TeclaCalculadora texto="-" color={NARANJA} onPress={() => pulsarOperacion('-')} />
      </View>
      <View style={styles.fila}>
        <TeclaCalculadora texto="C" color="#a5a5a5" onPress={borrar} />
        <TeclaCalculadora texto="0" onPress={() => pulsarNumero('0')} />
        <TeclaCalculadora texto="=" color={NARANJA} onPress={pulsarIgual} />
        <TeclaCalculadora texto="+" color={NARANJA} onPress={() => pulsarOperacion('+')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    padding: 15,
    gap: 12,
  },
  operacion: { 
    color: '#888', 
    fontSize: 24, 
    textAlign: 'right' 
},
  resultado: { 
    color: 'white', 
    fontSize: 64, 
    textAlign: 'right', 
    marginBottom: 10 
},
  fila: {
    flexDirection: 'row',
    gap: 12,
  },
});
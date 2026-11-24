import { StyleSheet, Text, View } from 'react-native';
import TeclaCalculadora from '@/components/TeclaCalculadora';
import { useCalculadora } from '@/hooks/useCalculadora';

const NARANJA = '#ff9f0a';

export default function CalculadoraScreen() {
  // Desestructuramos lo que nos entrega el hook.
  // La pantalla actúa ahora como un componente "tonto" (presentacional):
  // solo sabe pintar datos y avisar cuando el usuario toca un botón.
  const {
    pantalla,
    primerNumero,
    operacion,
    pulsarNumero,
    pulsarOperacion,
    pulsarIgual,
    borrar,
  } = useCalculadora();

  return (
    <View style={styles.contenedor}>
      {/* Pintamos los estados que nos proporciona el hook */}
      <Text style={styles.operacion}>
        {primerNumero !== null ? `${primerNumero} ${operacion}` : ''}
      </Text>
      <Text style={styles.resultado}>{pantalla}</Text>

      {/* Conectamos cada tecla directamente a las funciones del hook */}
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

// Los estilos siempre permanecen en el archivo del componente visual.
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
    textAlign: 'right',
  },
  resultado: {
    color: 'white',
    fontSize: 64,
    textAlign: 'right',
    marginBottom: 10,
  },
  fila: {
    flexDirection: 'row',
    gap: 12,
  },
});

import { StyleSheet, View, Text } from 'react-native';
import Caja from '../components/Caja';

export default function PantallaPrincipal() {
  return (
    <View style={contendorFondo.contenedor}>
      <Text style={contenedorPrincipal.pantallaPrincipal}>Contenedor Principal</Text>
      <View style={contenedorInterior.contenedor}>
        <Caja nombre="Caja 1" bg="red" />
        <Caja nombre="Caja 2" bg="blue" style={{ borderRadius: 20, borderWidth: 7 }}/>
        <Caja nombre="Caja 3" style={{ backgroundColor: 'green', borderColor: 'white' }}/>
      </View>
    </View>
  );
}

const contendorFondo = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

const contenedorPrincipal = StyleSheet.create({
  pantallaPrincipal: {
    textAlign: 'center',
    color: 'yellow',
    fontSize: 30,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    padding: 20,
  },
});

const contenedorInterior = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'lightgray',
    margin: 15,
    padding: 10,
  },
});

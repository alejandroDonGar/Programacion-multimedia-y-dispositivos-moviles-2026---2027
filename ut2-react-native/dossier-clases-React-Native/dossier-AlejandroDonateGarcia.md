# Dossier React Native
* **Autor:** Alejandro Donate García
* **Curso:** 2º DAM

## 12-11-2026 Doble hora
### Configuracion del IDE

Seleccion del dispositivo virtual

* Pixel 8 

Preparacion de las herramientas

añadimos las variables en bashrc

* export ANDROID_HOME="$HOME/Android/Sdk"

* export PATH="$ANDROID_HOME/platform-tools:$PATH"

Esto para que el emulador nos reconozca el movil virtual.

Despues desplegamos con **npx expo start** desde la carpeta del proyecto

![Hola mundo desplegado](/imagenesREADME/npx_expo_start_desplegado_en_dispositivo.png)

## Paso 2: Contador con dos botones

Para el paso 2 lo que tenemos es que expandir la constante styles y hacer que el contenedor del contador se desplace hacia abajo. Que tenga una mejor separación de los bordes tanto inferior y superior como a ambos lados derecho e izquierdo.

Tenemos que además, añadir un nuevo boton para separar las acciones de sumar y restar del contador.

Este seria el codigo de **styles**:
![Styles modificado](/imagenesREADME/codigo_styles_contador_punto2.png)

Lo que conseguimos con esto es separar el contenedor de los bordes además de darle un mejor look, dandole un borde negro con las esquinas redondeadas.

![Interfaz contador](/imagenesREADME/contador_interfaz.png)

## Paso 3: `inicioScreen` y estilos separados

Ahora lo que hacemos es dividir las pantallas en sus respectivas carpetas, haciendo que el index.tsx solo las llame.

Clase InicioScreen.tsx:
```tsx
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ContadorScreen() {
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.contenedorCircular}>
      <Text>Contador: {contador}</Text>
      <Button title="Sumar" onPress={() => setContador(n => n + 1)}/>
      <Text></Text>
      <Button title="Restar" onPress={() => setContador(n => n - 1)} />
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
```
Index.tsx:
```tsx
// src/app/index.tsx (hasta crear el menú general)
import InicioScreen from '../screens/InicioScreen';
export default function Index() {
  return <InicioScreen />;
}
```

El resultado sigue siendo exactamente el mismo aunque los componentes vivan separados. 

**Layout con Flexbox**
Por ultimo, creamos una clase nueva components/Caja.tsx donde introduciremos el codigo base para usar flex con nuestros contenedores.

## Paso 4: Tres cajas
Creo una pantalla `PrincipalScreen` con el texto «Contenedor Principal» y un `View` para el escenario. Dentro coloco tres componentes `Caja` de 100 × 100 y les enviamos colores diferentes mediante propiedades. El escenario ahora tiene `flex: 1`.

PantallaPrincipal quedaria de esta manera.
```tsx
import { StyleSheet, View, Text } from 'react-native';
import Caja from '../components/Caja';

export default function PantallaPrincipal() {
  return (
    <View style={contendorFondo.contenedor}>
      <Text style={contenedorPrincipal.pantallaPrincipal}>Contenedor Principal</Text>
      <View style={contenedorInterior.contenedor}>
        <Caja nombre={''} bg={'red'}></Caja>
        <Caja nombre={''} bg={'blue'}></Caja>
        <Caja nombre={''} bg={'green'}></Caja>
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
```
Este codigo, tras importar las tres cajas quedaria así en el emulador:
![Interfaz con tres cajas y flex](/imagenesREADME/interfaz_cajas_flex.png)

## Paso 5: Modificar `flex` dinámicamente
Ahora hay que añadir a cada caja dos botones:

**Primero:** 

Incrementará su valor de flex.

**Segundo:**

Lo disminuirá. 

Ambos tienen que mostrar el valor actual de cada caja y comprobar cómo se reorganiza el espacio.

La funcion `Caja` quedaría de la siguiente manera:
```tsx
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
```
Ahora los botones permiten agrandar y reducir el tamaño de los contenedores. Estos se reparten la pantalla sin salirse de ella.

![Cajas con flex flexible](/imagenesREADME/cajas_flexibles.png)
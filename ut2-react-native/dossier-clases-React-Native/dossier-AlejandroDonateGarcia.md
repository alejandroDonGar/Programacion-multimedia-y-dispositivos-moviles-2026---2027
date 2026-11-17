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

# Paso 6: Sustituir los botones

Ahora lo que tenemos que hacer es sustituir los botones del paso 5: `para flex + 1`, utilizando un `TouchableHighlight` que muestre una alerta y aumente el valor; para `flex - 1`, utilizando `TouchableOpacity` y reduciendo el valor. Tenemos que personalizar el aspecto de ambos.

**Propiedades de estilo recibidas por un componente**

Para personalizar una caja desde la pantalla que la utiliza, declaramos una propiedad `style` del tipo `StyleProp<ViewStyle>` y combinamos el estilo por defecto con el recibido.

El codigo ahora lo que haria seria sobreescribir las propiedades repeditas del primero. De esta manera se puede reutilizar el mismo componente sin duplicar el codigo.

# Paso 7: Nombre y estilos personalizados

Ahora lo que tenemos que hacer es adaptar la pantalla para que cada caja muestre su nombre, **Caja A**, **B** y **C** y que acepte los estilos enviado mediante pripiedades. Al menos una caja tiene que tener las esquinas redondeadas y un borde diferente.

El codigo que tendríamos que adaptar esta en `PantallaPrincipal`.
```tsx
<Caja nombre="Caja A" bg="red"/>
<Caja nombre="Caja B" bg="blue" style={{ borderRadius: 20, borderWidth: 7, borderColor: 'white' }} />
<Caja nombre="Caja C" bg="green" style={{ borderRadius: 50, borderStyle: 'dashed' }} />
```
La pantalla del teléfono con los conetendores personalizados quedaría así:

![Interfaz con los estilos heredables](/imagenesREADME/Interfaz_estilos_constante_colores.png)

# Paso 8: Círculos dinámicos
Ahora lo que haremos empezar en una plantilla desde cero donde añadiremos diferentes circulos con colores variables, tambien que alternarán entre `wrap/nowrap` y `row/column`. 

Tendremos que mostrar los controles como botones personalizados `TouchableOpacity`. Tendremos que evitar que los valores RGB superen **255** pudiendo limitarlo con `Math.min(255, valor)`.

**Nueva pantalla -> `PantallaCirculos`**

Creamos una nueva pantalla dentro de `screens` para el nuevo contenido.

**Estados**

Primero lo que hacemos es inicializar las tres variabls de estado que controlan la pantalla.

* La **Lista de colores**
* La propiedad de distribucion de **FlexWrap**
* La propiedad de distribucion de **FlexDirection**

```tsx
const [colores, setColores] = useState<string[]>([]);
const [wrap, setWrap] = useState<'wrap' | 'nowrap'>('nowrap');
const [direccion, setDireccion] = useState<'row' | 'column'>('row');
```

**Logica de generación de colores RGB**

Aquí lo que tenemos que hacer es definir las funciones que reponden a las pulsaciones que hará el usuario en la pantalla.

* `gregarCirculo`
  * Esta calcula los palores para los colores **rojo**, **verde** y **azul** segun el numero de elementos actuales usando `Math.min(255, valor)` para asegurar que nunca se supere el limite mazimo del formato RGB.
* `alternarWrap` y `alternarDireccion`
  * Estos cambian el estado actual entre los dos valores posibles usando el estado previo `prev`.

```tsx
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
```

**Botones personalizados**

En vez de usar el componente `<button>` usamos `TouchableOpacity` para añadir y diseñar los botones personalizados que muestren en tiempo real  el estado actual de cada propiedad.

```tsx
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
```

**Escenario dinamico y renderizado con `.map()`**

El contenedore principal de forma dinámica las propiedades `flexWrap` y `flexDireccion` desde el estado. Dentro lo que haremos es recorrere el array de los colores con `.map()` para ir poco a poco dibujando cada circulo mientras que se le asigna una `key` única con su folore de fondo coreespondiente.

```tsx
<View style={[styles.escenario, { flexWrap: wrap, flexDirection: direccion }]}>
  {colores.map((color, index) => (
    <View
      key={index}
      style={[styles.circulo, { backgroundColor: color }]}
    />
  ))}
</View>
```

**Personalizacion con los `StyleSheet`**

Aqui lo que hacemos es como en las demás prácticas, simplemente diseñar la parte de la interfaz. Aquí separamos cada componentes por sus etiquetas.

```tsx
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
```

Así es como se veria la aplicación con las diferentes opciones seleccionadas.
* **Circulos + `nowrap` y `row`:**

![Interfaz con nowrap y row](/imagenesREADME/unwrap_row.png)

* **Circulos + `nowrap` y `column`:**

![Interfaz con nowrap y column](/imagenesREADME/nowrap_column.png)

* **Circulos + `wrap` y `row`:**
  
![Interfaz con wrap y column](/imagenesREADME/wrap_row.png)


* **Circulos + `wrap` y `column`:**

![Interfaz con wrap y column](/imagenesREADME/wrap_column.png)


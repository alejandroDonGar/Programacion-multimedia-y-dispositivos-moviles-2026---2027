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

# Paso 9: Distribución, alineación e imágenes

En esta práctica lo que haremos sera crear una nueva pantalla con un campo de texto que permita elegir un valor válido de `justifyContent`, botones para modificar `alignItems` y tres imágenes. Al menos una de las imágenes se tendrá que cargar desde los archivos del proyecto mediante `require`. Las otras podrán ser remotas o locales. 

Utilizaremos `flexWrap: 'nowrap'` para observar el efecto de las alineaciones respecto al contenedor.

**Nueva pantalla -> `AlineacionScreen`**

Creamos una nueva pantalla dentro de `screens` llamada `Practica9.tsx` y la llamamos desde `index.tsx` igual que en las prácticas anteriores.

**Valores permitidos**

Antes del componente definimos dos listas con los valores que vamos a aceptar. Con `as const` TypeScript sabe que solo pueden ser esos textos, y con ellas sacamos los tipos `Justify` y `Align`.

* La lista **`JUSTIFY`** sirve para validar lo que se escribe en el campo de texto.
* La lista **`ALIGN`** sirve para generar un botón por cada valor de `alignItems`.

```tsx
const JUSTIFY = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'] as const;
type Justify = (typeof JUSTIFY)[number];

const ALIGN = ['flex-start', 'center', 'flex-end', 'stretch'] as const;
type Align = (typeof ALIGN)[number];
```

**Estados**

Inicializamos las tres variables de estado que controlan la pantalla.

* El **texto** que se escribe en el campo.
* El valor de **justifyContent** que se aplica de verdad.
* El valor de **alignItems** activo.

Separamos el texto del valor aplicado para que, mientras se escribe algo a medias, el contenedor no reciba un valor que no existe.

```tsx
const [texto, setTexto] = useState('flex-start');
const [justify, setJustify] = useState<Justify>('flex-start');
const [align, setAlign] = useState<Align>('flex-start');
```

**Validación del campo de texto**

* `cambiarTexto`
  * Guarda siempre lo que se escribe, pero solo cambia `justify` si el texto, sin espacios y en minúsculas, está dentro de la lista `JUSTIFY`. Si no es válido, se mantiene el último valor correcto.
* `esValido`
  * Lo usamos para pintar el borde del campo en rojo y mostrar los valores permitidos cuando lo escrito no sirve.

```tsx
const cambiarTexto = (valor: string) => {
    setTexto(valor);
    const limpio = valor.trim().toLocaleLowerCase();
    if ((JUSTIFY as readonly string[]).includes(limpio)) {
        setJustify(limpio as Justify);
    }
}
const esValido = (JUSTIFY as readonly string[]).includes(texto.trim().toLocaleLowerCase());
```

**Campo de texto y botones de `alignItems`**

Para el campo usamos `TextInput` con `autoCapitalize="none"` y `autoCorrect={false}`, porque si no el teclado de Android pone la primera letra en mayúscula y el valor deja de ser válido.

Los botones no los escribimos uno a uno: recorremos `ALIGN` con `.map()` y creamos un `TouchableOpacity` por cada valor. El que está activo cambia de color con `styles.botonActivo`.

```tsx
<TextInput
  style={[styles.input, !esValido && styles.inputError]}
  value={texto}
  onChangeText={cambiarTexto}
  autoCapitalize="none"
  autoCorrect={false}
  placeholder="justifyContent"
/>
{!esValido && <Text style={styles.error}>Valores: {JUSTIFY.join(', ')}</Text>}

<View style={styles.controles}>
  {ALIGN.map(valor => (
    <TouchableOpacity
      key={valor}
      style={[styles.boton, align === valor && styles.botonActivo]}
      onPress={() => setAlign(valor)}>
      <Text style={styles.textoBoton}>{valor}</Text>
    </TouchableOpacity>
  ))}
</View>
```

**Alineación activa en pantalla**

Para comprobar que funciona mostramos encima del escenario los dos valores que se están aplicando en ese momento.

```tsx
<Text style={styles.estado}>justifyContent: {justify}{'\n'}alignItems: {align}</Text>
```

**Escenario con las tres imágenes**

El contenedor recibe `justifyContent` y `alignItems` desde el estado. En los estilos le ponemos `flexDirection: 'row'` y `flexWrap: 'nowrap'`, así las imágenes nunca saltan de línea y se ve bien cómo se mueven respecto al contenedor.

* Las dos primeras imágenes son **locales** y se cargan con `require`, que necesita la ruta escrita tal cual (no se puede montar con variables).
* La tercera es **remota** y se carga con `{ uri: ... }`. Las imágenes remotas necesitan un `width` y `height` explícitos porque React Native no sabe su tamaño hasta descargarlas.

```tsx
<View style={[styles.escenario, { justifyContent: justify, alignItems: align }]}>
  <Image source={require('../../assets/images/react-logo.png')} style={styles.imagen} />
  <Image source={require('../../assets/images/expo-logo.png')} style={styles.imagen} />
  <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.imagen} />
</View>
```

**Áreas seguras con `SafeAreaView`**

En la práctica 8 usábamos `paddingTop: 50` para que el contenido no quedara debajo de la barra de estado. Ahora lo sustituimos por `SafeAreaView` importado desde `react-native-safe-area-context` (no el antiguo de `react-native`), que calcula solo el espacio que reserva cada móvil. Con Expo Router no hace falta añadir `SafeAreaProvider` porque ya viene incluido.

```tsx
import { SafeAreaView } from 'react-native-safe-area-context';

<SafeAreaView style={styles.pantalla}>
  {/* resto de la pantalla */}
</SafeAreaView>
```

**Personalización con los `StyleSheet`**

Como en las demás prácticas, diseñamos la interfaz separando los estilos por cada parte de la pantalla. Lo importante está en `escenario`, donde fijamos la dirección y el `nowrap`.

```tsx
const styles = StyleSheet.create({
    pantalla: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 15
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#2563eb',
        borderRadius: 8,
        padding: 10,
        marginTop: 10
    },
    inputError: {
        borderColor: '#dc2626'
    },
    error: {
        color: '#dc2626',
        fontSize: 12,
        marginTop: 4
    },
    controles: {
        flexDirection: 'row',
        gap: 6,
        marginVertical: 10
    },
    boton: {
        flex: 1,
        backgroundColor: '#93c5fd',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center'
    },
    botonActivo: {
        backgroundColor: '#2563eb'
    },
    textoBoton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 11
    },
    estado: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    escenario: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        padding: 10
    },
    imagen: {
        width: 80,
        height: 80
    },
});
```

# Paso 9.1: Imagen aleatoria

Partiendo de una colección de imágenes locales, añadimos un botón que elija una imagen al azar y la muestre.

**Nueva pantalla -> `ImagenAleatoriaScreen`**

Creamos `Practica9_1.tsx` dentro de `screens`.

**Colección de imágenes**

Como `require` tiene que ser estático, no podemos construir la ruta con el nombre de la imagen. Lo que hacemos es definir antes una lista donde cada elemento ya tiene su `require` escrito, y luego elegimos por posición.

```tsx
const imagenes = [
  { nombre: 'react', source: require('../../assets/images/react-logo.png') },
  { nombre: 'expo', source: require('../../assets/images/expo-logo.png') },
  { nombre: 'icono', source: require('../../assets/images/icon.png') },
];
```

**Estado y elección aleatoria**

* Guardamos en un estado el **índice** de la imagen elegida y sacamos la imagen con `imagenes[indice]`.
* `elegirAleatoria`
  * Calcula una posición con `Math.floor(Math.random() * imagenes.length)`. `Math.random()` da un número entre 0 y 1 (sin llegar a 1), al multiplicarlo por la longitud queda entre 0 y 3, y `Math.floor` lo redondea hacia abajo para que salga 0, 1 o 2.

```tsx
const [indice, setIndice] = useState(0);
const elegida = imagenes[indice];

const elegirAleatoria = () => {
  setIndice(Math.floor(Math.random() * imagenes.length));
};
```

**Vista**

Mostramos la imagen elegida, su nombre y el botón. Con solo tres imágenes es normal que a veces se repita la misma.

```tsx
<SafeAreaView style={styles.pantalla}>
  <Image source={elegida.source} style={styles.imagen} />
  <Text style={styles.nombre}>{elegida.nombre}</Text>
  <TouchableOpacity style={styles.boton} onPress={elegirAleatoria}>
    <Text style={styles.textoBoton}>Imagen aleatoria</Text>
  </TouchableOpacity>
</SafeAreaView>
```

# Paso 10: Calculadora

En esta práctica lo que haremos será reproducir una calculadora con una pantalla de resultado y filas de teclas numéricas y de operaciones. Los botones tienen que ser componentes reutilizables hechos con `TouchableOpacity`, las filas se colocan con Flexbox y el resultado se guarda en un estado. Las operaciones no se pueden resolver con `eval`, que evalúa directamente cualquier cadena de texto.

Antes de empezar con la calculadora, el enunciado también nos pide reorganizar el proyecto para que no se pierdan las prácticas anteriores.

**Organización de las prácticas con Expo Router**

Hasta ahora `index.tsx` solo mostraba la última práctica, así que cada vez que empezábamos una nueva dejábamos de ver la anterior. Para arreglarlo hacemos tres cambios:

* En `_layout.tsx` sustituimos las pestañas de la plantilla por un `Stack`. Así cada práctica se abre encima del índice y arriba aparece una flecha para volver.
* Cada práctica tiene su propia ruta dentro de `src/app/` (`practica01.tsx`, `practica02.tsx`…). Estos archivos solo tienen una línea que exporta la pantalla de `src/screens/`, que es donde está el código de verdad.
* `index.tsx` pasa a ser un índice con un `Link` por cada práctica.

```tsx
// src/app/_layout.tsx
<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
  <AnimatedSplashOverlay />
  <Stack />
</ThemeProvider>
```

```tsx
// src/app/practica10.tsx
export { default } from '@/screens/CalculadoraScreen';
```

```tsx
// src/app/index.tsx
<ScrollView contentContainerStyle={styles.lista}>
  <Text style={styles.titulo}>Prácticas de React Native con Expo</Text>
  <Link href="/practica01" style={styles.enlace}>Práctica 1 - Hola mundo</Link>
  {/* ... una línea por práctica ... */}
  <Link href="/practica10" style={styles.enlace}>Práctica 10 - Calculadora</Link>
</ScrollView>
```

También renombramos las pantallas de `screens` para que tengan un nombre que diga lo que hacen, siguiendo el estilo del repositorio del profesor (`HolaMundoScreen`, `InicioScreen`, `PrincipalScreen`, `CirculosDinamicosScreen`…).

En `src/app/` no hay que dejar componentes sueltos, porque Expo Router trata cada archivo de esa carpeta como una ruta.

**Componente reutilizable -> `TeclaCalculadora`**

Creamos `TeclaCalculadora.tsx` dentro de `components`. Es el aspecto de una tecla, y la pantalla lo reutiliza 16 veces cambiando solo las propiedades.

* `texto`: lo que pone la tecla.
* `onPress`: la función que se ejecuta al pulsarla.
* `color`: el color de fondo. Es opcional (`?`) y, si no se pasa, la tecla sale gris (`#333`).

Con `flex: 1` todas las teclas de una misma fila se reparten el ancho por igual, sin tener que darles un tamaño fijo.

```tsx
type Props = {
  texto: string;
  onPress: () => void;
  color?: string;
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
```

**Nueva pantalla -> `CalculadoraScreen`**

Creamos `CalculadoraScreen.tsx` dentro de `screens` con la interfaz y la lógica de la calculadora.

**Estados**

Inicializamos las tres variables de estado que controlan la calculadora.

* La **pantalla**, que es el número que se está escribiendo. La guardamos como texto para poder ir añadiendo dígitos al final.
* El **primer número**, que es el que se guarda al pulsar una operación. Empieza en `null` porque al principio no hay ninguno.
* La **operación** pendiente: `+`, `-`, `×` o `÷`.

```tsx
const [pantalla, setPantalla] = useState('0');
const [primerNumero, setPrimerNumero] = useState<number | null>(null);
const [operacion, setOperacion] = useState<string | null>(null);
```

**Lógica de las teclas**

Aquí definimos las funciones que responden a las pulsaciones.

* `pulsarNumero`
  * Si la pantalla está a `0`, sustituye el cero por el dígito pulsado para que no salga `07`. Si no, añade el dígito al final del texto.
* `pulsarOperacion`
  * Pasa a número lo que hay en pantalla con `Number()`, lo guarda como primer número junto con la operación y pone la pantalla a `0` para escribir el segundo número.
* `pulsarIgual`
  * Si falta el primer número o la operación, no hace nada. Si están los dos, hace la cuenta con un `switch` según la operación guardada, enseña el resultado y vacía los estados. Así resolvemos las operaciones sin usar `eval`.
* `borrar`
  * Devuelve los tres estados a su valor inicial.

```tsx
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
```

**Pantalla de resultado**

Encima del resultado mostramos una línea más pequeña con la operación pendiente (por ejemplo, `12 +`), para no perder de vista el primer número cuando la pantalla vuelve a `0`. Si todavía no hay primer número, se muestra un texto vacío.

```tsx
<Text style={styles.operacion}>
  {primerNumero !== null ? `${primerNumero} ${operacion}` : ''}
</Text>
<Text style={styles.resultado}>{pantalla}</Text>
```

**Filas de teclas con Flexbox**

Cada fila es un `View` con `flexDirection: 'row'` y dentro van cuatro `TeclaCalculadora`. Los números usan el color por defecto; las operaciones y el igual, el naranja de la constante `NARANJA`; y la tecla `C`, un gris más claro. En `onPress` usamos una función flecha (`() => pulsarNumero('7')`) para que la función se ejecute al pulsar la tecla y no al dibujar la pantalla.

```tsx
<View style={styles.fila}>
  <TeclaCalculadora texto="7" onPress={() => pulsarNumero('7')} />
  <TeclaCalculadora texto="8" onPress={() => pulsarNumero('8')} />
  <TeclaCalculadora texto="9" onPress={() => pulsarNumero('9')} />
  <TeclaCalculadora texto="÷" color={NARANJA} onPress={() => pulsarOperacion('÷')} />
</View>
{/* ... filas 4 5 6 × y 1 2 3 - ... */}
<View style={styles.fila}>
  <TeclaCalculadora texto="C" color="#a5a5a5" onPress={borrar} />
  <TeclaCalculadora texto="0" onPress={() => pulsarNumero('0')} />
  <TeclaCalculadora texto="=" color={NARANJA} onPress={pulsarIgual} />
  <TeclaCalculadora texto="+" color={NARANJA} onPress={() => pulsarOperacion('+')} />
</View>
```

**Personalización con los `StyleSheet`**

El contenedor tiene `justifyContent: 'flex-end'` para que las teclas queden abajo, como en la calculadora del móvil, y `gap` para separar las filas. Dentro de cada fila, `gap` separa las teclas.

```tsx
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
```

**Limitaciones**

* La calculadora hace una operación cada vez (`2 + 3 =`). Si se pulsa otra operación sin el `=`, se queda con el último número.
* Después del `=`, si se escribe otro número se añade al resultado (`5` y luego `4` da `54`). Para empezar de cero hay que pulsar `C`.
* Dividir entre `0` da `Infinity`, que es lo que devuelve JavaScript.

# Paso 11: Hook personalizado para la calculadora

En esta práctica refactorizamos la calculadora del paso anterior para separar la lógica de negocio de la interfaz visual. Para ello extraemos todas las variables de estado y las funciones de cálculo a un hook personalizado llamado `useCalculadora`, dejando la pantalla centrada únicamente en pintar el JSX y los estilos.

**Nuevo hook -> `useCalculadora`**

Creamos la carpeta `hooks` dentro de `src` y añadimos el archivo `useCalculadora.ts`. Usamos la extensión `.ts` en lugar de `.tsx` porque este archivo no contiene etiquetas visuales, solo lógica en TypeScript. Por convención en React, el nombre del hook tiene que empezar por `use`.

* **Qué se mueve al hook:** Los tres estados (`pantalla`, `primerNumero` y `operacion`) y las cuatro funciones que responden a las teclas (`pulsarNumero`, `pulsarOperacion`, `pulsarIgual` y `borrar`).
* **Qué devuelve el hook:** Un objeto con los valores necesarios para mostrar en pantalla y las acciones que se conectan a los eventos `onPress`. No exponemos los *setters* (`setPantalla`, `setOperacion`, etc.) para que la vista no pueda modificar el estado saltándose las reglas del cálculo.

```ts
// src/hooks/useCalculadora.ts
import { useState } from 'react';

export function useCalculadora() {
  const [pantalla, setPantalla] = useState('0');
  const [primerNumero, setPrimerNumero] = useState<number | null>(null);
  const [operacion, setOperacion] = useState<string | null>(null);

  const pulsarNumero = (numero: string) => {
    if (pantalla === '0') {
      setPantalla(numero);
    } else {
      setPantalla(pantalla + numero);
    }
  };

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

  return {
    pantalla,
    primerNumero,
    operacion,
    pulsarNumero,
    pulsarOperacion,
    pulsarIgual,
    borrar,
  };
}
```

**Adaptación de la pantalla -> `CalculadoraScreen`**

En `CalculadoraScreen.tsx` eliminamos la importación de `useState`, los estados y las funciones matemáticas. En su lugar importamos `useCalculadora` y desestructuramos los valores y funciones que necesitamos para conectarlos con `Text` y `TeclaCalculadora`. Tanto la constante `NARANJA` como el bloque `StyleSheet` permanecen en la pantalla porque pertenecen exclusivamente al diseño.

```tsx
// src/screens/CalculadoraScreen.tsx
import { StyleSheet, Text, View } from 'react-native';

import TeclaCalculadora from '@/components/TeclaCalculadora';
import { useCalculadora } from '@/hooks/useCalculadora';

const NARANJA = '#ff9f0a';

export default function CalculadoraScreen() {
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
      <Text style={styles.operacion}>
        {primerNumero !== null ? `${primerNumero} ${operacion}` : ''}
      </Text>
      <Text style={styles.resultado}>{pantalla}</Text>
      {/* Filas de TeclaCalculadora conectadas a las funciones del hook */}
    </View>
  );
}
```

![Estructura del hook personalizado](/imagenesREADME/calculadora_hook.png)

**Comprobación del funcionamiento**

Tras conectar el hook, comprobamos en el emulador que la calculadora mantiene exactamente el mismo comportamiento que en el paso 10: al introducir una operación se muestra arriba el primer operando junto al signo, y al pulsar `=` se resuelve el cálculo correctamente.

* **Operación en curso:**

![Operación sencilla en pantalla](/imagenesREADME/operacion_sencilla.png)

* **Resultado tras pulsar igual:**

![Resultado del cálculo](/imagenesREADME/resultado_calculo.png)

# Paso 12: Color aleatorio con confirmación

En esta práctica creamos una pantalla que permite cambiar su color de fondo de forma aleatoria, pero pidiendo confirmación al usuario antes de aplicar el cambio mediante un diálogo nativo (`Alert.alert`).

**Pantalla principal -> `ColorAleatorioScreen`**

Creamos el componente en `src/screens/ColorAleatorioScreen.tsx` y su correspondiente ruta en `src/app/practica12.tsx` (enlazándola también desde el menú de `src/app/index.tsx`).

* **Lista de colores:** Definimos un array sencillo `COLORES` con nombres de colores válidos en CSS (`lightblue`, `lightgreen`, `salmon`, `gold`, `plum`, `lightgray`).
* **Estado del fondo:** Usamos `useState('white')` para guardar el color actual de la pantalla, que empieza en blanco.
* **Selección aleatoria y alerta:** Al pulsar el botón **«Cambiar de color»**, calculamos un índice al azar con `Math.floor(Math.random() * COLORES.length)` y lanzamos `Alert.alert()` mostrando el color propuesto. Si el usuario pulsa **«Aceptar»**, actualizamos el estado con `setFondo(colorElegido)`; si pulsa **«Cancelar»**, el estado no cambia y se mantiene el fondo anterior.

```tsx
// src/screens/ColorAleatorioScreen.tsx
import { useState } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

const COLORES = ['lightblue', 'lightgreen', 'salmon', 'gold', 'plum', 'lightgray'];

export default function ColorAleatorioScreen() {
  const [fondo, setFondo] = useState('white');

  const cambiarColor = () => {
    const indice = Math.floor(Math.random() * COLORES.length);
    const colorElegido = COLORES[indice];

    Alert.alert(
      'Cambiar color',
      `¿Quieres cambiar el fondo a ${colorElegido}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Aceptar', onPress: () => setFondo(colorElegido) },
      ]
    );
  };

  return (
    <View style={[styles.contenedor, { backgroundColor: fondo }]}>
      <Button title="Cambiar de color" onPress={cambiarColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

**Comprobación del funcionamiento**

Probamos la pantalla en el emulador verificando los tres estados principales:

* **Pantalla recién abierta con el fondo blanco inicial:**

![Pantalla recién abierta con fondo blanco](/imagenesREADME/pantalla_recien_iniciada.png)

* **Diálogo de confirmación mostrando el color aleatorio propuesto:**

![Alerta de confirmación de color](/imagenesREADME/alerta_de_cambio_de_color.png)

* **Fondo actualizado tras pulsar en «Aceptar»:**

![Pantalla con el color cambiado](/imagenesREADME/color_aleatorio.png)

# Paso 13: Introducir color mediante diálogo modal

En esta práctica crearemos una pantalla con un botón central que abre un cuadro de diálogo (`Modal`) para que el usuario escriba un color. Si el color introducido es válido, el fondo de la pantalla cambiará a ese tono; de lo contrario, se mostrará una alerta de error.

**Nueva pantalla -> `IntroducirColorScreen`**

Creamos `IntroducirColorScreen.tsx` dentro de `screens` y la enlazamos desde `src/app/` (por ejemplo, `practica13.tsx`) siguiendo la organización con Expo Router de las prácticas anteriores.

**Estados**

Inicializamos tres variables de estado para controlar la pantalla y el diálogo:

* **`fondo`**: guarda el color actual de la pantalla principal (empieza en `'white'`).
* **`visible`**: booleano que controla si el diálogo modal está abierto o cerrado.
* **`colorEscrito`**: almacena el texto que el usuario va tecleando en el `TextInput`.

```tsx
const [fondo, setFondo] = useState('white');
const [visible, setVisible] = useState(false);
const [colorEscrito, setColorEscrito] = useState('');
```

**Validación de colores (`esColorValido`)**

Para evitar pasar un texto cualquiera al estilo `backgroundColor` de React Native, validamos la entrada antes de aplicarla. Primero limpiamos espacios con `.trim()` y pasamos todo a minúsculas con `.toLowerCase()`.

La función devuelve `true` si cumple alguna de estas dos condiciones:
* **Formato hexadecimal**: comprobamos mediante la expresión regular `/^#([0-9a-f]{3}|[0-9a-f]{6})$/` que empiece por `#` y tenga 3 o 6 caracteres hexadecimales.
* **Nombres CSS**: comprobamos con `.includes()` si el texto está dentro de una lista predefinida de colores válidos (`white`, `black`, `lightblue`, `salmon`, etc.).

```tsx
const esColorValido = (texto: string) => {
    const limpio = texto.trim().toLowerCase();
    if (!limpio) return false;

    const esHex = /^#([0-9a-f]{3}|[0-9a-f]{6})\$/.test(limpio);

    const nombresCSS = [
        'white', 'black', 'red', 'green', 'blue', 'yellow', 'orange',
        'purple', 'pink', 'gray', 'grey', 'brown', 'cyan', 'magenta',
        'lightblue', 'lightgreen', 'salmon', 'gold', 'plum', 'lightgray',
    ];

    return esHex || nombresCSS.includes(limpio);
};
```

**Lógica de los botones del diálogo**

* `aceptarColor`
  * Si `esColorValido` devuelve `true`, actualiza el estado `fondo`, limpia el campo de texto y cierra el modal. Si no es válido, lanza un aviso nativo con `Alert.alert`.
* `cancelar`
  * Limpia el texto escrito y cierra el modal sin modificar el color de fondo actual.

```tsx
const aceptarColor = () => {
    const limpio = colorEscrito.trim().toLowerCase();

    if (esColorValido(limpio)) {
        setFondo(limpio);
        setColorEscrito('');
        setVisible(false);
    } else {
        Alert.alert('Color no válido', 'Escribe un color CSS válido (ej. lightblue) o hexadecimal (ej. #ff0000).');
    }
};

const cancelar = () => {
    setColorEscrito('');
    setVisible(false);
};
```

**Diálogo con `Modal` y `TextInput`**

Para que el cuadro de diálogo funcione de igual forma tanto en Android como en iOS, utilizamos el componente `Modal` con las propiedades `transparent` (para ver la pantalla detrás oscurecida con `#0008`) y `animationType="fade"`. Además, `onRequestClose={cancelar}` permite cerrarlo pulsando el botón físico o gesto de retroceso en Android.

Dentro del `TextInput` añadimos `autoCapitalize="none"` para que el teclado no ponga la primera letra en mayúscula automáticamente.

```tsx
<View style={[styles.contenedor, { backgroundColor: fondo }]}>
    <Button title="Cambiar de color" onPress={() => setVisible(true)} />

    <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={cancelar}
    >
        <View style={styles.fondoOscuro}>
            <View style={styles.cajaDialogo}>
                <Text style={styles.titulo}>Introduce un color</Text>

                <TextInput
                    style={styles.input}
                    value={colorEscrito}
                    onChangeText={setColorEscrito}
                    placeholder="Ej: lightblue o #ff9f0a"
                    autoCapitalize="none"
                />

                <View style={styles.botones}>
                    <Button title="Cancelar" color="gray" onPress={cancelar} />
                    <Button title="Aceptar" onPress={aceptarColor} />
                </View>
            </View>
        </View>
    </Modal>
</View>
```

**Personalización con los `StyleSheet`**

El contenedor principal ocupa toda la pantalla (`flex: 1`) y centra el botón inicial. Para el modal, `fondoOscuro` aplica un negro semitransparente (`#0008`) que centra `cajaDialogo`, donde usamos `gap: 12` para separar el título, el campo de texto y la fila de botones alineados a la derecha (`justifyContent: 'flex-end'`).

```tsx
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fondoOscuro: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#0008',
    },
    cajaDialogo: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 12,
        gap: 12,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
    },
    botones: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
    },
});
```

**Resultado en el emulador**

* **Diálogo modal abierto introduciendo el color:**

![Diálogo modal introduciendo color](/imagenesREADME/buscador_color_personalizado.png)

* **Pantalla principal con el fondo actualizado (`teal`):**

![Pantalla coloreada con teal](/imagenesREADME/lightblue_color_fondo.png)

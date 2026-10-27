# Práctica 00. Iniciación a JavaScript

## Objetivos

En esta práctica he preparado el repositorio del módulo y he tenido una primera toma de contacto con JavaScript. He creado la estructura de carpetas, configurado el repositorio de GitHub y realizado el primer ejercicio de programación en JavaScript, aprendiendo los conceptos básicos como variables, tipos de datos y salida por consola.

---

## Parte 1. Creación del repositorio

Primero he creado el repositorio `pgl-2dam` en GitHub. Lo he configurado con un archivo `README.md` inicial y un `.gitignore` para Node.js.

Después he clonado el repositorio en mi equipo local para empezar a trabajar:

![Repositorio clonado con éxito](../resources/Repositorio%20Clonado.png)

---

## Parte 2. Descarga y organización

### Paso 1. Creación de la estructura de carpetas

Siguiendo las indicaciones del guion, he creado toda la estructura de carpetas para organizar las unidades del módulo:

- Primero he creado la carpeta `tema-0-introduccion`:

![Creación del tema de introducción](../resources/Creacion%20del%20tema%20de%20introduccion.png)

- A continuación he creado las carpetas para el resto de unidades temáticas (`ut1-fundamentos`, `ut2-react-native`, `ut3-multimedia`, `ut4-motores-videojuegos`, `ut5-videojuego-unity`):

![Creación UT1](../resources/Creacion%20del%20tema%201.png)
![Creación UT2](../resources/Creacion%20del%20tema%202.png)
![Creación UT3](../resources/Creacion%20del%20tema%203.png)
![Creación UT4](../resources/Creacion%20del%20tema%204.png)
![Creación UT5](../resources/Creacion%20del%20tema%205.png)

- Dentro de `tema-0-introduccion` he creado la carpeta `practica-00-iniciacion-javascript` que contendrá los ejercicios de esta práctica:

![Creación carpeta de la práctica](../resources/Creacion%20de%20la%20carpeta%20que%20contiene%20los%20ejercicios%20de%20practica.png)

### Estructura final de carpetas

A continuación se muestra la estructura completa del directorio vista desde la terminal. Como se puede observar, las carpetas correspondientes a las unidades temáticas de `ut1-fundamentos` a `ut5-videojuego-unity` no aparecen en esta vista a pesar de haberlas creado anteriormente. Esto se debe a que Git no registra carpetas que se encuentran completamente vacías (sin ningún archivo dentro), por lo que no aparecen reflejadas hasta que se les añada contenido en próximas prácticas.

![Estructura de carpetas (sin las vacías)](../resources/Escturtura%20de%20las%20carpetas%20sin%20las%20carpetas%20vacias.png)

### Paso 2. Creación del README principal

He completado el archivo `README.md` de la raíz del repositorio con mis datos personales y los enlaces a los contenidos del módulo:

![Creación del README principal](../resources/Creacion%20del%20README%20principal.png)

También he creado el `README.md` dentro de la carpeta de la práctica (este mismo archivo que estoy completando ahora):

![Creación del README de la práctica](../resources/Creacion%20del%20README%20del%20tema%20de%20introduccion.png)

### Paso 3. Comprobación de Node.js

Antes de empezar con JavaScript, he verificado que Node.js está correctamente instalado en el sistema:

![Versión de Node.js instalada](../resources/Version%20de%20node.png)

Node.js versión `v22.23.2` está instalado correctamente.

---

## Ejercicio 1. Mi primer programa

He abierto el archivo `ejercicio-01.js` y he ido implementando paso a paso el programa.

### Paso 1. Mostrar un mensaje

Primero he creado el archivo del ejercicio y he añadido el primer `console.log()` para mostrar un mensaje de bienvenida:

![Creación del archivo ejercicio-01.js](../resources/Creacion%20del%20primer%20ejercicio%20de%20practica%20javaScript.png)

A continuación he ejecutado el archivo desde la terminal para comprobar que funciona correctamente:

```bash
node tema-0-introduccion/practica-00-iniciacion-javascript/ejercicio-01.js
```

![Comprobación: Hola, JavaScript](../resources/Comprobacion%20de%20que%20funciona%20e%20imprime%20el%20mensaje.png)

### Paso 2. Mostrar varios mensajes

He añadido más líneas de `console.log()` para mostrar varios mensajes secuenciales sobre la Pokédex y las tecnologías que usaremos este curso. Las instrucciones se ejecutan de arriba a abajo:

![Mostrando varios mensajes](../resources/Mostrando%20varios%20mensajes.png)

### Paso 3. Crear variables

A continuación he creado variables para guardar los datos de un Pokémon. He utilizado `const` ya que no vamos a reasignar estos valores:

- `nombre`: texto con el nombre del Pokémon
- `tipo`: texto con el tipo de Pokémon
- `nivel`: número con el nivel del Pokémon

![Creación de variables nombre, tipo y nivel](../resources/Creacion%20de%20las%20variables%20de%20nombre,%20tipo%20y%20nivel.png)

### Paso 4. Mostrar las variables

Después de crear las variables, las he mostrado individualmente por consola usando `console.log()` con cada variable:

![Mostrando variables en consola](../resources/Hacemos%20que%20las%20variable%20se%20muestren%20en%20la%20consola.png)

El resultado en la terminal muestra las tres variables impresas una por línea:

![Resultado consola variables](../resources/Resultado%20en%20consola%20de%20las%20variables%20creadas.png)

### Paso 5. Forma elegante de mostrar información (plantillas de texto)

Para combinar texto y variables de forma más legible, he utilizado plantillas de texto (template literals) con acentos graves `` ` ``. Esto permite insertar variables directamente dentro de una cadena de texto usando la sintaxis `${variable}`:

![Plantillas de texto](../resources/Forma%20mas%20bonita%20de%20mostrar%20las%20variables.png)

El resultado es un mensaje mucho más natural y compacto:

![Resultado plantillas de texto](../resources/Resultado%20al%20de%20mostrar%20la%20informacion%20de%20manera%20mas%20bonita.png)

### Paso 6. Cambiar los datos (Charmander)

Como paso final, he cambiado los valores iniciales (Pikachu) por los de otro Pokémon para practicar. En la versión final del archivo he utilizado a **Charmander** de tipo **Fuego** y nivel **8**.

El código final del [ejercicio-01.js](ejercicio-01.js) queda así:

```javascript
console.log("Hola, JavaScript");
console.log("-------------------------------------");
console.log("Estoy preparando mi primra Pokédex");
console.log("Durante el curso utilizaremos JavaScript y TypeScript");
console.log("-------------------------------------");
const nombre = "Charmander";
const tipo = "Fuego";
const nivel = 8; 
console.log(nombre);
console.log(tipo);
console.log(nivel);
console.log("-------------------------------------");
console.log("Tambien podemos mostrar la información de manera mas compacta y en una linea:");
console.log(`${nombre} es de tipo ${tipo} y es de nivel ${nivel}`);
```

---

## Ejercicio 2. Operaciones y decisiones básicas

Para este segundo ejercicio he abierto `ejercicio-02.js`, donde he trabajado con operaciones aritméticas básicas y estructuras condicionales (if/else) para que el programa tome decisiones.

### Paso 1. Crear el archivo y mensajes iniciales

Primero he creado el archivo del segundo ejercicio y he añadido los mensajes iniciales de bienvenida y una línea separadora para organizar la salida:

![Creación de la segunda actividad](../resources/2%20Creacion%20de%20la%20segunda%20actividad.png)

### Paso 2. Declarar los datos (variables)

A continuación he declarado las variables que utilizaremos en este ejercicio. Esta vez para trabajar con el sistema de experiencia de un Pokémon:

- `nombre`: nombre del Pokémon (Bulbasur)
- `nivel`: nivel actual (número 10)
- `experienciaActual`: puntos de experiencia que ya tiene (inicialmente 70)
- `experienciaGanada`: puntos ganados en una batalla (30)

Cada variable se muestra por consola justo después de declararse:

![Código de las variables del ejercicio 2](../resources/2%20Codigo%20de%20las%20variables%20recien%20creadas%20para%20la%20practica%202.png)

El resultado en consola de estas variables iniciales es el siguiente:

![Resultado consola variables ejercicio 2](../resources/2%20Resultado%20en%20consola%20de%20las%20variables%20a%20usar.png)

### Paso 3. Realizar una operación (suma de experiencia)

El siguiente paso ha sido realizar una operación matemática básica: sumar la experiencia actual con la experiencia ganada para obtener la experiencia total. Para ello he utilizado el operador de suma `+`. El resultado se guarda en una nueva variable `experienciaTotal`:

![Código suma de experiencias](../resources/2%20Codigo%20para%20la%20operacion%20de%20sumar%20experiencias.png)

Al ejecutarlo, la consola muestra la operación completa: Bulbasur tenía 70 puntos, gana 30, y ahora tiene 100:

![Resultado suma experiencias](../resources/2%20resutlado%20en%20consola%20de%20la%20operacion%20de%20sumar%20experiencias.png)

### Paso 4. Comprobar una condición (if / else)

Aquí es donde el programa empieza a "tomar decisiones". He añadido una estructura condicional `if...else` que comprueba si la experiencia total es **mayor que 100**.

- Si la condición es verdadera (`experienciaTotal > 100`): el Pokémon puede subir de nivel
- Si la condición es falsa: el Pokémon todavía no puede subir de nivel

![Código condición if/else](../resources/2%20Añadimos%20una%20conicion%20en%20el%20codigo%20para%20comprobar%20si%20el%20pokemo%20puede%20subir%20de%20nivel%20o%20no%20.png)

### Paso 5. Experimentar: probar ambos casos

Tal como pide el guion, he probado distintos valores para `experienciaActual` y `experienciaGanada` para ver los dos posibles resultados del `if...else`:

**Caso 1 (experienciaTotal = 100): No puede subir de nivel**

Con `experienciaActual = 70` y `experienciaGanada = 30`, el total es exactamente 100. Como la condición usa `>` (estrictamente mayor) y no `>=` (mayor o igual), 100 no cumple la condición:

![Resultado: no puede subir de nivel](../resources/2%20Si%20no%20cambiamos%20la%20experiencia%20ganada%20o%20actual%20el%20resultado%20se%20queda%20en%20100,%20por%20lo%20que%20no%20puede%20subir%20de%20nivel.png)

**Caso 2 (experienciaTotal = 120): Sí puede subir de nivel**

Cambiando `experienciaActual` a 90 y manteniendo `experienciaGanada = 30`, ahora el total es 120, que sí es mayor que 100, por lo que se cumple la condición y se ejecuta el bloque del `if`:

![Resultado: sí puede subir de nivel](../resources/2%20si%20cambiamos%20la%20experiencia%20actual%20a%2090,%20el%20total%20seria%20120%20por%20lo%20que%20el%20pokemo%20ahora%20se%20muestra%20con%20la%20posibilidad%20de%20subir%20de%20nivel.png)

### Paso 6. Código final del ejercicio 02

Al final he dejado los valores del **Caso 2** (Bulbasur con experienciaActual 90, que sí puede subir de nivel). El código completo del [ejercicio-02.js](ejercicio-02.js) queda así:

```javascript
console.log("Esta es mi segunda práctica con JavaScript");
console.log("Vamos a realizar una serie de operaciones y decisiones básicas");
console.log("----------------------------------------");
console.log("Variables a usar:");
const nombre = "Bulbasur";
console.log(`Nombre: ${nombre}`);
const nivel = 10;
console.log(`Nivel: ${nivel}`);
const experienciaActual = 90;
console.log(`Experiencia Actual: ${experienciaActual}`);
const experienciaGanada = 30;
console.log(`Experiencia Ganada: ${experienciaGanada}`);
console.log("----------------------------------------");
console.log("Operación: Suman Experiencia");
const experienciaTotal = experienciaActual + experienciaGanada;
console.log(`${nombre} tenía ${experienciaActual} puntos de experiencia`);
console.log(`${nombre} en batalla ha ganado ${experienciaGanada} puntos de experiencia`);
console.log(`Ahora tiene ${experienciaTotal} puntos de experiencia`);
console.log("----------------------------------------");
console.log("Siguiente Operación: Comprobar una Condición");
if (experienciaTotal > 100) {
	console.log(`${nombre} puede subir de nivel`);
} else {
	console.log(`${nombre} todavia no puede subir de nivel`);
}
```

---

## Conceptos utilizados

- `console.log()`: Función de JavaScript que permite imprimir o mostrar información en la consola/terminal. Es la herramienta básica para ver los resultados de nuestros programas.
- Variable `const`: Espacio en memoria donde guardamos un dato (texto, número, etc.) para utilizarlo posteriormente. Al usar `const`, indicamos que el valor no va a cambiar (no se reasigna).
- Texto (string): Tipo de dato que representa una cadena de caracteres, siempre delimitado por comillas dobles `""`, simples `''` o acentos graves `` ` ``. Ejemplos: `"Charmander"`, `'Fuego'`, `"Bulbasur"`.
- Número (number): Tipo de dato numérico, se escribe directamente sin comillas. Ejemplos: `8`, `10`, `90`, `30`.
- Plantillas de texto (template literals): Forma avanzada de crear cadenas de texto usando acentos graves `` ` ``. Permiten insertar variables o expresiones dentro del texto con la sintaxis `${expresion}`, haciendo el código más legible.
- Operaciones aritméticas: Uso de operadores matemáticos como `+` (suma) para combinar valores numéricos y obtener un resultado. En este ejercicio hemos sumado puntos de experiencia.
- Condición `if...else`: Estructura de control que permite al programa tomar una decisión. Evalúa una condición y, según si es verdadera o falsa, ejecuta un bloque de código u otro.
- Operadores de comparación: Simbolos que permiten comparar valores. En este ejercicio se ha usado `>` (mayor que) para comprobar si la experiencia superaba el umbral de 100.
- Orden de ejecución: Las instrucciones de JavaScript se ejecutan secuencialmente, de arriba hacia abajo, tal y como están escritas en el archivo.

## Dificultades encontradas

- Recordar utilizar los acentos graves `` ` `` y no las comillas normales para las plantillas de texto, ya que de lo contrario no funciona la interpolación de variables.

## Conclusión

En esta práctica he aprendido a organizar un repositorio de GitHub siguiendo una estructura predefinida, y he dado mis primeros pasos con JavaScript a través de dos ejercicios guiados.

En el **Ejercicio 1** he comprendido cómo funciona `console.log()` para mostrar información, cómo declarar variables con `const`, la diferencia entre tipos de datos como textos y números, y cómo combinar ambos de forma elegante mediante las plantillas de texto.

En el **Ejercicio 2** he dado un paso más: he aprendido a realizar operaciones matemáticas básicas (como la suma) y, sobre todo, cómo hacer que un programa "tome decisiones" mediante la estructura condicional `if...else`. Comprobar los dos posibles resultados (verdadero y falso) me ha ayudado a entender muy bien cómo funcionan las condiciones.

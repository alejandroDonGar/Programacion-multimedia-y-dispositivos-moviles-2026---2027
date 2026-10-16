# Página tipo Steam 'GameShelf'

## Herramientas usadas

## ¿Qué es 'React' y qué ocurre en el entorno?

**¿Qué es React? ¿Es un lenguaje, una biblioteca o una herramienta para crear proyectos?**

* **Es una biblioteca (o librería) de JavaScript** de código abierto especializada en el diseño y la creación de interfaces de usuario (UI).

* **No es un lenguaje ni una herramienta de construcción completa** ya que se apoya en JavaScript/TypeScript y en empaquetadores como Vite para poder compilar y estructurar proyectos enteros.

**¿Qué diferencia hay entre create-vite y Vite? ¿Qué hace Vite mientras ejecutamos npm run dev? ¿Qué crees que hará npm run build?**

* **`create-vite` es un script iniciador** (plantilla) que se ejecuta una sola vez para estructurar las carpetas y archivos base de tu nuevo proyecto. Vite es el motor/herramienta de desarrollo que gestiona tu proyecto a partir de ahí.

* **Mientras ejecutas `npm run dev`, Vite levanta un servidor de desarrollo local ultra rápido** que lee los cambios de tu código en tiempo real y actualiza el navegador al instante (Hot Module Replacement) sin recargar toda la página.

* **`npm run build` compila, optimiza y empaqueta** todo tu código fuente (TypeScript, JSX, CSS) en archivos puros de JavaScript, HTML y CSS minificados dentro de una carpeta llamada dist, listos para ser subidos a un servidor de producción.

**¿Qué son Node.js y npm? ¿Para qué usamos npm create, npm install y npm run dev?**

* **Node.js es un entorno de ejecución de JavaScript en el servidor** (fuera del navegador) y npm es su gestor de paquetes por defecto que permite descargar herramientas de terceros.

* **`npm create` descarga y ejecuta una herramienta de inicialización** (como 'create-vite') para hacer proyectos desde cero; **`npm install` lee tu archivo `package.json` e instala** todas las dependencias del proyecto en tu máquina; **`npm run dev` arranca el servidor local** para empezar a programar.

**¿Qué son las dependencias? ¿Por qué aparece node_modules?**

* **Las dependencias son librerías de código reutilizable hechas por otros desarrolladores** (como React o los linters) que tu proyecto necesita de manera obligatoria para poder funcionar.

* **`node_modules` es la carpeta física donde npm descarga y almacena** todos los archivos de esas dependencias que acabamos de mencionar.

**¿Qué añade TypeScript a JavaScript?**

* **Añade tipado estático estricto y detección de errores en tiempo de desarrollo.** Te obliga a definir qué tipo de datos (número, texto, booleano, objeto) acepta cada variable o función para evitar fallos antes de que el código llegue al navegador.

**¿Qué significan JSX y TSX?**

* **JSX (JavaScript XML) es una extensión de sintaxis** que permite escribir código similar a HTML directamente dentro de tus funciones de JavaScript. **TSX es exactamente lo mismo, pero habilitado para usar TypeScript** dentro del archivo.

## Archivos del proyecto

### index.html

**¿Qué elemento tiene id="root"?**

* El **`<div>`** que tenemos dentro del **`index.html`** lleva la etiqueta **root** porque será nuestro elemento raiz del proyecto dentro del **`<body>`**.

### src/main.tsx

**¿Qué componente importa? ¿Dónde aparece createRoot?**

* Importa el comportamiento que llamamos **`App`** que viene de **`./App.tsx`**.

* **`createRoot` aparece justo al principio de la ejecucion principal** que captura el elemento DOM usando **`document.getElementById('root')`** para incializar y renderizar ahí la aplicación.

### src/App.tsx

**¿Qué interfaz se muestra?**

* **Muestra un catálogo de videojuegos llamado "GameShelft"** compuesto por un título **`<h1>`**, un párrafo descriptivo y una sección de clase **`<catalog>`** que renderiza una lista dinámica de componentes **`<GameCard/>`** basados en un array de objetos (**`games`**).

### src/App.css

**¿Qué reglas visuales aparecen?**

* **Aparecen estilos específicos de componentes**, tales como **`.counter`** (con bordes animados al pasar el cursor), una animación/posición tridimensional en perspectiva para **`.hero`** (con subelementos **`.framework`** y **`.vite`**), y diseños de secciones específicas como **`#center`**, **`#next-steps`** y **`#docs`**.

### src/index.css

**¿En qué se diferencia de App.css?**

* **`index.css` define las reglas e inicializaciones globales de la aplicación**. Aquí se configuran variables CSS (**`:root`**) para temas claros/oscuros, las fuentes del sistema, los márgenes globales del **`body`** y el tamaño/comportamiento del contenedor principal **`#root`**. **`App.css`** se enfoca solo en estilos modulares o de componentes internos.

### package.json

**¿Qué comandos aparecen en scripts?**

* Aparecen **`"dev": "vite"`**, **`"build": "tsc -b && vite build"`**, **`"lint": "eslint ."`** y **`"preview": "vite preview"`**

### tsconfig.json

**¿Qué indica “ts”? ¿Necesitas editarlo hoy?**

* Indica **TypeScript**. Es un lenguaje de programación basado en JavaScript, pero que añade reglas y ayudas visuales para que no cometas errores al escribir el código.

* **No**, no hace falta tocarlo. Solo tendria que editarlo si quisiera cambiar la forma en que se organiza, compila o conecta tu proyecto.

### vite.config.ts

**¿Qué nombre de herramienta aparece?**

* Aparece **`vite`**

### public/ y src/assets/

**¿Qué recursos encuentras?**

* En estas dos carpetas lo que encontramos son los recursos gráficos que va a genera o añadir la pagina a su layout como Favicons, o pngs que se van a mostrar a lo largo de la página.

### node_modules/

**¿Qué contiene? ¿Por qué no se sube?**

* La carpeta contiene los módulos y librerías externas que el proyecto necesita para funcionar, como los paquetes de código que se descargan de internet ya sean, **`React`**, **`typeScript`**, **`vite`**, etc.

* No se suebe porque es **innecesario, ineficiente y una mala practica** por el **peso masivo** de todas las librerias, ya están registradas en **`package.json`**, la incompatibilidad con otros sitemas y porque es facilmente recreable por otros programadores usando **`npm install`** en su máquina.

### .gitignore

**¿Qué archivos o carpetas ignora Git?**

* El **`.gitignore`** no sube a **github** los archivos que no queremos que se vean en el repositorios por otros usuarios.

## Componentes de los archivos

Dentro de cada archivo usaremos diferentes lenguajes,  componentes como funciones, parámetros, funciones flecha, eventos, menajadores, estados, callbacks y demás.

| Conceptos | Funcionalidad |
|-|-|
| JavaScript | Lenguaje de programación base de la web que permite dar interactividad y lógica a las aplicaciones |
| TypeScript | Superconjunto de JavaScript que añade **tipado estático** para detectar errores en el código antes de ejecutarlo |
| JSX | Extensión de la sintaxis de JavaScript que permite escribir estructuras similares a **HTML directamente dentro de código JS** |
| TSX | Es exactamente lo mismo que JSX, pero adaptado para trabajar bajo las reglas y el **soporte de tipos de TypeScript** |
| Componente | Bloque de código **reutilizable e independiente** (normalmente una función) que define una parte de la interfaz de usuario |
| Props | Argumentos u objetos que se pasan a un componente desde el exterior para **configurarlo o enviarle datos** |
| Función | Bloque de código diseñado para realizar una tarea específica cuando es invocado o llamado |
| Parámetro | La **variable o hueco** que se define en la declaración de una función para recibir los datos de entrada |
| Evento | Una acción o suceso detectado por el navegador provocado por el usuario (como hacer **`click`**, escribir o hacer scroll). |
| Manejador | (Handler) La **función específica que se ejecuta** como respuesta inmediata cuando ocurre un evento determinado. |
| Estado | Memoria interna de un componente que **guarda datos que pueden cambiar** y que, al modificarse, obligan a redibujar la pantalla. |
| Callback | Una **función que se pasa a otra función como argumento** para ser ejecutada más tarde (normalmente al terminar una tarea). |

## Fundamentos de CSS

### ¿Qué es CSS?
**CSS (Cascading Style Sheets)** o Hojas de Estilo en Cascada es el lenguaje utilizado para describir la presentación, el formato y el diseño visual de los elementos estructurados en una página web. Separar el contenido (TSX/HTML) del diseño (CSS) permite mantener un código limpio y escalable.

### ¿Qué es un Selector CSS?
Un **selector** es el patrón o texto que se utiliza en el archivo CSS para decirle al navegador **a qué elementos del documento queremos aplicar los estilos**. Por ejemplo:
*   Un selector de etiqueta (`main`, `h1`) apunta a todos los elementos que usen esa etiqueta.
*   Un selector de clase (`.catalog`, `.card`) apunta a los elementos que tengan asignada esa clase en particular.

### ¿Qué es una Propiedad CSS?
Una **propiedad** es el aspecto o característica específica del elemento que queremos modificar (como su color, tamaño, margen o sistema de distribución). Cada propiedad va acompañada de un **valor**. Por ejemplo, en `color: red;`, `color` es la propiedad y `red` es el valor.

## Integración de Estilos en este Proyecto

### ¿Dónde escribí los estilos?
Escribí las reglas de diseño dentro del archivo **`src/App.css`**. Este archivo contiene CSS estándar y moderno, sin mezclar código de TypeScript ni etiquetas JSX.

### ¿Cómo conecté una clase del TSX con su regla CSS?
La conexión se produce en dos pasos:
1.  **Vínculo en el código (Importación):** En el archivo `src/App.tsx` se añadió la línea `import './App.css'`. Esto le avisa a React y a la herramienta de compilación (Vite) que cargue e inyecte los estilos de ese archivo en toda la aplicación.
2.  **Relación de Nombres (JSX vs CSS):** 
    *   En el archivo **TSX**, los elementos reciben un nombre identificador mediante el atributo **`className`** (por ejemplo: `className="catalog"` o `className="card"`). Se usa `className` y no `class` porque la palabra `class` está reservada nativamente por JavaScript.
    *   En el archivo **CSS**, nos referimos a ese identificador anteponiendo un **punto (`.`)**, quedando como `.catalog` o `.card`. El navegador lee el punto, entiende que busca una clase e inyecta todas las propiedades visuales descritas dentro de las llaves al elemento TSX correspondiente.

---

## Descripción del CSS Utilizado
El diseño de `src/App.css` no fue copiado a ciegas; utiliza las siguientes técnicas avanzadas:
*   **CSS Grid (`display: grid`):** Aplicado en `.catalog` para generar una cuadrícula inteligente de tarjetas. Con `repeat(auto-fill, minmax(280px, 1fr))` logramos que el catálogo sea responsivo sin usar Media Queries: las columnas se crean y se acomodan solas según el tamaño de la pantalla.
*   **CSS Flexbox (`display: flex`):** Aplicado dentro de `.card` de forma vertical (`flex-direction: column`) para alinear perfectamente los títulos, géneros, precios y botones de forma simétrica.
*   **Variables CSS (`var(--...)`):** Se reutilizan los estilos de color

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

* 

### tsconfig.json

**¿Qué indica “ts”? ¿Necesitas editarlo hoy?**

* 

* 

### vite.config.ts

**¿Qué nombre de herramienta aparece?**

* 

### public/ y src/assets/

**¿Qué recursos encuentras?**

* 

### node_modules/

**¿Qué contiene? ¿Por qué no se sube?**

* 

### .gitignore

**¿Qué archivos o carpetas ignora Git?**

* 

## Componentes de los archivos

Dentro de cada archivo usaremos diferentes lenguajes,  componentes como funciones, parámetros, funciones flecha, eventos, menajadores, estados, callbacks y demás.

| Conceptos | Funcionalidad |
|-|-|
| JavaScript |  |
| TypeScript |  |
| JSX |  |
| TSX |  |
| Componente |  |
| Props |  |
| Función |  |
| Parámetro |  |
| Evento |  |
| Manejador |  |
| Estado |  |
| Callback |  |

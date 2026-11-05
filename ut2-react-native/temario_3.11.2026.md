# Del React web a la app móvil: qué cambia al diseñar para móvil

> Clase del 03/11/2026. Introducción al diseño antes de empezar a crear la app móvil (siguiente paso de la UT2: React Native con Expo).

Hasta ahora hemos hecho React en el navegador (Vite + TypeScript: `mi-primera-app`, GameShelf). Antes de pasar al móvil conviene separar dos preguntas que se suelen mezclar:

- **Dónde y cómo se ejecuta** la aplicación: en el navegador, instalada desde una tienda, abierta desde un icono…
- **Qué aspecto tiene** en pantalla.

Ver una web en el teléfono no dice nada de cómo está hecha: el aspecto en pantalla no revela si es una web, una PWA o una app nativa.

---

## 1. Conceptos básicos

| Concepto | Qué es |
|---|---|
| **Dispositivo móvil** | Teléfono o tableta: un equipo que se transporta y se usa en cualquier sitio. |
| **App móvil** | Programa que realiza una o varias tareas en un dispositivo móvil. |
| **Sistema operativo (SO)** | Software principal que ejecuta las apps y gestiona los recursos del dispositivo (memoria, batería, sensores, permisos). En móvil: **Android** e **iOS**. |
| **Desarrollo móvil** | Proceso de diseñar, crear, probar y mantener software que se usa en dispositivos móviles. |

---

## 2. Qué cambia respecto a un PC

| Aspecto | En un PC | En un móvil | Consecuencia al diseñar |
|---|---|---|---|
| **Entrada** | Teclado y ratón (precisos) | Pantalla táctil (el dedo es grande e impreciso) | Botones grandes y separados, nada que dependa de pasar el ratón por encima (`hover`). |
| **Contexto de uso** | Sentado, con tiempo y atención | De pie, andando, con prisa, con una mano, al sol | Tareas cortas y claras, lo importante a la vista. |
| **Pantalla** | Grande | Pequeña, en vertical u horizontal | Menos información a la vez, prioridades claras. |
| **Conexión** | Estable | Variable o inexistente (túneles, zonas rurales) | Decidir qué pasa sin conexión y avisar al usuario. |
| **Potencia y recursos** | Mucha CPU y memoria | Más limitados | Código y recursos ligeros (imágenes optimizadas). |
| **Batería** | Enchufado | Limitada | No abusar de GPS, animaciones ni peticiones en segundo plano. |
| **Almacenamiento** | Amplio | Más justo y compartido con fotos y otras apps | Guardar solo lo necesario. |

Por eso **no basta con hacer la web responsive** (que se reorganice según el tamaño): hay que pensar **qué hará la persona, dónde, cómo y con qué dispositivo**. Ejemplos de clase:

- En una app de **mapas** la ubicación es útil; en una **calculadora**, no tiene sentido pedirla.
- Una pantalla de **compra** debe permitir pulsar los botones con el dedo cómodamente.
- Una app que se usa en un lugar **con poca cobertura** debe explicar qué ocurre si no puede conectarse.
- **Accesibilidad**: contraste, tamaño de letra, lectores de pantalla.
- **Retroalimentación**: el usuario debe saber en todo momento qué está pasando (cargando, guardado, error, sin conexión).

---

## 3. Tipos de aplicaciones para móvil

| Tipo | Cómo se usa | Qué la caracteriza |
|---|---|---|
| **Web adaptable** (*responsive*) | Se escribe una dirección en el navegador | Sitio web que reorganiza su diseño según la pantalla. |
| **App web** | Desde el navegador, sin instalar | Sigue siendo una web, pero sirve para **hacer tareas**, no solo para leer información. |
| **PWA** (*Progressive Web App*) | Desde el navegador y, según el navegador y el SO, se puede **instalar** en la pantalla de inicio | Tecnología web con algunas capacidades de app instalada e integración con el sistema. |
| **Nativa** | Se instala (normalmente desde Google Play o App Store) y se abre desde su icono | Hecha para **una** plataforma concreta (Android o iOS). |
| **Multiplataforma** | Se instala como una nativa | Una misma base de código para **varios** SO (**Flutter**, **React Native**). |

### 3.1 Web adaptable
Sitio web cuyo diseño se reorganiza para verse bien en pantallas distintas. No instala nada. «Adaptable» describe **cómo responde a los tamaños de pantalla**, no la tecnología con la que está hecho (en Interfaces lo vemos con `Expanded`/`Flexible` en Flutter; en web, con CSS y *media queries*).

### 3.2 App web
Aplicación que se usa desde el navegador y permite **hacer tareas** (crear, editar, buscar, comprar), no solo leer. Puede ser muy interactiva y seguir siendo de navegador. Nuestra mini-Pokédex y GameShelf son apps web.

### 3.3 PWA
App construida con tecnología web (HTML, CSS, JS) que ofrece una experiencia parecida a la de una app. Según el navegador y el SO puede instalarse y usar capacidades adicionales (icono en el inicio, pantalla completa, notificaciones). No todas las webs son PWA: necesitan, entre otras cosas, un **manifiesto** (`manifest.json`: nombre, iconos, colores) y servirse por **HTTPS**. La documentación de **MDN** explica estas posibilidades y sus requisitos.

> ✏️ **Corrección:** en clase apunté que «las PWA necesitan conexión». No siempre: con un **service worker** (un script que intercepta las peticiones y guarda archivos en caché) una PWA puede **seguir funcionando sin conexión** después de la primera visita. Lo que sí necesita conexión es la primera carga y todo lo que dependa del servidor.

### 3.4 Nativa
App desarrollada específicamente para un sistema operativo (Kotlin/Java en Android, Swift en iOS), aprovechando al máximo el dispositivo. Facilita el acceso a las funciones del sistema (cámara, GPS, sensores, notificaciones, segundo plano), pero **hay que hacer y mantener Android e iOS por separado**.

### 3.5 Multiplataforma
Apps pensadas para funcionar en más de un sistema operativo compartiendo buena parte del desarrollo. **Flutter** (lo vemos en Interfaces) dibuja su propia interfaz; **React Native** (lo veremos aquí, con Expo) usa los componentes nativos de cada sistema y se programa con React, como lo que ya hemos hecho. Algunas funciones dependen de componentes o *plugins* específicos de cada plataforma.

### 3.6 ¿Son lo mismo una PWA y una nativa?

**No.** Pueden parecerse en pantalla, pero:

| | PWA | Nativa |
|---|---|---|
| Tecnología | Web (HTML, CSS, JS) | Lenguaje y API del SO (Kotlin, Swift) |
| Dónde se ejecuta | Dentro del navegador | Directamente sobre el SO |
| Instalación | Desde el navegador (opcional) | Desde la tienda de apps |
| Actualización | Al recargar, sin pasar por la tienda | Nueva versión en la tienda |
| Acceso al dispositivo | El que permita el navegador (más limitado, sobre todo en iOS) | Completo, con permisos |
| Un código para varios SO | Sí | No (una por plataforma) |

Una PWA es una **web que se comporta como una app**; una nativa es una **app del sistema operativo**.

---

## 4. Preguntas para decidir qué tipo de app hace falta

1. **¿Necesita instalarse o podría abrirse desde el navegador?**
2. **¿Tiene que funcionar sin conexión?**
3. **¿Necesita una función del dispositivo, como la ubicación o la cámara?**
4. **¿Qué podría resultar incómodo al usarla en una pantalla pequeña?**

### Caso A: consultar horarios, dirección y teléfono
*Una persona entra pocas veces y puede llegar a la información desde un buscador.*

1. No necesita instalar nada.
2. No: la información está en la web.
3. No hace falta. Como mucho, un enlace que abra la dirección en la app de mapas del teléfono.
4. Demasiada información a la vez o un mapa incrustado difícil de manejar con el dedo.

**Propuesta:** **web adaptable**.

> ✏️ **Corrección:** en clase respondí «app web» y que necesitaría la ubicación. Como solo se **consulta** información (no se hacen tareas), basta con una **web adaptable**. Y no hace falta pedir la ubicación: con un enlace a la dirección es suficiente.

### Caso B: apuntar tareas y revisarlas sin conexión durante un trayecto
1. Conviene instalarla para abrirla rápido desde el inicio.
2. **Sí**: es el requisito clave.
3. Ninguna.
4. Cómo se organiza la lista y el formulario en una pantalla pequeña, y escribir con el teclado del móvil.

**Propuesta:** **nativa o multiplataforma**, guardando los datos en el propio dispositivo.

> ➕ **Ampliación:** una **PWA** con *service worker* y almacenamiento local también serviría (ver la corrección del apartado 3.3).

### Caso C: consultar rutas andando y ver la propia posición en el mapa
1. Puede funcionar tanto en el navegador como instalada.
2. Necesita conexión para calcular la ruta (salvo que se descarguen los mapas antes).
3. **Sí**: ubicación en tiempo real.
4. Cómo se ve el mapa en cada tamaño de pantalla y cuánta información se muestra a la vez mientras se camina.

**Propuesta:** se podría hacer como app web/PWA o como nativa/multiplataforma.

> ➕ **Ampliación:** el navegador permite pedir la ubicación con la API de geolocalización (`navigator.geolocation`, solo con HTTPS y con permiso del usuario), pero **seguir la posición con la pantalla apagada o en segundo plano** solo es fiable en una app nativa o multiplataforma.

### Conclusión

No hay una respuesta única: cada caso se puede resolver de varias maneras. Lo que decide el tipo de app son **las necesidades de la persona y el contexto de uso** (instalación, conexión, funciones del dispositivo y comodidad en pantalla pequeña), no la tecnología que más nos guste.

---

## Resumen rápido

- Ver algo en el móvil no indica cómo está hecho.
- Móvil frente a PC: táctil, contexto de uso, pantalla, conexión, potencia, batería y almacenamiento.
- Responsive no basta: hay que pensar en quién, dónde y cómo se usa.
- Web adaptable → app web → PWA → nativa → multiplataforma (Flutter, React Native).
- PWA ≠ nativa: web dentro del navegador frente a app del SO con acceso completo.
- Las 4 preguntas: ¿instalar?, ¿sin conexión?, ¿funciones del dispositivo?, ¿pantalla pequeña?

---
Temario 5.11.2026 (Expandir en detalle. Hay errores por la velocidad de escritura)

Para ver como construir una app necesitaremos saber que tareas resuleve, donde se usa y que funciones del disp necesita

Tecnologias necesarias para desaroolar en ios y android:

SI una emp quiere publicar su app tanto en and y ios que cosas tendria que decidir?

1 - ver que sistema querriamos cubrir 
2 - si se desarrollará una version especifica para cada uno o si compratiriamos parte del codigo.

"voy a ahcer la app en react natie" esta nombramndo una tech de desarrollo no todas las demas partes del proceso

Dividimos en 5 palabras:
Plataforma - lenguaje - framwork - sdk - id

plataforma -> Sistema para el que se crea o ejecuta la app -> Android o iOS Responde a: para que sistema?
lenguaje -> Forma de escribir las instrucciones del programa -> Kotlin, Swift, JS/TS, Dart Responde a: para que lenguaje?
framwork -> conjunto de herramientas y piezas que ayuda a construir la app -> React Native o Flutter Responde a: Que conjunto de piezas y reglas?
sdk -> herramientas y biblioteca que permiten crear y probar para una plataforma -> Android SDK o iosSDK Responde a: Que herramientas necesito para crear y probar?
ide -> Programa de ordenador donde se escribe organiza y depura el codigo -> Android stuido o xcode Responde a: En que programa programo?

una app nativa android puede escribirse en hotlin utilizar herrmaientas d enadroid, trabajarse en And Studio

Apple -> Swift, xcode
Android -> Android Studio y herramientas oficiales para crear

ya dijimos que una app nadtiva se desaroolo espeficiamente para x sistema op
encontes, tenemos que elegir una ruta nativa por la que desarorollar

Android -> Kotlin una opcion moderna y comumente usada para escribir, compilar probar y depurar
IOS -> Switf lenguaje habiutal y Xcode es el entorno de Apple para crear.

ventajas
integra directa con las funciones del sistema
uso de componenets y patrones
control detallado de el comportamiento

cons
para cubrir ambos, es necesario mantener dos implementaciones
los cambios se tendran que repetir en ambas

nativa != mejor para cualquier app. Siginifa que se trabaja de manera especifica para la plataforma

ruta multiplataforma:
**1 - React native**
    usa JS / TY y conceptos de react
    organizar en componentes como view y text
    no se escribe con html
    conecta sus componentes con elementos visuales de los os

    <div>hola</div>
    <view><text>hola</text></view>

**2 - Flutter**
    usa dart
    proporciona su propio conjunbto de herraminetas
    permite crear apps con codigo compartido entre plataformas
    uso de widgets

ventaja de multi, compartir codigo ahorra trabajo pero no garantiza que una app se comporte igual en todos los moiles. Hay que probarla en plataformas y anotar las diferencias.

Las palabras web, nativa y multi describen rutas distintas. React N y Flu son herramientas multi,. pero no funciiona ingual. Y una pWA sigue sineod una app web aunque pueda instalarse en ciertos dispositivos.

¿La aapp se podria resolver con una web/PWA?
¿Necesita funciones del disp?
¿Debe cubrir android, IOS o ambos?
¿El equipo ya conce react, kotlin, swift o dart?
¿Que habra que probar en cada plat?

Caso A:
Una asociacion publica eventos, horarios y ubicaciones y noticias. La mayoria de personas entra desde enlaces que recibe o desde un buscador. No se necesita camara ni trabajar sin conexion
- si
- no
- no, funciona en web
- no, pero podrian
- aspecto de la web, probar por si hay bugs en ambos. 

Caso B:
El alumnado guarda tareas, recibe avisos y quiere consultar sus notas deurante trayectos con conexion irregular. El centro desea que funcione en and y ios
- PWA(corregido proque antes teniamos app multi por lo que las respuestar siguientes estan basadas en si fuera una app multi)
- acceso a almacenamiento, internet, notificaciones
- ambas
- conocer lo basico
- el comportamiento en ambos os

Caso C:
La persona registra recorridos usando ubicacion, consulta el resultado despues y quiere que la app este disponible en and e ios
- no, por si acaso
- ubicacion y almacenamiento
- ambas
- conocer lo basico
- el comportamiento en ambos os

(pendiente de corregir)
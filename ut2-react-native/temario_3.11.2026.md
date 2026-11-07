# Del React web a la app móvil: qué cambia al diseñar para móvil

> Clases del 03/11/2026 (apartados 1-4) y del 05/11/2026 (apartados 5-7). Introducción al diseño antes de empezar a crear la app móvil (siguiente paso de la UT2: React Native con Expo).

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

## 5. Tecnologías para desarrollar en Android e iOS (05/11)

> Clase del 05/11/2026 (sesiones 1 y 2).

Para decidir cómo construir una app primero hay que saber **qué tareas resuelve, dónde se usa y qué funciones del dispositivo necesita** (las preguntas del apartado 4). Después viene la parte técnica. Si una empresa quiere publicar su app en Android y en iOS, tiene que decidir:

1. **Qué sistemas quiere cubrir**: solo Android, solo iOS o los dos.
2. **Si hará una versión específica para cada uno** (dos apps nativas) **o compartirá parte del código** (multiplataforma).

Decir «voy a hacer la app en React Native» solo nombra **una** de las piezas del proceso: falta decir para qué plataforma, con qué lenguaje, con qué SDK se compila y prueba, y en qué programa se escribe.

### 5.1 Las 5 palabras: plataforma, lenguaje, framework, SDK e IDE

| Palabra | Qué es | Ejemplos | Responde a… |
|---|---|---|---|
| **Plataforma** | Sistema para el que se crea y en el que se ejecuta la app | Android, iOS | ¿Para qué sistema? |
| **Lenguaje** | Forma de escribir las instrucciones del programa | Kotlin, Swift, JavaScript/TypeScript, Dart | ¿En qué lenguaje? |
| **Framework** | Conjunto de herramientas, piezas y reglas que ayuda a construir la app | React Native, Flutter | ¿Con qué piezas y reglas? |
| **SDK** (*Software Development Kit*) | Herramientas y bibliotecas para crear y probar apps para una plataforma (compilador, emulador, API del sistema) | Android SDK, iOS SDK | ¿Qué necesito para crear y probar? |
| **IDE** (*Integrated Development Environment*) | Programa donde se escribe, organiza y depura el código | Android Studio, Xcode (también VS Code) | ¿En qué programa programo? |

Ejemplo: una app nativa de Android puede escribirse en **Kotlin** (lenguaje), compilarse y probarse con el **Android SDK** y trabajarse en **Android Studio** (IDE), para la plataforma **Android**. Una app de React Native usaría **TypeScript** + el framework **React Native**, pero seguiría necesitando el Android SDK y el iOS SDK por debajo para generar cada versión.

> ➕ **Ampliación:** para compilar y publicar la versión de iOS hace falta **Xcode, que solo funciona en macOS**. Con Expo (lo que usaremos en clase) se puede probar en un iPhone real con la app **Expo Go** sin tener un Mac.

### 5.2 Ruta nativa

Una app nativa se desarrolla **específicamente para un sistema operativo**, así que hay que elegir una ruta por plataforma:

| Plataforma | Lenguaje habitual | IDE y herramientas |
|---|---|---|
| **Android** | **Kotlin** (moderno y el recomendado por Google; antes, Java) | Android Studio + Android SDK |
| **iOS** | **Swift** | Xcode + iOS SDK (entorno de Apple) |

| Ventajas | Inconvenientes |
|---|---|
| Integración directa con las funciones del sistema (cámara, GPS, notificaciones, segundo plano) | Para cubrir Android e iOS hay que **mantener dos implementaciones** |
| Usa los componentes y patrones propios de cada plataforma (la app «se siente» del sistema) | Cada cambio **se repite en las dos** (más tiempo y más coste) |
| Control detallado del comportamiento y del rendimiento | Hacen falta conocimientos de dos lenguajes y dos entornos |

> Nativa **no significa «mejor para cualquier app»**: significa que se trabaja de forma específica para una plataforma. Si la app no necesita nada especial del dispositivo, puede no compensar el doble trabajo.

### 5.3 Ruta multiplataforma

| | **React Native** | **Flutter** |
|---|---|---|
| Lenguaje | JavaScript / TypeScript | Dart |
| Idea | Conceptos de React (componentes, props, estado) | Todo son **widgets** |
| Interfaz | Sus componentes (`View`, `Text`…) se conectan con los **elementos visuales nativos** de cada SO | **Dibuja su propia interfaz** con su motor gráfico |
| Dónde lo vemos | Esta asignatura (con Expo) | Desarrollo de Interfaces |

En React Native **no se escribe HTML**: en lugar de etiquetas web se usan componentes propios.

```tsx
// React web (lo que hemos hecho con Vite)
<div>hola</div>

// React Native
<View><Text>hola</Text></View>
```

> ✏️ **Corrección:** en las notas puse `<view><text>`. Los componentes de React Native van **con mayúscula** (`View`, `Text`) y se importan de `react-native`, como cualquier componente propio (`Saludo.tsx`).

Compartir código **ahorra trabajo**, pero **no garantiza** que la app se comporte igual en todos los móviles: hay que **probarla en cada plataforma** y anotar las diferencias (permisos, teclado, gestos de «atrás», tamaños de pantalla…).

### 5.4 No mezclar los términos

- **Web, nativa y multiplataforma** describen **rutas distintas** de desarrollo.
- **React Native y Flutter** son herramientas multiplataforma, pero **no funcionan igual** (componentes nativos frente a dibujo propio).
- Una **PWA sigue siendo una app web**, aunque pueda instalarse en algunos dispositivos.

### 5.5 Actividad: elegir la ruta

Preguntas para cada caso:

1. ¿Se podría resolver con una web o una PWA?
2. ¿Necesita funciones del dispositivo?
3. ¿Debe cubrir Android, iOS o ambos?
4. ¿El equipo ya conoce React, Kotlin, Swift o Dart?
5. ¿Qué habrá que probar en cada plataforma?

> Las respuestas están **pendientes de corregir en clase**.

**Caso A:** *una asociación publica eventos, horarios, ubicaciones y noticias. La mayoría entra desde enlaces o desde un buscador. No necesita cámara ni funcionar sin conexión.*

1. **Sí**: basta con una web (adaptable).
2. No.
3. No hace falta elegir: una web funciona en los dos.
4. No es necesario, aunque podrían usarlo.
5. Que la web se vea y funcione bien en los navegadores de Android e iOS.

**Caso B:** *el alumnado guarda tareas, recibe avisos y consulta sus notas en trayectos con conexión irregular. El centro quiere que funcione en Android e iOS.*

1. **PWA** (en clase empezamos respondiendo «app multiplataforma» y lo cambiamos; las respuestas 2-5 valen para las dos opciones).
2. Almacenamiento local, conexión a internet y notificaciones.
3. Ambos.
4. Conocer lo básico de la tecnología elegida.
5. El comportamiento en los dos sistemas, sobre todo **sin conexión** y con los **avisos**.

> ➕ **Ampliación:** las notificaciones *push* de una PWA en iOS solo funcionan si se ha **instalado en la pantalla de inicio** (desde iOS 16.4). Es justo lo que habría que probar en cada plataforma; si los avisos son críticos, una app multiplataforma es la opción más segura.

**Caso C:** *la persona registra recorridos con la ubicación, consulta el resultado después y quiere la app en Android e iOS.*

1. Mejor que no (respondimos «no, por si acaso»).
2. Ubicación y almacenamiento.
3. Ambos.
4. Conocer lo básico.
5. El comportamiento en los dos sistemas.

> ➕ **Ampliación:** el «por si acaso» tiene un motivo concreto: el navegador puede pedir la ubicación, pero **registrar un recorrido con la pantalla apagada o la app en segundo plano** solo es fiable en nativa o multiplataforma (ver el caso C del apartado 4).

---

## 6. UI y UX

| | **UI** (*User Interface*, interfaz de usuario) | **UX** (*User Experience*, experiencia de usuario) |
|---|---|---|
| Qué es | Los elementos que la persona **ve y controla**: textos, botones, campos, iconos, colores | Cómo **vive** la persona el uso completo de la app: si entiende qué hacer, cuánto le cuesta, cómo se siente |
| Pregunta | ¿Qué ve el usuario? | ¿Cómo la usa y qué tal le va? |

No importa que una app sea preciosa (buena UI): **si nadie entiende para qué sirve o cómo se usa, el problema no está resuelto** (mala UX).

### 6.1 Pautas para la interacción táctil

En un móvil la interacción es táctil y la persona puede usarlo **con una mano, con prisa, en movimiento o con mucha luz**:

| # | Pauta | Por qué |
|---|---|---|
| 1 | Controles **cómodos de tocar** | Un botón diminuto o pegado a otro provoca errores |
| 2 | Dejar claro **qué se puede tocar** | Los botones deben parecer botones |
| 3 | Dar **respuesta después de cada acción** (*feedback*) | Si se pulsa algo, que se note: progreso, carga, confirmación o error |
| 4 | **No depender del puntero ni del `hover`** | En una pantalla táctil no hay ratón |
| 5 | **Pedir confirmación** en acciones importantes | Borrar o pagar por error tiene consecuencias |
| 6 | Acciones frecuentes **fáciles de encontrar** | Se usan con prisa y a menudo |

En una web con ratón, el cursor cambia al pasar por encima de lo que se puede pulsar; en el móvil no existe esa pista, así que hacen falta **etiquetas claras y descriptivas** en los botones.

> ➕ **Ampliación:** tamaños mínimos recomendados para zonas táctiles: **48 × 48 dp** en Android (Material Design) y **44 × 44 pt** en iOS (Apple). WCAG 2.2 fija como mínimo **24 × 24 px** (criterio 2.5.8).

### 6.2 Diseño adaptable

No existe un único móvil: cambian el **ancho y el alto** de la pantalla, la **orientación** y el **tamaño de texto** que elige cada persona. La interfaz tiene que seguir siendo útil en todas esas condiciones.

| Idea | Qué significa |
|---|---|
| **Diseño adaptable** (*responsive*) | La disposición se reorganiza sola según el espacio |
| **Priorizar el contenido** | Mostrar primero lo que ayuda a completar la tarea; evitar el relleno con elementos secundarios |
| **Orientación** | Que funcione en vertical y en horizontal |
| **Escalado de texto** | Que se pueda aumentar la letra desde los ajustes del dispositivo o de la app sin que se rompa la pantalla |

Ejemplo: una agenda escolar puede mostrar cada evento como una tarjeta completa en un teléfono estrecho y, en una pantalla más ancha, colocarlo junto a otros eventos. El contenido importante sigue accesible en las dos situaciones.

> **Adaptar no es hacer que todo quepa**, sino decidir **qué se muestra, dónde y cómo** en cada condición.

---

## 7. Accesibilidad

Diseñar la app para que la **comprendan y la usen personas con condiciones diferentes**. No es una función para un grupo pequeño: también ayuda a quien tiene una **lesión temporal**, usa el móvil **bajo el sol**, **no puede escuchar** un aviso o lo sostiene **con una sola mano**.

### 7.1 Los 5 principios vistos en clase

| Principio | Qué pide | Ejemplo |
|---|---|---|
| **Contraste suficiente** | Que textos y controles se distingan del fondo | Nada de gris claro sobre blanco |
| **No depender solo del color** | Añadir otra señal además del color | Pendiente/completada en rojo/verde + texto o icono |
| **Texto ampliable** | Que la app siga siendo útil con la letra aumentada | Sin textos cortados ni solapados |
| **Etiquetas comprensibles** | Que cada control tenga un nombre claro | Una lupa necesita el nombre «Buscar» para las tecnologías de asistencia |
| **Lectores de pantalla y navegación accesible** | Elementos con nombre y orden lógico | TalkBack (Android) y VoiceOver (iOS) leen la interfaz en ese orden |

### 7.2 Las pautas WCAG

Las **WCAG** (*Web Content Accessibility Guidelines*) son las pautas de accesibilidad del **W3C**. Aunque nacieron para la web, se aplican también a las apps móviles. Versión actual: **WCAG 2.2** (2023); la normativa europea sigue tomando como referencia la 2.1.

Se organizan en **4 principios** (siglas **POUR**):

| Principio | Significa | Relación con los 5 de clase |
|---|---|---|
| **Perceptible** | La información se puede percibir (ver u oír) | Contraste, no depender del color, texto ampliable |
| **Operable** | Los controles se pueden usar (táctil, teclado, sin límites de tiempo imposibles) | Zonas táctiles grandes, alternativas a los gestos |
| **Comprensible** | Se entiende la información y el funcionamiento | Etiquetas claras, mensajes de error útiles |
| **Robusto** | Funciona con distintas tecnologías, incluidas las de asistencia | Lectores de pantalla |

Cada criterio tiene un **nivel de conformidad**: **A** (mínimo), **AA** (el que se exige normalmente) y **AAA** (el más alto). Ejemplos de nivel AA: contraste de **4,5:1** en texto normal y **3:1** en texto grande; texto ampliable al **200 %** sin perder contenido.

**¿Es obligatorio?**

| Norma | A quién obliga |
|---|---|
| **Real Decreto 1112/2018** (España) | Webs y **apps móviles del sector público**: deben cumplir la norma **UNE-EN 301 549**, que equivale a **WCAG 2.1 nivel AA** |
| **Acta Europea de Accesibilidad** (Directiva (UE) 2019/882, en España **Ley 11/2023**) | Desde el **28/06/2025**, también a muchos **productos y servicios privados**: comercio electrónico, banca, transporte, libros electrónicos… (con excepciones para microempresas de servicios) |

> ➕ **Para el proyecto final:** Tenue ya se plantea con **WCAG 2.1 AA**; si sus clientes son ayuntamientos, es directamente obligatorio por el RD 1112/2018.

### 7.3 Actividad: 5 problemas de accesibilidad

*La pantalla principal tiene texto gris claro sobre fondo blanco; arriba hay un icono pequeño de tres líneas sin texto; los eventos tienen la letra pequeña y un punto rojo o verde (pendiente/completado) sin ninguna palabra; para borrar un evento hay que deslizarlo, sin botón ni explicación; al guardar un cambio no aparece nada.*

| Problema | Por qué es un problema | Solución |
|---|---|---|
| Texto gris claro sobre blanco | Poco contraste: no se lee al sol ni con baja visión | Cambiar el color del texto, del fondo o ambos hasta cumplir 4,5:1 |
| Icono de tres líneas sin texto | No se sabe qué hace y el lector de pantalla no tiene qué leer | Añadir el texto «Menú» visible o, al menos, como etiqueta accesible en el código (`accessibilityLabel` en React Native, `Semantics`/`tooltip` en Flutter) |
| Letra pequeña | Difícil de leer | Tamaño base mayor y respetar el escalado de texto del sistema |
| Punto rojo/verde sin palabras | Depende solo del color (daltonismo, lectores de pantalla) | Añadir texto («Pendiente»/«Completado») o un icono distinto |
| Deslizar para borrar, sin alternativa | Gesto oculto y no apto para todos | Botón visible de borrar + **confirmación** con opción de cancelar (o «Deshacer») |
| Sin respuesta al guardar | No hay *feedback*: ¿se ha guardado? | Mostrar confirmación, progreso o error (p. ej. un `SnackBar`, como en la tienda de Interfaces) |

> ✏️ **Corrección:** el enunciado describe **seis** problemas aunque pedía cinco: la **letra pequeña** también lo es (falló «texto ampliable»).

### Conclusión

Diseñar para móvil significa **ayudar a la persona a completar su tarea en una pantalla táctil y en contextos distintos**: elegir bien la ruta técnica, cuidar la UX y hacer la app accesible.

---

## Resumen rápido

- Ver algo en el móvil no indica cómo está hecho.
- Móvil frente a PC: táctil, contexto de uso, pantalla, conexión, potencia, batería y almacenamiento.
- Responsive no basta: hay que pensar en quién, dónde y cómo se usa.
- Web adaptable → app web → PWA → nativa → multiplataforma (Flutter, React Native).
- PWA ≠ nativa: web dentro del navegador frente a app del SO con acceso completo.
- Las 4 preguntas: ¿instalar?, ¿sin conexión?, ¿funciones del dispositivo?, ¿pantalla pequeña?
- Las 5 palabras: plataforma, lenguaje, framework, SDK, IDE.
- Nativa (Kotlin + Android Studio / Swift + Xcode): control total, pero dos apps que mantener.
- Multiplataforma: React Native (TS, componentes nativos, `View`/`Text`) o Flutter (Dart, widgets propios); hay que probar en cada SO.
- UI = lo que se ve; UX = cómo se vive el uso. Táctil: zonas grandes, feedback, sin `hover`, confirmar lo importante.
- Adaptar = decidir qué se muestra, dónde y cómo (orientación, escalado de texto).
- Accesibilidad: contraste, no solo color, texto ampliable, etiquetas, lectores de pantalla. WCAG (POUR, niveles A/AA/AAA); obligatoria en el sector público (RD 1112/2018) y en muchos servicios privados desde 2025 (Ley 11/2023).

Pequeña intro para diseño antes de empezar a crear la app movil. (Expandir en estos contenidos)
---

***React hasta ahora, que cambia cunado la app se usa en movil?*** 

Hay requisitos diferentes para cada entorno. 

app es programa que se usa en un telefono/tablet. En desarrollo conviene diferenciar donde y como se ejecuta e instala se abre y demas

Que significa desarrolar para movil. App movil -> Software para desaroollar tareas en movil y tablets.

Dispositiov movil -> Movil/tabler trasportable
App movil -> programa que realiza 1 o varias tareas
SO -> Software principal que ejecuta apps y gestiona recursos. Android , IOS
Proceso de desarrollo movil -> diseñar de crear probar y mantener que se usa en dispositivos moviles. 

si una web se ve en telefono, ya sabemos que esta hecha con una app navitva? No tiene porque ser nativa. El aspecto en pantalla no revela solo como se ha hecho.

***Que cambia a un pc?***

Tactil vs perifericos
Portable o no portable y como y donde se usa -> Contexto de uso
Recursos y conexion
Eficiencia/potencia
Bateria
Almacenamiento

Por eso no basta con que se haga la paginas responsivas, sino que hay pensar en que hara la persna, donde la usara como y en que dispositivo

En app de mapas la ubicacion es util, en calculadora no. Una pantalla de compra deberia de permitir pulsar los botones con el dedo comodamente. Una app que se usa en un ligar con poca cobertura deberia explicar que ocurre si no puedo conectarme.
Tener en cuenta la accesibilidad. EL use debe de saber todo el rato que ocurre en su app.

***App moviles***

web adaptable -> direccion en navegador -> sitio que se ajuste a pantallas
app web -> usa funciones interactivas desde navegardo -> sigue siendo web pero no tiene que instalarse
pwa -> usa una web que puede ofrecer funciones parecidad a una app instaladas .> Combina tecnologia web con algunas capacidades de instalacion e integracion
nativa -> Instala y abre una app creada para un sistema operativo movil -> Se contryuye para una plataforma como android o ios
Multiplataforma -> insala una app disponible en mas de un sistema operativo -> Puedo compartir parte del codigo entre plataformas (futter/react native)

web adaptable:
sitio web cuyo diseño se reorganiza para ver en diferentes pantallas. No necesariamente instala nada. Adaptable significa como responde a diferentes tamaños y no a tecnologias usadas

app web:
aplicacion que se utiliza desde el navegador y permite hacer tareas no solo leer info
puede ser muy interactiva y seguir siendo de navegador

pwa:
app construida con tech web que proporciona experiencias similares a apps. segun el nav y el so, puede instalarse y usar algunas capacidades adicionales. No todas las web son pwa y las pwa necesitan conexion. La doc **MDN** explica estas posibilidades y sus requisitos

nativa:
app desarrollada especificamente par aun disp movil usando sus caracteristicas para sacar el mayor potencial al dispositivo. Facilita el acceso a funciones del sisema auneuq hay que considerar por separados android e ios

multiplataforma:
son apps para funcionar en mas de un disp movil compartiendo una misma parte del desarrollo. Varias herramientas comunes y otras funciones dependen de componentes web

Son lo mismo una pwa y una nativa?¿
Respuesta: (responder)

---
***Preguntas y casos:***

**¿Necesita instalar la app o podria abirrla desde un navegador?**

**¿Tiene que funcionar sin conexion?**

**¿Necesita una funcion del dispositivo, como ubicacion o camara?**

**¿Que podria resultar incomodo al usarla en una pantalla pequeña?**

caso A (Persona quiere consultar horarios, direcione y telefono. Entra pocas veces y puede llegar a la info desde un buscador): No necesita app. Depende de si tenemos la info que base local o web. Necesitaria la ubicacion. Depenede si tiene mapa organizado, mucha infor a la vez, etc. APP WEB

caso B (Persona apunta tareas y quiere revisarlas aunque esté sin conexion durante un trayecto): O nativa o multiplataforma. Si necesita que funcione SIN conexion. No haria falta ninguna funcionalidad. Como este organizada la pantalla para dicha pantalla. 

caso C (Persona consulta rutas mientras camina y le gustaria ver su posicion en el mapa): Si necesita funcion de ubicacion en tiempo real. NEceistaria conexion para calcular la ruta. Se poidria hacer tanto en navegaro como en app nativa o multiplataforma. Como funcione el mapa en cada respectivo tamaño, la infor que muestra. 

No se puede imponer ninunga respuesta definitiva ya que todos los casos pueden ser gestionador de varias maneras.
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
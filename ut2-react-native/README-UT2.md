Paso 1:
AlejandroDonate@debian-des:~/Escritorio/Programacion-multimedia-y-dispositivos-moviles-2026---2027/ut2-react-native$ npm create vite@latest mi-primera-app --template react-ts
Need to install the following packages:
create-vite@9.2.1
Ok to proceed? (y) y


> npx
> create-vite mi-primera-app react-ts

│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript
│
◇  Which linter to use?
│  ESLint
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in /home/AlejandroDonate/Escritorio/Programacion-multimedia-y-dispositivos-moviles-2026---2027/ut2-react-native/mi-primera-app...
│
◇  Installing dependencies with npm...

added 160 packages, and audited 161 packages in 26s

42 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...

> mi-primera-app@0.0.0 dev
> vite


  VITE v8.3.4  ready in 259 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

**linter -> libreria que dice si el codigo est bien o mal**

Paso 2:
AlejandroDonate@debian-des:~/Escritorio/Programacion-multimedia-y-dispositivos-moviles-2026---2027/ut2-react-native$ cd mi-primera-app/

esquema de como trabajar react con typescript
index.html -> main.tsx -> App.tsx -> navegador

AlejandroDonate@debian-des:~/Escritorio/Programacion-multimedia-y-dispositivos-moviles-2026---2027/ut2-react-native/mi-primera-app$ ^C
AlejandroDonate@debian-des:~/Escritorio/Programacion-multimedia-y-dispositivos-moviles-2026---2027/ut2-react-native/mi-primera-app$ npm run dev

> mi-primera-app@0.0.0 dev
> vite


  VITE v8.3.4  ready in 188 ms

borrado de app.tsx para empezar desde cero

export default App // Esto hace que podamos exportarlo y llamarlo en main.tsx
import './App.css'

function App() {
  const nombre = "Alejandro";
  const edad = "23";
  function saludar() {
    alert("¡Hola, " + nombre + "!")
  }
  return (
    <main>
      <h1>Bienvenida, {nombre}</h1>
      <p> Tienes: {edad} años</p>
      <button onClick={saludar}>Saludar</button>
    </main>
  )
}

export default App


nueva carpeta components
nuvo Saludo, siempre van con la primera en mayuscula

borre el main escueto de prueba e importé la clase desde saludo.tsx

components/Saludo.tsx

type SaludoProps = {
    nombre: string;
}
export default function Saludo({nombre}: SaludoProps) {
    return (
        <h2>¡Hola, {nombre}!</h2>
    )
}

app.tsx

import './App.css'
import Saludo from './components/Saludo';

function App() {  // Esta ahora mismo no se usa
  const nombre = "Alejandro";
  const edad = "23";
  function saludar() {
    alert("¡Hola, " + nombre + "!")
  }
  return (
    <main>
      <h1>Bienvenida, {nombre}</h1>
      <Saludo nombre="Jorge"/>
      <Saludo nombre="Atteneri"/>
      <Saludo nombre="Ivan"/>
      <Saludo nombre="Alejandro"/>
    </main>
  )
}

export default App

useState

antes:

import './App.css'
import Saludo from './components/Saludo';

function App() {
  let contador = 0
  function incrementar() {
    contador++
  }
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Contador</button>
    </div>
  )
}

export default App

despues:

import './App.css'
import { useState } from 'react';
import Saludo from './components/Saludo';

function App() {
  const[contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Contador</button>
    </div>
  )
}

export default App

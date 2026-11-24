import { useState } from 'react';

export function useCalculadora() {
  // Se extraen porque la vista no necesita saber CÓMO se guardan o actualizan los datos,
  // solo necesita leer su valor final para mostrarlo en pantalla.
  const [pantalla, setPantalla] = useState('0');
  const [primerNumero, setPrimerNumero] = useState<number | null>(null);
  const [operacion, setOperacion] = useState<string | null>(null);

  // Se sacan del componente visual para que la pantalla no tenga que contener
  // condicionales (if/else) ni operaciones matemáticas.
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
      case '+':
        resultado = primerNumero + segundoNumero;
        break;
      case '-':
        resultado = primerNumero - segundoNumero;
        break;
      case '×':
        resultado = primerNumero * segundoNumero;
        break;
      case '÷':
        resultado = primerNumero / segundoNumero;
        break;
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

  // Exponemos únicamente lo que la pantalla necesita leer o ejecutar.
  // Fíjate que NO devolvemos los "setters" (setPantalla, setOperacion, etc.)
  // para evitar que la vista modifique los datos saltándose las reglas de arriba.
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

import { Stack } from 'expo-router';

//* -------------------------- *//
//? Configuracion del navegador Stack para la practica 20
export default function LayoutP20() {
    return (
        <Stack>
            {/* Pantalla principal de esta carpeta */}
            <Stack.Screen name="index" options={{ title: 'Inicio P20' }} />

            {/* Segunda pantalla que se abrira encima */}
            <Stack.Screen name="detalle" options={{ title: 'Detalle' }} />
        </Stack>
    );
}
//* -------------------------- *//

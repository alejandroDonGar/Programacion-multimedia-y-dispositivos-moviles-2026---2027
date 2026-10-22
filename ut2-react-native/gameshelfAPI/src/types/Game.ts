// Clase donde creamos la estructura individualmente del objeto que vamos a importar

export type Game = {
    id: number;
    name: string;
    genre?: string;
    releaseDates: {
        Japon?: string;
        NorthAmerica?: string;
        Europe?: string;
        Australia?: string;
    };
};
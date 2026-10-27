export type Game = {
    id: number;
    name: string;
    genre?: string[];
    releaseDates: {
        Japan?: string;
        NorthAmerica?: string;
        Europe?: string;
        Australia?: string;
    };
};
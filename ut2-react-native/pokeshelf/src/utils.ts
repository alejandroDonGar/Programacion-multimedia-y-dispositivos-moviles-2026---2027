export const formatearId = (id: number) => String(id).padStart(3, "0");

export const nombresStats: Record<string, string> = {
    "hp": "PS",
    "attack": "Ataque",
    "defense": "Defensa",
    "special-attack": "Ataque Especial",
    "special-defense": "Defensa Especial",
    "speed": "Velocidad",
};
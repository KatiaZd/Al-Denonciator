export type Genre = "Femme" | "Homme";

export interface Guys {
    id: number;
    name: string;
    description: string;
    genre: Genre;

}

export const GUYS: Guys[] = [
    { 
        id: 1, 
        name: 'Mariam', 
        description: "Tu es la grande gagnante !",
        genre: 'Femme' 
    },

    { 
        id: 2, 
        name: 'Patrick', 
        description: "Tu es le grand gagnant !",
        genre: 'Homme' 
    },

    { 
        id: 3, 
        name: 'Yassir', 
        description: "Tu es le grand gagnant !",
        genre: 'Homme' 
    },

    { 
        id: 4, 
        name: 'Monia', 
        description: "Tu es la grande gagnante !",
        genre: 'Femme' 
    },

    { 
        id: 5, 
        name: 'Camille', 
        description: "Tu es la grande gagnante !",
        genre: 'Femme' 
    },
];
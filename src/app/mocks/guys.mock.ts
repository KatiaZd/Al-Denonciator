export type Genre = "Femme" | "Homme";

export interface Guys {
    id: number;
    name: string;
    genre: Genre;

}

export const GUYSLIST: Guys[] = [
    { 
        id: 1, 
        name: 'Mariam', 
        genre: 'Femme' 
    },

    { 
        id: 2, 
        name: 'Patrick', 
        genre: 'Homme' 
    },

    { 
        id: 3, 
        name: 'Yassir', 
        genre: 'Homme' 
    },

    { 
        id: 4, 
        name: 'Monia', 
        genre: 'Femme' 
    },

    { 
        id: 5, 
        name: 'Camille', 
        genre: 'Femme' 
    },
];
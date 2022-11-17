import { Recette } from "./recette";

export interface Objet {
    id :number,
    nom :string, 
    recettes :Recette[],
    img :string,
}

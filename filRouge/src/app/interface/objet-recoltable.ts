export interface ObjetRecoltable {
    idObjetRecoltable: number;
    nom: string;
    niveauRequis: number;
    pv: number;
    cooldown: number;
    disparitionTime: number;
    index?: number;
}

import { Ingredient } from "../share/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imgSrc: string;
    public ingredients:Ingredient[];

    constructor(name:string, desc: string, src:string, ingredients:Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imgSrc = src;
        this.ingredients = ingredients;
    }
}
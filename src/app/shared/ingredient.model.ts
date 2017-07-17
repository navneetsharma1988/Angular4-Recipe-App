export class Ingredient {
    /* public name: string;
     public amount: number;

     constructor(name: string, amount: number) {
     this.name = name;
     this.amount = amount;
     }*/

    // Typescript provide shortcut to above as below

    constructor(public name: string, public amount: number) {
    }
}
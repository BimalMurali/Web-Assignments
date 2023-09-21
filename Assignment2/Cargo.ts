import { payload } from "./payload.js";

class Cargo implements payload{
    massKg : number;
    material:string;
    constructor(massKg : number,material : string){

        this.massKg=massKg;
        this.material=material;
    }

}
export{Cargo}
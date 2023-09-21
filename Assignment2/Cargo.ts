import { Ipayload } from "./Ipayload.js";

class Cargo implements Ipayload{
    massKg : number;
    material:string;
    constructor(massKg : number,material : string){

        this.massKg=massKg;
        this.material=material;
    }

}
export{Cargo}
import { Ipayload } from "./Ipayload.js";

class Astronaut implements Ipayload{
    massKg : number;
    name:string;
    constructor(massKg : number,name:string){

        this.massKg=massKg;
        this.name=name;
    }

}
export{Astronaut}
import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";
import { Ipayload } from "./Ipayload.js";

class Rocket{
    name: string;
    totalCapacityKg:number;
    cargoItems:Cargo[]=[];
    astronauts:Astronaut[]=[];
    constructor(name : string ,totalCapacityKg : number,){
        this.name=name;
        this.totalCapacityKg=totalCapacityKg;

    }

    sumMass(items:Ipayload[]):number{
        var sum=0;
        for(var i in items){
            sum=sum+items[i].massKg;
        }
        return sum;

    }
    currentMassKg(): number{
        var sum=this.sumMass(this.astronauts)+this.sumMass(this.cargoItems);
        return sum;
    }

    canAdd(item:Ipayload): boolean{
        if((this.currentMassKg()+item.massKg)<=this.totalCapacityKg){
            return true;
        }

    }
    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        else{
            return false;
        }

        }
  
    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        else{
            return false;
        }

        }
    }
export{Rocket}
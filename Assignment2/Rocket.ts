import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";
import { payload } from "./payload.js";

class Rocket{
    name: string;
    totalCapacityKg:number;
    cargoItems:Cargo[]=[];
    astronauts:Astronaut[]=[];
    constructor(name : string ,totalCapacityKg : number,){
        this.name=name;
        this.totalCapacityKg=totalCapacityKg;

    }

    sumMass(items:payload[]):number{
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

    canAdd(item:payload): boolean{
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
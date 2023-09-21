import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";
import { Rocket } from "./Rocket.js";

const a1=new Astronaut(70,'Rakesh sharma',);
const a2=new Astronaut(50,'Neil Armstrong');
// console.log(a1.name);

const cargo1=new Cargo(3000,'Food');
const cargo2=new Cargo(1000,'Equipment');

const rocket=new Rocket('Mangalayan',50000);
console.log(rocket.addAstronaut(a1));
console.log(rocket.addAstronaut(a2));
console.log(rocket.addCargo(cargo1));
console.log(rocket.addCargo(cargo2));
console.log(rocket.currentMassKg());

 



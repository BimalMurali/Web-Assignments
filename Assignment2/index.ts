import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";
import { Rocket } from "./Rocket.js";
var name1=prompt("Enter the name of first astronaut: ");
var weight1=prompt("Enter the weight of firt astronaut");
var name2=prompt("Enter the name of second astronaut: ");
var weight2=prompt("Enter the weight of second astronaut");

const a1=new Astronaut(parseInt(weight1,10),name1);
const a2=new Astronaut(parseInt(weight2,10),name2);
// console.log(a1.name);

const cargo1=new Cargo(3000,'Food');
const cargo2=new Cargo(1000,'Equipment');

const rocket=new Rocket('Mangalayan',50000);
rocket.addAstronaut(a1);
rocket.addAstronaut(a2);
rocket.addCargo(cargo1);
rocket.addCargo(cargo2);
console.log(rocket.currentMassKg());
console.log(a1.name);
console.log(a1.massKg);
console.log(a2.name);
console.log(a2.massKg);


 



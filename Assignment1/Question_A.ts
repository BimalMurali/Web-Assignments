//functon for storing number digits in an array and print it
function PrintDigits(num : number){
    let arr:number[]=[];
while(num>0){
    let rem=num%10;
    arr.push(rem);
    num=Math.floor(num/10);
}
console.log(arr.reverse());
}

PrintDigits(3543);

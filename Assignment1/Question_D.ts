function captitalFirstLetter(input:string):string{
    return input.charAt(0).toUpperCase() + input.slice(1);
}

const originalString = "hello world";
const capitalizedString = captitalFirstLetter(originalString);

console.log(capitalizedString);
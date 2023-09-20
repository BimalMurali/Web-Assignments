
    let userInput = prompt("Please enter the month(1-12):");
    let season;
    let seasonColor;
    switch (userInput) {
        case "1":
        case "2":
        case "3":
            season="Spring";
            seasonColor="green";
            break;
        case "4":
        case "5":
        case "6":
            season="Summer";
            seasonColor="red";
            break;
        case "7":
        case "8":
        case "9":12
            season="Autumn";
            seasonColor="yellow";
            break;
        case "10":
        case "11":
        case "12":
            season="Winter";
            seasonColor="blue";
            break;
        default:
            document.write("Invalid option!!!")
              
}

document.write(season);
document.body.style.backgroundColor=seasonColor;


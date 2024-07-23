//switch 

/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

const month = "Mar"

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;

    default:
        console.log("Anything");
        break;
}

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "Mar":
        console.log("March");
        break;

    default:
        console.log("Anything");
        break;
}

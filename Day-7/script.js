function onButtonPress(){
    const currValue = document.getElementById("btn").innerHTML;

    const currCounter = currValue.split(" ")[1];
    const newCounter = parseInt(currCounter) + 1;
    document.getElementById("btn").innerHTML = "Counter "+ newCounter;
}
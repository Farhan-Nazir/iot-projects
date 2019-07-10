function moveStepper(steps){
    let y = 0;
    while (y <= 100) {
        y += steps;
        
        console.log("Motor starts ");
        console.log(y);
    }

    console.log(y);
}

moveStepper(20);
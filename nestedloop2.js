let expectedNumber =  5;
do {   
    let randomNumber = Math.floor(Math.random() * 11);
    console.log(randomNumber);

    if(randomNumber == expectedNumber) {
        break;   
    }
} while(true) 

let sports: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let i = 0; i < sports.length; i++){
    console.log(sports[i]);
}

for(let temp of sports){
    console.log(temp);
}

for(let temp of sports){
    if(temp == "Cricket"){
        console.log(temp + " << My Fovorite!");
    } else{
        console.log(temp);
    }
}

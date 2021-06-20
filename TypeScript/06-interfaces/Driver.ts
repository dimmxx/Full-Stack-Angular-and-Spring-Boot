import {Coach} from "./Coach";
import {CricketCoach} from "./CricketCoach";
import {GolfCoach} from "./GolfCoach";

let cricketCoach = new CricketCoach();
let golfCoach = new GolfCoach();

let array:Coach[] = [];

array.push(cricketCoach);
array.push(golfCoach);

for(let temp of array){
    console.log("___________________________________");
    console.log(temp.getDailyWorkout());
    console.log();
}


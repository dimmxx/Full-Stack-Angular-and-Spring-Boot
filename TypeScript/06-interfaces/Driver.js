"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var cricketCoach = new CricketCoach_1.CricketCoach();
var golfCoach = new GolfCoach_1.GolfCoach();
var array = [];
array.push(cricketCoach);
array.push(golfCoach);
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var temp = array_1[_i];
    console.log("___________________________________");
    console.log(temp.getDailyWorkout());
    console.log();
}

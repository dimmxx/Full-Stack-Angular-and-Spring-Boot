var sports = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var temp = sports_1[_i];
    console.log(temp);
}
for (var _a = 0, sports_2 = sports; _a < sports_2.length; _a++) {
    var temp = sports_2[_a];
    if (temp == "Cricket") {
        console.log(temp + " << My Fovorite!");
    }
    else {
        console.log(temp);
    }
}

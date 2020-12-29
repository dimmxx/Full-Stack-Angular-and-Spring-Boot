for (var i = 0; i < 10; i++) {
    console.log(i);
}
var total = 0;
var reviews = [5, 5, 4.5, 1, 3];
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("Average: " + total / reviews.length);

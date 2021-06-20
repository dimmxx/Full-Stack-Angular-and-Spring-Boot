var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("John", "Peterson");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
var Buyer = /** @class */ (function () {
    function Buyer() {
    }
    return Buyer;
}());
var myBuyer = new Buyer();
myBuyer.firstName = "Martin";
myBuyer.lastName = "Dixon";
console.log(myBuyer.firstName);
console.log(myBuyer.lastName);

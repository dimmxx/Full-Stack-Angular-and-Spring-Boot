class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("John", "Peterson");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);


class Buyer {
    firstName: string;
    lastName: string;
}

let myBuyer = new Buyer();
myBuyer.firstName = "Martin";
myBuyer.lastName = "Dixon";
console.log(myBuyer.firstName);
console.log(myBuyer.lastName);

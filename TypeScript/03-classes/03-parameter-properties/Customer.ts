class Customer {

    constructor(private _firstName: string, private _lastName: string) {
    }

    public get firstName(){
        return this._firstName;
    }
    public set firstName(value: string){
        this._firstName = value;
    }
    public get lastName(){
        return this._lastName;
    }
    public set lastName(value: string){
        this._lastName = value;
    }
}

let myCustomer = new Customer("John", "Peterson");

myCustomer.firstName = "Susan";
myCustomer.lastName = "Martin";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
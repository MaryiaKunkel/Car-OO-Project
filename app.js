// PART ONE

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        console.log('Beep.');
        return 'Beep.';
    }
    toString() {
        const { make, model, year } = this;
        console.log(`The vehicle is a ${make} ${model} from ${year}.`);
        return `The vehicle is a ${make} ${model} from ${year}.`;
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."

/// PART TWO

class Car extends Vehicle{
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
        console.log(this.numWheels);
    }    
}


let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4

///PART THREE

class Motorcycle extends Vehicle{
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
        console.log(this.numWheels);
    }
    revEngine() {
        console.log('VROOM!!!');
        return 'VROOM!!!';
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2

/// PART FOUR

class Garage {
    constructor(vehicles,capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            console.log('Only vehicles are allowed in here!');
            return 'Only vehicles are allowed in here!';
        };
        if (this.vehicles.length >= this.capacity) {
            console.log("Sorry, we're full.");
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        console.log('Vehicle addad!');
        return 'Vehicle addad!';
    }
}

let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."
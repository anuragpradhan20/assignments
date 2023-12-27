/*
Assignment 1: Array Operations
1. Create an empty array called "fruits".
2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".
3. Remove the first fruit from the array.
4. Add "grape" to the end of the array.
5. Update the second fruit in the array to "pear".
6. Print the final "fruits" array after performing the above operations.
*/

let fruits = [];
fruits = ["apple", "banana", "orange"];
fruits.shift();
fruits.push("grape");
fruits[2] = "pear";
console.log(fruits);

/*Assignment 2: Object Operations
1. Create an empty object called "person".
2. Add the following properties to the "person" object:
    - name: "John"
    - age: 30
    - city: "New York"
3. Remove the "age" property from the "person" object.
4. Add a new property called "job" with the value "Engineer" to the "person" object.
5. Update the "city" property of the "person" object to "San Francisco".
6. Print the final "person" object after performing the above operations.
*/

let person = {};
person = {

    name: "john",
    age: 30,
    city: "New Work"
}

delete person.age;
person.job = "Enginner";
person.city = "San Francisco";
console.log(person);


/*Assignment 3: Array of Objects Operations
1. Create an empty array called "cars".
2. Add three car objects to the "cars" array. Each car object should have the following properties:
   - make: "Toyota"
   - model: "Camry"
   - year: 2018
3. Remove the first car object from the "cars" array.
4. Add a new car object to the "cars" array with the following properties:
   - make: "Honda"
   - model: "Civic"
   - year: 2020
5. Update the "model" property of the second car object in the array to "Accord".
6. Print the final "cars" array after performing the above operations.
*/

let cars = [];
cars = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2018
    },
    {
        make: "Tata",
        model: "punch",
        year: 2021
    },
    {
        make: "Maruti Suzuki",
        model: "Brezza",
        year: 2016
    }

];
 
cars.shift();
cars.push({make: "Honda",
model: "Civic",
year: 2020});
cars[2].model="Accord";
console.log(cars);
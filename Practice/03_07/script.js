/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

 const bed = {
    room: "Anshul",
    bedsheet:{
        size: 10,
        color: "Purple"
    },
    color:"brown",
    pillow: 2,
    blanket : {
        color:"white",
        size: "middle size",
        design: "leaves"
    }
 };

 console.log("The bed object", bed);
 console.log(bed.bedsheet.size)
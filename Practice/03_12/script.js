/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Anshul {
  constructor(
    age,
    fname,
    sname,
    currentedu,
    gender,
    bank,
    socials,
    friends,
    family,
    address,
    phone,
    goal
  ) {
    this.fname = fname;
    this.sname = sname;
    this.age = age;
    this.currentedu = currentedu;
    this.gender = gender;
    this.bank = bank;
    this.socials = socials;
    this.friends = friends;
    this.family = family;
    this.address = address;
    this.phone = phone;
    this.goal = goal;
  }
  phoneupdate(fone) {
    this.phone = fone;
  }
}

console.log(Anshul);

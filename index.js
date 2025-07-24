"use strict";

//1. Create a base class Person
class Person {
  constructor(fullName, age, homeTown) {
    this.fullName = fullName;
    this.age = age;
    this.homeTown = homeTown;
  }
  introduction() {
    console.log(
      `I'm ${this.fullName} and I'm ${this.age} from ${this.homeTown}`
    );
  }
}

const Introduce = new Person("Gloria Kusoro", 22, "Ogun State");
Introduce.introduction();

//2. Create a class Student that inherits from Person

class Student extends Person {
  constructor(fullName, age, homeTown, school) {
    super(fullName, age, homeTown);
    this.school = school;
  }
  student() {
    console.log(`${this.fullName} is a student of ${this.school}`);
  }
}

const higherInstitution = new Student(
  "Oyenuga Samuel",
  23,
  "Osun State",
  "FUTA"
);
higherInstitution.student();

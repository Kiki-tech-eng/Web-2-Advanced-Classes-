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

const introduce = new Person("Gloria Kusoro", 22, "Ogun State");
introduce.introduction();

//2. Create a class Student that inherits from Person

class Student extends Person {
  constructor(fullName, age, homeTown, school) {
    super(fullName, age, homeTown);
    this.school = school;
  }
  student() {
    console.log(
      `${this.fullName} who is ${this.age} and hails from ${this.homeTown} is a student of ${this.school}`
    );
  }
}

const higherInstitution = new Student(
  "Oyenuga Samuel",
  23,
  "Osun State",
  "FUTA"
);
higherInstitution.student();

//3. Create a class Teacher that inherits from Person

class Teacher extends Person {
  constructor(fullName, age, homeTown, subject) {
    super(fullName, age, homeTown);
    this.subject = subject;
  }
  teacher() {
    console.log(
      `Mr ${this.fullName} who is ${this.age} old, and comes from ${this.homeTown} will be aking us ${this.subject} this term`
    );
  }
}

const newTerm = new Teacher(
  "Olarenwaju John",
  47,
  "Imo State",
  "Literature-In-English"
);

newTerm.teacher();

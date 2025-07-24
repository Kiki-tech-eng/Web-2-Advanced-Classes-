"use strict";

// Create a base class Person
class person {
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

const Introduce = new person("Gloria Kusoro", 22, "Ogun State");
Introduce.introduction();

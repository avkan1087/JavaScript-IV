// CODE here for your Lambda Classes

class person {
  constructor(att){
    this.name = att.name,
    this.age = att.age,
    this.location = att.location
  }
  speak(){
    return `Hello my name is ${this.name},I am from ${this.location}. `;

  }
}


class instractor extends person {
  constructor(att){
    super(att);
    this.specialty = att.specialty,
    this.favLanguage = att.favLanguage,
    this.catchPhrase =att.catchPhrase
  }
  demo(subject){
    return `Today we are learning about ${subject}`;
  }
  grade(student , subject){
    return `${student} receives a perfect score on ${subject}`;
  }

}

class student extends person {
  constructor(att){
    super(att);
    this.previousBackground = att.previousBackground,
    this.className = att.className,
    this.favSubjects = att.favSubjects

  }
  listsSubjects(){
    return `${this.favSubjects}`;
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject} `;
  }
  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class pm extends instractor{
  constructor(att){
    super(att);
    this.gradClassName = att.gradClassName,
    this.favInstructor = att.favInstructor
  }
  standUp(channel){
    return `${this.name} announces to ${channel}, @channel standy times!`;

  }
  debugsCode(subject){
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const newPerson = new person ({
  name: 'john',
  age: '22',
  location: 'New-york',
})

const newInstractor = new instractor ({
  name: 'Sarit',
  age: '30',
  location: 'San-francisco',
  specialty: 'REDUX',
  favLanguage: 'JaveScript',
  catchPhrase: " Don't forget the homies ",
})

const newStudent = new student ({
  name: 'Avi',
  age: '32',
  location: 'Miami',
  previousBackground: 'Resturant owner',
  className: 'WEB25',
  favSubjects: 'HTML , CSS , javaScript ',
})

const newPm = new pm ({
  name: 'yossi',
  age: '28',
  location: 'Boston',
  specialty: 'node',
  favLanguage: 'CSS',
  catchPhrase: " you can do it ",
  gradClassName: 'CS1',
  favInstructor: 'Sarit',
})



console.log(newPerson.speak());
console.log(newInstractor.demo("Html"));
console.log(newInstractor.grade("Avi","CSS"));
console.log(newStudent.listsSubjects());
console.log(newStudent.PRAssignment("HTML"));
console.log(newStudent.sprintChallenge("CSS"));
console.log(newPm.standUp("WEB25"));
console.log(newPm.debugsCode("Html"));

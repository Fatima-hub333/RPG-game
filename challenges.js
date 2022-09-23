const animalForRelease1 = {
  name: 'Tilly',
  species: 'tiger',
  weightKg: 56,
  age: 2,
  dateOfRelease: '03-02-2022'
}
const animalForRelease2 = {
  name: 'Nelly',
  species: 'elephant',
  weightKg: 320,
  age: 16,
  dateOfRelease: '03-02-2022'
}

function Animal(data) {
  this.name = data.name
  this.species = data.species
  this.weightKg = data.weightKg
  this.age = data.age
  this.dateOfRelease = data.dateOfRelease
  this.summariseAnimal = function () {
    console.log(`${this.name} is a ${this.age} year old ${this.species} which weighs ${this.weightKg}kg and was released into the wild on ${this.dateOfRelease}`)
  }
}

// ======================

const tillytheTiger = new Animal(animalForRelease1)
const nellytheElephant = new Animal(animalForRelease2)

tillytheTiger.summariseAnimal()
nellytheElephant.summariseAnimal()

const hotel1 = {
	name: 'Safari View',
	rooms: 30,
	stars: '⭐⭐⭐⭐⭐',
  costPerNightAdult: 240,
  costPerNightChild: 180
}

const hotel2 = {
	name: 'Leopard Mansion',
	rooms: 96,
	stars: '⭐⭐⭐',
  costPerNightAdult: 120,
  costPerNightChild: 180
}

function NationalParkHotels(data) {
  this.name = data.name
  this.rooms = data.rooms
  this.stars = data.stars
  this.costPerNightAdult = data.costPerNightAdult
  this.costPerNightChild = data.costPerNightChild
  this.summariseHotel = function () {
    const totalPrice = this.costPerNightAdult * 2 + this.costPerNightChild * 2
    console.log(`A one night stay at the ${this.name} for two adults and two children costs a total of ${totalPrice}`)
  }
}

// ===================

const hotelSafari = new NationalParkHotels(hotel1)
const hotelLeopard = new NationalParkHotels(hotel2)

hotelSafari.summariseHotel()
hotelLeopard.summariseHotel()

const studentDetails = {
  firstName: 'janaka',
  lastName: 'siriwardena',
  age: 28,
  country: 'sri lanka',
  email: 'j.siri@totalinternet.com',
  discordUsername: 'JS1',
} 

function Student(data) {
  Object.assign(this, data)
  this.summariseStudent = function () {
      console.log(`${this.firstName} ${this.lastName} is ${this.age} years old and comes from ${this.country}. Their email is ${this.email} and you can find them on discord as ${this.discordUsername}`)
  }
}

const newStudent = new Student(studentDetails)
newStudent.summariseStudent()

// ====================
const sandraKayeProfileData = {
	name: 'Sandra Kaye',
	portfolio: 'www.sandrasportfolio.com',
	currentJob: 'Google',
	currentSalary: '400k'	
}

/*
Challenge
1. Use Object.assign to cut 4 lines of code from the constructor function.
*/


function DevProfile(data){
  Object.assign(this, data)
	this.summariseDev = function(){
	console.log(`${this.name}'s porfolio is at ${this.portfolio} and they work at ${this.currentJob}. Their current salary is ${this.currentSalary}.`)
}
}

const sandraKaye = new DevProfile(sandraKayeProfileData)
sandraKaye.summariseDev()

// Classes

class Module{
  constructor() {
    this.courseName = "Learn JS"
    this.studentsEnrolled = 5600
    this.studentsCompleted = 5100
  }
}

const learnJS = new Module
console.log(learnJS.studentsCompleted)

const moduleStats = {
  module1: {
    moduleName: 'Learn JS',
    studentsEnrolled: 2340,
    studentsCompleted: 2210
  },
  module2: {
    moduleName: 'CSS Basics',
    studentsEnrolled: 1893,
    studentsCompleted: 1810
  },
  module3: {
    moduleName: 'Responsive Design',
    studentsEnrolled: 4600,
    studentsCompleted: 4357
  }
}

class Module {
  constructor(data) {
    Object.assign(this, data)
    this.percentCompletedModule = this.studentsCompleted /this.studentsEnrolled * 100
  }
  logPercentCompletedModule() {
    console.log(this.percentCompletedModule)
  }
}

const responsiveDesign = new Module(moduleStats.module3)
responsiveDesign.logPercentCompletedModule()
////////////////////
// Basic function //
////////////////////
function someNameForTheFunction(parameter1, parameter2) {
  // someResult is a local variable, only available within the function
  let someResult = parameter1 + parameter2

  return someResult
}

function part1() {
  /////////////////////////////////////////////////////////////
  // Function without parameter and without return statement //
  /////////////////////////////////////////////////////////////
  function sayHello() {
    console.log('Hello!')
  }

  // Let's run the function
  sayHello()
}

// part1()

function part2() {
  //////////////////////////////////////////////////////////
  // Function with parameter and without return statement //
  //////////////////////////////////////////////////////////
  function sayHelloTo(name = 'DEFAULT NAME') {
    console.log('Hello ' + name)
  }

  // Let's run the function
  sayHelloTo()
}

function addition(a, b) {
  console.log(a + b)
}

// part2()

function part3() {
  //////////////////////////////////////////////////
  // Function with parameter and return statement //
  //////////////////////////////////////////////////

  function getHelloGreeting(name) {
    return `Hello ${name}!`
  }

  // Let's test it
  console.log('greeting', getHelloGreeting('John Doe'))
}

// part3()

function part4() {
  /////////////////////
  // Arrow functions //
  /////////////////////
  let arrowGreeting = (name) => {
    console.log(`Hello ${name}!`)
  }

  // Testing arrowGreating
  arrowGreeting('Henning')
}

// part4()

function part5() {
  //////////////
  // Equal to //
  //////////////
  let notArrowGreeting = function (name) {
    console.log(`Hello ${name}!`)
  }

  notArrowGreeting('Henning')
}

// part5()

function part6() {
  ///////////////////////////////////////////
  // Function declarations and expressions //
  ///////////////////////////////////////////
  function functionDeclaration() {
    console.log('Did something')
  }

  // The above a available in the main code flow
  // functionDeclaration() can be run before and after the statement

  const functionExpression = function () {
    console.log('Did a thing')
  }
  // Can only be run after the above statement
  functionExpression()
}

// part6()

/**
 *
 * About objects
 *
 */
function part7() {
  ////////////////////
  // Object literal //
  ////////////////////

  // Key and value pairs
  //

  let PersonObject = {
    name: 'Henning Horn',
    city: 'Aarhus',
    favorites: {
      cars: [
        'Tesla',
        'Volvo'
      ],
      artists: [
        'Bon Iver',
        'Keaton Henson',
        'Nephew'
      ]
    }
  }

  /*
  Access properties by:
  PersonObject.name => 'Henning Horn'
  PersonObject.favorites.cars => ['Tesla', 'Volvo']
  PersonObject.favorites.artists[1] => 'Keaton Henson'
  */

  console.log('PersonObject', PersonObject)
}

// part7()

function part8() {
  //////////////////////////
  // Constructor function //
  //////////////////////////
  function Person(name, city, age) {
    this.name = name
    this.city = city
    this.age = age
  }

  let p = {
    name: 'Henning Horn',
    city: 'Aarhus',
    age: 28
  }

  let myPerson = new Person('Henning Horn', 'Aarhus', 28)
  console.log('myPerson', myPerson)

  // Create a object constructor for a Drink object
  // The constructor needs 3 parameters:
  // name (String), price (Integer), ingredients (Array)
}

// part8()

function part9() {
  let name = 'Henning Horn'
  let age = 28999
  let city = 'Aarhus'

  let newPerson = { name: name, age: age, the_city: city }
  console.log('newPerson', newPerson)
}

// part9()

function part10() {
  /////////////////////////////////
  // Object with built-in method //
  /////////////////////////////////
  function Parrot(name) {
    this.name = name

    this.sayHello = function () {
      console.log('Hello, my name is ' + this.name)
    }
  }

  let charlie = new Parrot('Charlie')
  charlie.sayHello()

  // Create a Person object Constructor,
  // 2 parameters: name (string), age (integer)
  // One method: canIDriveInDenmark() => check if age is above or equal to 18
  // return either true or false
  // Run the function on the object and display the result in the console
}

// part10()

function part11() {
  // Let's make a parrot that actually speaks
  // Link: https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
  function Parrot(name) {
    this.name = name

    this.say = function (text = `Hello, my name is ${this.name}`) {
      let msg = new SpeechSynthesisUtterance(text)
      //msg.voice = speechSynthesis.getVoices().filter(v => v.name == 'Alex')[0]
      msg.lang = 'en-US'

      window.speechSynthesis.speak(msg)
    }
  }

  let charlie = new Parrot('Annoying Charlie')
  charlie.say('I am good a javascript')

  // const getParrotName = function () {
  //   console.log('p', this.name)
  // }
  //
  // charlie.getName = getParrotName
  // charlie.getName()
}

// part11()

////////////
// Arrays //
////////////

function part12() {
  // Create an array with 3 values
  let colors = ['Red', 'Green', 'Blue']

  // Get the second value
  let color = colors[1] // Index starts at 0
  // 0 => Red
  // 1 => Green
  // 2 => Blue

  // How many elements do we have?
  console.log('How many elements', colors.length)

  // Add an element at the end
  colors.push('Orange') // => ['Red', 'Green', 'Blue', 'Orange']
  console.log('Colors after .push', colors)

  // Add an element at the start
  colors.unshift('Purple')
  console.log('Colors after .unshift', colors)
}

// part12()

function part13() {
  //////////////////////////
  // Arrays and filtering //
  //////////////////////////
  function Gift(description, type, price)  {
    this.description = description
    this.type = type
    this.price = price
  }

  let gifts = [
    new Gift('Teddy Bear', 'Toy', 75),
    new Gift('Camera', 'Gadget', 1000),
    new Gift('Jacket', 'Clothing', 250),
    new Gift('Pants A', 'Clothing', 150),
    new Gift('Pants B', 'Clothing', 350),
    new Gift('Pants C', 'Clothing', 500),
    new Gift('Smartphone', 'Gadget', 4000)
  ]

  console.log('gifts', gifts)

  // Filter array elements using an arrow function
  console.log('Gadget gifts', gifts.filter(element => {
    return element.type == 'Gadget'
  }))

  // Filter array elements using regular function
  console.log('Gadget gifts full', gifts.filter(function (gift) {
    return gift.type == 'Gadget'
  }))

  // Get gifts under 500 incl.
  console.log('Gifts under 500 (incl)', gifts.filter(gift => gift.price <= 500))

  // Get gifts under 500 excl.
  console.log('Gifts under 500 (excl)', gifts.filter(gift => gift.price < 500))

  /////////////////////
  // Re-mapping data //
  /////////////////////
  let giftsInDollars = gifts.map(gift => {
    let newGift = new Gift(
      gift.description,
      gift.type,
      Math.floor(gift.price / 7),
    )

    newGift.currency = 'US Dollars'

    return newGift
  })
  console.log('Gift in dollars', giftsInDollars)
}

// part13()

function part14() {
  ///////////////////////////////////////////////////
  // Example of Module pattern - Exports variation //
  ///////////////////////////////////////////////////

  function Basket() {
    let items = []

    let module = {}

    module.addItem = function (item, price) {
      items.push({ item, price })
    }

    module.getItems = function () {
      return items
    }

    module.getTotal = function () {
      let total = 0

      items.forEach(item => {
        total += item.price
      })

      return total
    }

    return module
  }

  let myBasket = new Basket()

  myBasket.addItem('Soda', 15)
  myBasket.addItem('Chips', 20)
  myBasket.addItem('Wine', 100)
  console.log('Total', myBasket.getTotal())
  myBasket.items = []
}

// part14()

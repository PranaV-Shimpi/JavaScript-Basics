# ⭐ FSJS JavaScript Advance Questions⭐

1. Create an object literal called personAccount. 
   It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
   Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
   
```
    let personalAccount = {
    firstName: "Ram",

    lastName: "Pyare",

    income: [20000, "mysalary"],

    expenses: [500, "Medicine"],

    flatIncome: [],
    flatExpense: [],

    get getIncome() {
      this.flatIncome = [].concat(...this.income);
      return `All Incomes : ${this.flatIncome}`;
    },

    get getExpense() {
      this.flatExpense = [].concat(...this.expenses);
      return `All Expenses : ${this.flatExpense} `;
    },

    get getTotalIncome() {
      let totalIncome = 0;
      this.flatIncome.forEach((ele) => {
        if (typeof ele === "number") {
          totalIncome += ele;
        }
      });
      return `${totalIncome}`;
    },

    get getTotalExpenses() {
      let totalExpense = 0;
      this.flatExpense.forEach((ele) => {
        if (typeof ele === "number") {
          totalExpense += ele;
        }
      });
      return `${totalExpense}`;
    },

    get getAccountInfo() {
      return `Name = ${this.firstName} ${this.lastName} \nTotal Income = ${this.getTotalIncome} \nTotal Expenses = ${this.getTotalExpenses}`;
    },

    set setAddIncome(val) {
      let x = this.income.push(val);
      // return x;
    },

    set setAddExpense(val) {
      let x = this.expenses.push(val);
      // return x;
    },

    get getAccountBalance() {
      let balance = this.getTotalIncome - this.getTotalExpenses;
      return `Balance : ${balance}`;
    },
  };

  personalAccount.setAddIncome = [5000, "Bonus"];

  personalAccount.setAddIncome = [2500, "HRA"];

  personalAccount.setAddIncome = [400, "PF"];

  personalAccount.setAddExpense = [100, "chocolate"];

  personalAccount.setAddExpense = [20, "Pani puri"];

  personalAccount.setAddExpense = [2500, "Grocery"];

  personalAccount.setAddExpense = [1200, "shopping"];

  console.log(personalAccount.getIncome);

  console.log(personalAccount.getExpense);

  console.log( personalAccount.getAccountInfo);

  console.log( personalAccount.getAccountBalance);
  
```
   
2. a. Create a function called signUp which allows user to add to the collection.
   If user exists, inform the user that he has already an account.
   b. Create a function called signIn which allows user to sign in to the application
   
  ```
  
  const users = [
  {
      _id: "ab12ex",
      username: "Alex",
      email: "alex@alex.com",
      password: "123123",
      createdAt: "08/01/2020 9:00 AM",
      isLoggedIn: false,
    },
    {
      _id: "fg12cy",
      username: "Asab",
      email: "asab@asab.com",
      password: "123456",
      createdAt: "08/01/2020 9:30 AM",
      isLoggedIn: true,
    },
    {
      _id: "zwf8md",
      username: "Brook",
      email: "brook@brook.com",
      password: "123111",
      createdAt: "08/01/2020 9:45 AM",
      isLoggedIn: true,
    },
    {
      _id: "eefamr",
      username: "Martha",
      email: "martha@martha.com",
      password: "123222",
      createdAt: "08/01/2020 9:50 AM",
      isLoggedIn: false,
    },
    {
      _id: "ghderc",
      username: "Thomas",
      email: "thomas@thomas.com",
      password: "123333",
      createdAt: "08/01/2020 10:00 AM",
      isLoggedIn: false,
    },
  ];

  
  function signUp(_id, username, email, password, createdAt, isLoggedIn) {
  let flag = 0;
  for (const ele of users) {
    if (ele.email === email) {
      flag = 1;
      break;
    } else {
      flag = 0;
    }
  }

  if (flag == 0) {
    users.push({
      _id,
      username,
      email,
      password,
      createdAt,
      isLoggedIn,
    });
    console.log(users);
  } else {
    console.log("user already exists");
  }
}

//signUp("Af1234", "shyam", "123@mba.com", "123456", "17/02/2022 12:00 AM", false);

function signIn(email, password) {
  for (const ele of users) {
    if (ele.email === email && ele.password === password) {
      console.log(`Hi ${ele.username}, you are successfully loggedIn....`);
      ele.isLoggedIn = true;
      console.log(ele);
      break;
    } else if (ele.email === email && ele.password !== password) {
      console.log("You have entered an invalid email or password.....");
      break;
    } else if (ele.email !== email && ele.password === password) {
      console.log("You have entered an invalid email or password.....");
      break;
    } else if (ele.email !== email && ele.password !== password) {
      console.log("Unauthorized User Try SignUp....");
      break;
    }
  }
}

// signIn("alex@alex.com","123456")

   ```

3. The products array has three elements and each of them has six properties.
```
     const products = [
    {
      _id: "eedfcf",
      name: "mobile phone",
      description: "Huawei Honor",
      price: 200,
      ratings: [
        { userId: "fg12cy", rate: 5 },
        { userId: "zwf8md", rate: 4.5 },
        { userId: "zwf8md", rate: 3.5 },
        { userId: "zwf8md", rate: 4.15 },
      ],
      likes: ["adafe", "ar2423", "tsdgzd"],
    },
    {
      _id: "aegfal",
      name: "Laptop",
      description: "MacPro: System Darwin",
      price: 2500,
      ratings: [],
      likes: ["fg12cy"],
    },
    {
      _id: "hedfcg",
      name: "TV",
      description: "Smart TV:Procaster",
      price: 400,
      ratings: [{ userId: "fg12cy", rate: 5 }],
      likes: ["fg12cy"],
    },
  ];

```
   a. Create a function called rateProduct which rates the product
   ```
   const rateProduct = (name, rate) => {
    products.forEach((product) => {
      if (product.name.toLocaleLowerCase().includes(name)) {
        let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
        let id = [];

        for (let i = 0; i < 6; i++) {
          id.push(chars[Math.floor(Math.random() * chars.length)]);
        }
        id = id.join("");

        product.ratings.push({
          userId: id,
          rate: rate,
        });
        console.log("filter");
      } else {
        console.log(`No product to rate`);
      }
    });
  };

  // rateProduct("laptop", 4.1);
  // rateProduct("laptop", 4);
   ```
   
   b. Create a function called averageRating which calculate the average rating of a product
   
   ```
   const avgRating = (name) => {
    let avg = 0;
    let product;

    for (const prod of products) {
      if (prod.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
        product = prod;
        // console.log(product);
      }
    }

    for (const user of product.ratings) {
      avg += user.rate;
    }

    avg /= product.ratings.length;

    console.log(`\n Avg Rating of ${name} =  ` + avg.toFixed(2));
    };
    // avgRating("tv");
   ```
   
4. Create a function called likeProduct.
   This function will helps to like to the product if it is not liked and remove like if it was liked.
   
```
   let likeProduct = (name, id) => {
    let product, index;
    for (let i = 0; i < products.length; i++) {
      if (products[i].name.toLowerCase() == name.toLowerCase()) {
        product = products[i];
      } 
    }

    index = product.likes.indexOf(id);

    if (index == -1) {
      product.likes.push(id);

      console.log(`liked ${name} by user ` + product.likes.slice(-1));
    } else {
      console.log(`Dislike ${name} by user ` + product.likes.splice(index, 1));
    }
  };

  likeProduct("Mobile phone", "fg12cy");

  likeProduct("Mobile phone", "ar2423");

  likeProduct("Laptop", "abcd123");
```

5.  
 Create an empty object called dog
 Print the the dog object on the console

 Add name, legs, color, age and bark properties for the dog object. 

 The bark property is a method which return woof woof

 Get name, legs, color, age and bark value from the dog object

 Set new properties the dog object: breed, getDogInfo

```
const dog ={
    get getDogInfo(){
        return `name = ${this.name}, color = ${this.color}, breed = ${this.breed}`;
    },

    set dogInfo(value){
        dog.breed = value;
        }   
}

    dog.name = "biscuit"
    dog.age = "0.4";
    dog["legs"] = 4;
    dog["color"] = "brown";
    dog["bark"] = "woof woof"

    dog.doesBark = function (){
      return this.bark;
    }

    // console.log(dog);
    console.log(dog.doesBark);

    // accessing as a function
    console.log(dog.doesBark()); // accessing as a function 

    // accessing as a getters
    console.log(dog.NameColor); // using getter method accessing as a  property 

    // setters 
    dog.dogInfo = "Pandikona"

    console.log(dog.getDogInfo);

    console.log(dog);
```

6. Explain the difference between forEach, map, filter, and reduce.
[Article](https://codeburst.io/array-methods-explained-filter-vs-map-vs-reduce-vs-foreach-ea3127c6d319)

7. Define a callback function before you use it in forEach, map, filter or reduce.

```
A callback function is a function passed into another function as an argument, 
which is then invoked inside the outer function to complete some kind of routine or action.


function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
```

- Use forEach to console.log each name in the names array.
- Use forEach to console.log each country in the countries array.
- Use forEach to console.log each number in the numbers array.
```
names.forEach(ele => {
  console.log(ele);
})

countries.forEach(ele => {
  console.log(ele);
})

numbers.forEach(ele => {
  console.log(ele);
})
```
8.
- Use map to create a new array by changing each country to uppercase in the countries array.
- Use map to create an array of countries length from countries array.
- Use map to create a new array by changing each number to square in the numbers array
- Use map to change to each name to uppercase in the names array
old syntax
- Use map to map the products array to its corresponding prices.

```
//1
let country = countries.map((ele) => ele.toUpperCase());
console.log(country);

//2
let country = countries.map((ele) => ele.length);
console.log(country);

//3
let number = numbers.map((ele => ele*ele))
console.log(number);

//4
let name = names.map(function(ele) {
  return ele.toUpperCase();
})
console.log(name);

//5
let product = products.map((ele)=>{
  return `name = ${ele.product} & price = ${ele.price}`;
})
console.log(product);
```
9.
- Use filter to filter out countries containing land.
- Use filter to filter out countries having six character.
- Use filter to filter out countries containing six letters and more in the country array.
- Use filter to filter out country start with 'E';
- Use filter to filter out only prices with values.

```
//1  
let filt = countries.filter(country => {
  return country.toLowerCase().includes('land')
})
console.log(filt);

//2
let filt = countries.filter(country => {
  return (country.length == 6)
})
console.log(filt);

//3
let filt = countries.filter(country => {
  return (country.length >= 6)
})
console.log(filt);

//4
let filt = countries.filter(country => {
  return country[0].toLowerCase() ===  "i"
  // return country.toLowerCase().startsWith('s')
})
console.log(filt);

//5
let filt = products.filter(product => {
  return product.price > 0;
})
console.log(filt);
```
10.
- Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

```
const getStringLists = (arr) => {
  let onlyString = arr.filter(ele => {
    return typeof ele === 'string';
  })
  return onlyString
}

let nn = getStringLists(["victor", 3, 5, "kenneth","57"]);
console.log(nn);
```
11.
- Use reduce to sum all the numbers in the numbers array.
- Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

```
//1
let sum = numbers.reduce((accumulator, currentValue)=>{
  return accumulator + currentValue;
})

//2
let joinCountries = countries.reduce((accumulator, currentValue) => {
  return accumulator+", "+currentValue;
})
console.log(joinCountries + ' are north European countries');

```

- Explain the difference between some and every
- Use some to check if some names' length greater than seven in names array
- Use every to check if all the countries contain the word land

```
//1
every checks if all elements in an array are similar in all aspects
some checks if some elements are elements are similar in one aspect

//2 
let name = names.some(ele => {
  return ele.length > 6;
})

console.log(name);

//3 
let name = countries.some(ele => {
  return ele.toLowerCase().includes('land');
})

console.log(name);

```
12.
- Explain the difference between find and findIndex.
- Use find to find the first country containing only six letters in the countries array
- Use findIndex to find the position of the first country containing only six letters in the countries array
- Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
- Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

```
//1
find returns the first element which satisfies the condition
findIndex returns the first index elemnt whic satisfiy the condition

//2
let check = countries.find(ele => {
  return ele.length > 6;
})

console.log(check);

//3
let check = countries.findIndex(ele => {
  return ele.length === 6;
})

console.log(check);

//4 
let firstIndexPosNorwayExist = countries.findIndex(country => {
  return country.includes("Norway")
});
console.log(firstIndexPosNorwayExist);

//5
let firstIndexPosNorwayExist = countries.findIndex(country => {
  return country.includes("Russia")
});
console.log(firstIndexPosNorwayExist);
```

13.
- create an empty set
- Create a set containing 0 to 10 using loop
- Remove an element from a set
- Clear a set
- Create a set of 5 string elements from array
- Create a map of countries and number of characters of a country

```
//1
const companies = new Set();
console.log(companies);

//2
let set1 = new Set();
for (let i = 0; i < 10; i++) {
  set1.add(i);
}

//3
const a = [4, 5, 8, 9];

let set2 = new Set(a);
console.log(set2);

set2.delete(9);
console.log(set2);

//4
set2.clear();
console.log(set2);

//5
let city = ["pune", "mumbai", "banglore", "delhi", "nashik"];
let citySet = new Set();
city.forEach((city) => {
  citySet.add(city);
});
console.log(citySet);

//6
const countries2 = ["Finland", "Sweden", "Turkistan", "USA"];

let countriesLength = new Set();
for (let i = 0; i < countries2.length; i++) {
  countriesLength.add(countries2[i]);
  countriesLength.add(countries2[i].length);
}
console.log(countriesLength);

```
14.
- Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
- Destructure and assign the elements of countries array to fin, est, sw, den, nor
- Destructure the rectangle object by its properties or keys.

```
//1
const constants = [2.72, 3.14, 9.81, 37, 100]
let [e,pi,gravity,humanBodyTemp, waterBoilingTemp] = constants

console.log(e);
console.log(pi);
console.log(gravity);
console.log(waterBoilingTemp);

//2
let [fin, est, sw, den, nor] = countries
console.log(den);

//3
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)

let { width: w, height: h, area: a, perimeter: p } = rectangle

console.log(w, h, a, p)

```
15.
- Iterate through the users array and get all the keys of the object using destructuring
- Find the persons who have less than two skills

```
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];


//1
for (const {name,scores,skills,age} of users) {
  console.log(name,scores,skills,age);
}

//2
for (const { skills } of users) {
  if (skills.length <= 2) {
    console.log(skills);
  }
}

for (let{name, scores, skills, age } of users) {
  if (skills.length < 3) {
    console.log(name, scores, skills, age);
  }
}
```
16. Create a closure 

```
function numberGenerator() {
  
  var num = 1;
  function checkNumber() { 
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number(); 
```

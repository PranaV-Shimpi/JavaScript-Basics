## ⭐ FSJS JavaScript Basics ⭐

1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.

number
```
let length = 16;
let weight = 7.5;
```

Strings
```
let color = "Yellow";
let lastName = "Johnson";
```

Booleans
```
let x = true;
let y = false;
```

null 
```
let isPrime = null;
console.log(isPrime);
```

undefined
```
let name;
console.log(name);
```

Object:
```
const person = {firstName:"John", lastName:"Doe"};
```
Array object:
```
const cars = ["Saab", "Volvo", "BMW"];
```

Date object:
```
const date = new Date("2022-03-25");
```


2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

```
let firstName = 'Pranav'; // first name of a person
let lastName = 'Shimpi';   // last name of a person
let country = 'India';    // country
let city = 'Nashik';      // capital city
let age = 22;              // age in years
let isMarried = false;

console.log(`Full Name: ${firstName} ${lastName}\nCountry: ${country}\nCity: ${city}\nAge: ${age}\nMarried?: ${isMarried}\n`);
```


3. Decalre a varibale and assign value to it and change all the string characters to capital 
letters using toUpperCase() method.

```
country = "India";
console.log(country.toUpperCase())
```


4. Check if the string contains a word Script using includes() method.

- includes contain string search and position

```
let essay = `In programming, data types is an important concept.
To be able to operate on variables, it is important to know something about the type.
Without data types, a computer cannot safely solve this:`


console.log(essay.includes('able'));  //true

console.log(essay.includes(200)); //false

console.log(essay.includes(15)); //false

console.log(essay.includes('Engineering')); //false

console.log(essay.includes('able',20)); //true

console.log(essay.includes('able',120));  //false

```


5. Split the string into an array using split() method

```
let string = '30 Days Of JavaScript'

console.log(string.split())     // ["30 Days Of JavaScript"]
console.log(string.split(' '))  // ["30", "Days", "Of", "JavaScript"]

let firstName = 'India'

console.log(firstName.split())  [ 'India' ]
console.log(firstName.split(''))  [ 'I', 'n', 'd', 'i', 'a' ]  

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
```


6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
```
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(companies.split(','));
[
  'Facebook',
  ' Google',
  ' Microsoft',
  ' Apple',
  ' IBM',
  ' Oracle',
  ' Amazon'
]

console.log(companies.split(', '));
[
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
]
```


7. Use lastIndexOf to determine the position of the last occurrence of a script.

```
let firstDate = "Hi simaran, How are you simarna. Remembered simaran I asked to for a date at that they and we just laugh as if I was just asking for timepass?. So I want to clear it from my side It was not I really Like you simaran."

console.log(firstDate.lastIndexOf('simaran')); // 208
```


8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

```
let sentence = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.indexOf('because')); //31
```


9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.

```
let string = '   I will crack this company   '
console.log(string.trim())
console.log(string.trim(' '))
```

10. Boolean value is either true or false.

    - Write JavaScript statement which provide truthy value.
   
   ```
    true && "dog"
    // returns "dog"

    [] && "dog"
    // returns "dog"
   ```
    
    - Write JavaScript statement which provide falsy value.
    
    ```
    console.log(false && "dog");
    // ↪ false

    console.log(0 && "dog");
    // ↪ false
    ```


11. Figure out the result of the following comparison expression first without using console.log(). 
After you decide the result confirm it using console.log()
    ```
    - 4 > 3  True
    - 4 >= 3 True
    - 4 < 3 False
    - 4 <= 3 False
    - 4 == 4  True
    - 4 === 4 True
    - 4 != 4 False
    - 4 !== 4 False
    - 4 != '4' False
    - 4 == '4' True
    - 4 === '4' False
    ```

    - Find the length of python and jargon and make a falsy comparison statement.
    
    ```
    let str1 = "python"
    let str2 = "jargon"
    console.log(str1.length !=  str2.length);
    ```

12. Use the Date object to do the following activities
    ```
    const now = new Date()
    ```
    - What is the year today?  
    ```
    console.log(now.getFullYear())
    ```
    - What is the month today as a number? 
    ```
    console.log(now.getMonth())
    ```
    - What is the date today? 
    ```
    console.log(now.getDate())
    ```
    - What is the day today as a number? 
    ```
    console.log(now.getDate())
    ```
    - What is the hours now? 
    ```
    now.getHours()
    ```
    - What is the minutes now?  
    ```
    now.getMinutes() 
    ```

    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
    ```
    const now = new Date()
    console.log(now.getTime()) 
    ```


13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Area of triangle</h1>

    <h2 id="base"></h2>
    <h3 id="height"></h3>
    <h1 id="area"></h1>


</body>
<script>
    const baseValue = prompt('Enter the base of a triangle: ', 2);
    console.log(baseValue);
    const heightValue = prompt('Enter the height of a triangle: ', 3);
    console.log(heightValue);

    document.getElementById('base').innerHTML = "base = " + baseValue;
    document.getElementById('height').innerHTML = "height = " + heightValue;

    const area = 0.5 * baseValue * heightValue;

    document.getElementById('area').innerHTML = "Area of Triangle = " + area;
</script>

</html>
```

14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Slope</h1>
    <p id="x1"></p>
    <p id="y1"></p>
    <p id="x2"></p>
    <p id="y2"></p>
    <p id="demo"></p>
</body>
<script>
    let x1 = prompt("Enter x1: ")
    let y1 = prompt("Enter y1: ")
    let x2 = prompt("Enter x2: ")
    let y2 = prompt("Enter y2: ")

    function slope(x1, y1, x2, y2) {
        if (x2 - x1 !== 0) {
            slope = (y2 - y1) / (x2 - x1);
            console.log(slope);
            return slope
        } else {
            console.log("0");
            return 0;
        }
    }

    result = slope(x1, y1, x2, y2)

    document.getElementById("x1").innerHTML = "x1 = " + x1;
    document.getElementById("y1").innerHTML = "y1 = " + y1;
    document.getElementById("x2").innerHTML = "x2 = " + x2;
    document.getElementById("y2").innerHTML = "y2 = " + y2;

    document.getElementById("demo").innerHTML = "slope = " + result;
</script>

</html>
```

16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
```
<script>
    const pi = 3.14;

    let r = prompt("Enter radius of circle: ",7);

    function Area(r) {
        return pi*r*r;
    }

    function Diameter(r) {
        return 2*r;
    }

    function Circumference(r) {
        return 2*pi*r;
    }


    let areaVal = Area(r)
    let circumferenceVal = Circumference(r)
    let diameterVal = Diameter(r)

    document.getElementById("radius").innerHTML = "radius = " + r;
    document.getElementById("area").innerHTML = "area = " + areaVal;
    document.getElementById("diameter").innerHTML = "diameter = " + diameterVal;

    document.getElementById("circumference").innerHTML = "circumference = " + circumferenceVal;
</script>
```
17. Create a human readable time format using the Date time object

    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm
    
    ```
    showDateTime = () => {
        let date = new Date();
        let datee = date.getDate();
        let month = date.getUTCMonth();
        let year = date.getFullYear();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        return `${datee}/${month + 1}/${year} ${hour}:${minutes} `
    }
    showDateTime();
    ```
    
    ```
    function dateFormater(date, separator) {
      var day = date.getDate();
      // add +1 to month because getMonth() returns month from 0 to 11
      var month = date.getMonth() + 1;
      var year = date.getFullYear();

      // show date and month in two digits
      // if month is less than 10, add a 0 before it
      if (day < 10) {
        day = '0' + day;
      }
      if (month < 10) {
        month = '0' + month;
      }

      // now we have day, month and year
      // use the separator to join them
      return day + separator + month + separator + year;
    }

    var now = new Date();
    console.log(dateFormater(now, '/'));
    console.log(dateFormater(now, '-'));
    console.log(dateFormater(now, '.'));
    ```
    Output:
    ```
    02/01/2023
    02-01-2023
    02.01.2023
    ```
    
    ```
    now = new Date();
    console.log(now.toDateString());  //Fri Dec 16 2022
    ```
    
18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' 
    but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

    ```
    function validate(age){
      var ans;
      if(age>=18){
          ans= "You are old enough to drive";
      }else{
         let diff = 18 - age;
         ans = `You need to wait ${diff} more years for Driving Lisense`; 
      }
      return (ans);
    }
        
    var age=parseInt(prompt("Enter age"));
    var status=validate(age);
    document.write(status);
    ```

19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

```
if(num % 2 == 0){
    console.log("even")
}
```

20. Write a code which can give grades to students according to theirs scores:

    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F

```
    function myGrading(score) {
    var gscore;

    switch(true) {
        case (score <= 100 && score >= 80):
        gscore = 'A';
            break;
        case (score <= 89 && score >= 70):
            gscore = 'B';
            break;
        case (score <= 69 && score >= 60):
            gscore = 'C';
            break;
        case (score <= 59 && score >= 50):
            gscore = 'D';
            break;
        case (score <= 49 && score >= 0):
            gscore = 'F';
            break;

        case (score > 100 && score < 0):
            gscore = 'INVALID SCORE';
            break; 

        default:
        return 'INVALID SCORE';
    }

    return gscore;
    }

    var output = myGrading(71);
    var output = myGrading(40);
    var output = myGrading(83);
    console.log(output);

```

21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
    
    ```
    function checkSeason(month) {
        var season;
        month = month.toLowerCase();

        switch (true) {
            case (month == "september" || month == "october" || month == " november"):
                season = 'Autumn';
                break;
            case (month == "december" || month == "january" || month == " february"):
                season = 'Winter';
                break;
            case (month == "march" || month == "april" || month == "may"):
                season = 'Spring';
                break;
            case (month == "june" || month == "july" || month == " august"):
                season = 'Summer';
                break;

            default:
                return 'INVALID MONTH';
        }
        return season;
    }

    var output1 = checkSeason('January');
    var output2 = checkSeason('MARCH');
    var output3 = checkSeason('Spring');

    console.log(output1); // Winter
    console.log(output2); // Spring
    console.log(output3); // INVALID MONTH
    ```

22. Write a program which tells the number of days in a month.
    ```
    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    };
    const daysInSeptember = getDays(2021, 7); // Returns 31
    ```
    
23. Write a program which tells the number of days in a month, now consider leap year.
    ```
    function numOfDays(year,month) {
        let ans;
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
            ans = `Number of days is 31`
        }
        else if ((month == 2) && ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))) {
            ans = `Number of days is 29`
        } else if (month == 2) {
            ans = `Number of days is 28`
        } else{
            ans = `Number of days is 30`
        }
        return ans;
    }

    let val = numOfDays(2023, 1)
    console.log(val)
    ```


24. Create a separate countries.js file and store the countries array in to this file, 
create a separate file web_techs.js and store the webTechs array in to this file. 
Access both file in main.js file

    
    ```
    // In main.js

    import countries from "./countries.js";
    import web_techs from "./web_techs.js";


    console.log(countries);
    console.log(web_techs);
    ```

25. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'

    ```
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    ```
    // 1
    
    ```
    shoppingCart.unshift("Meat")
    ```
    
    // 2
    
    ```
    let lastIndex = shoppingCart.length - 1;
    let lastIndexVal = shoppingCart[lastIndex]

    if(lastIndexVal!="Sugar"){
    shoppingCart.push("Sugar");
    }

    console.log(shoppingCart);
    ```
    
    // 3
    
    ```
    let allergicToHoney = true;

    let pattern = "Honey"

    if(allergicToHoney){
    shoppingCart.filter(ele => {
        if(ele!=pattern){
        console.log(ele);
        }
    })
    
    }

    console.log(shoppingCart);
    
    ```
    
    // 4
    
    ```
    let newItem = shoppingCart.indexOf("Tea")
    shoppingCart[newItem] = "Green Tea"
    console.log(shoppingCart);
    ```

26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

    ```
    let isPresent = console.log( countries.indexOf('Ethiopia'));

    if(!isPresent){
    countries.push("Ethiopia".toUpperCase())
    }

    console.log(countries);
    ```

27. The following is an array of 10 students ages:
    
    ```
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ```
    
    - Sort the array and find the min and max age
    
    ```
    console.log(ages.sort());
    console.log(Math.max(...ages));
    console.log(Math.min(...ages));
    ```
    
    - Find the median age(one middle item or two middle items divided by two)
    
    ```
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

    const median = ages => {
      const mid = Math.floor(ages.length / 2),
        nums = [...ages].sort((a, b) => a - b);
      return ages.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    };

    console.log(median(ages));
    ```
    
    - Find the average age(all items divided by number of items)
    
    ```
    let len = ages.length;
    let sum = 0;
    ages.forEach((ele)=>{
    sum = sum + ele;
    })
    let average = sum / len;
    console.log(average);
    ```
    
    - Find the range of the ages(max minus min)
    ```
    let range = Math.max(...ages) - Math.min(...ages)
    console.log(range);
    ```
    
    - Compare the value of (min - average) and (max - average), use abs() method
    ```
    console.log(maxx - average)
    console.log(minn - average)
    console.log(Math.abs(maxx - average))
    console.log(Math.abs(minn - average))
    ```

28. Use for loop to iterate from 0 to 100 and print only prime numbers
    ```
    for(let i = 0; i <100; i++){
      let flag = 0;
      for(let j = 2 ;j < i; j++){
        if(i%j == 0){
          flag = 1;
          break;
        }
      }

      if(i > 1 && flag == 0){
        console.log(i);
      }

    }
    ```
  
29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

    ```
    let i;
    let sumE = 0;
    let sumO = 0;

    for (i = 0; i <= 100; i++) {
      i % 2 === 0 ? (sumE += i) : (sumO += 1);
    }

    console.log(sumE, sumO);
    ```

30. Write a script which generates a random hexadecimal number.
    ```
    const random_hex_color_code = () => {
      let n = (Math.random() * 0xfffff * 1000000).toString(16);
      return '#' + n.slice(0, 6);
    };

    console.log(random_hex_color_code())
    ```

31. Sort the webTechs array and mernStack array
    
     ```
     webTechs.sort();
     mernStack.sort();
     ```
     
// countries Array : https://gist.github.com/incredimike/1469814

32. Array Questions

    - Extract all the countries contain the word 'land' from the countries array and print it as array
    
    ```
    let countWithoutLand = []
    let countWithLand = []
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].includes("LAND")) {
            countWithLand.push(countries[i]);
        } else {
            countWithoutLand.push(countries[i])
        }
    }
    ```

    - Find the country containing the hightest number of characters in the countries array
    
    ```
    let prevLen = 0;
    let longestChar;
    countryList.forEach((country) => {
    if (country.length > prevLen) {
        prevLen = country.length;
        longestChar = country
    }
    });

    console.log(longestChar);
    
    ```
    
    - Extract all the countries containing only four characters from the countries array and print it as array
    
    ```
    countryList.forEach((country) => {
        if (country.length === 4) {
            console.log(country);
        }
    });
    ```
    
    - Extract all the countries containing two or more words from the countries array and print it as array
    
    ```
    const newArr = [];

    countryList.forEach((ele) => {
    if (ele.length > 10) {
        newArr.push(ele);
    }
    });

    console.log(newArr);
    ```
    
    - Reverse the countries array and capitalize each country and stored it as an array
    
    ```
    const newArr = [];

    countryList.forEach((ele) => {
    if (ele) {
        newArr.unshift(ele.toUpperCase());
    }
    });

    console.log(newArr);
    ```
    
33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more

    Solution : [VIEW CODE](https://github.com/PranaV-Shimpi/JavaScript-Basics/tree/main/BMI%20Calculator) / [LIVE PREVIEW](https://ps-bmi-calculator.netlify.app/) 

34. Linear equation is calculated as follows: ax + by + c = 0. 
Write a function which calculates value of a linear equation, solveLinEquation.


35. Write a functions which checks if all items are unique in the array.

    ```
    const allUnique = arr => arr.length === new Set(arr).size;
    console.log(allUnique([1,2,3,4,5,6]))   // true
    console.log(allUnique([1,2,3,4,5,6,3]))  // false
    ```
    
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
10. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

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

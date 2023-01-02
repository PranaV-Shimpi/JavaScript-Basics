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
    
 

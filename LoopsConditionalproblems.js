// A) 
//1) Given the array,
//Let lunchArray = [ “Burger”, “Salad”, “Lasagna”, “Sushi”, “Meatloaf” ]
//Loop through the array to find the longest word by how many letters each string contains.
//Which other variables will you be needing?
//2) Print the length of the longest word to the console.
//3) Print the longest word to the console.  

function foods() {
  let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];
  let longest = 0;
  let longestword = "";
  for (let i = 0; i < lunchArray.length; i++) {
    if (lunchArray[i].length > longest) {
      longest = lunchArray[i].length;
      longestword = lunchArray[i];
    }
  }
  console.log(longest);
  return longestword;
}
console.log(foods());

// A Part 4) Now what if the array was 
//Let lunchArray = [ “Burger  Salad  Lasagna Sushi  Meatloaf” ]
//Since all the words are in one string together, how would you solve this? 

function foodies() {
  let lunchArray = ["Burger Salad Lasagna Sushi Meatloaf"];
  let arr = lunchArray[0].split(" ");
  let longest = 0;
  let longestword = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
      longestword = arr[i];
    }
  }
  console.log(longest)
  return longestword;
}
console.log(foodies());

// B) Write a function that returns elements on odd positions in a list. 

function oddIndex(nums) {
  let odd = nums.filter((num, i) => i % 2 == 1);
  console.log(odd);
}

oddIndex([1, 2, 3, "icecream", 8, ["pokemon", "digimon"], 10]);

// C) Function factorial(n) {}
// Compute the factorial of any given number.

function factorial(n) {
  let result = 1;
  if (n == 0 || n == 1) {
    return result;
  } else {
    for (let i = n; i >= 1; i--) {
      result = result * i;
    }
    return result;
  }
}
let n = (10);
console.log(factorial(n));

// D) Conditional Practice
// Write an if statement and determine a condition where:
// If mpg is less than or equal to 10, console “gas guzzler”
// If mpg is  between 11 - 16, console “Planet still frowns upon this, and so does your wallet”
// If mpg is between 17-20, console “ it’s palpable”
// If mpg is between 21-29, console “ Atmosphere smiles at your decision”
// If mpg is between 30-35, console “ Not many gas stops will be taken”
// If mpg is above 35 console “ The fish of the sea smile at your conservation”
// If mpg is 120 console “/if you are using the Tom Ogle fuel system, props”
// After testing each one, change the mpg variable to ensure it is good. 

let ozone = function (mpg) {
  if (mpg <= 10) {
    console.log("gas guzzler");
  } else if (mpg >= 11 && mpg <= 16) {
    console.log("Planet still frowns upon this, and so does your wallet");
  } else if (mpg >= 17 && mpg <= 20) {
    console.log("it's palpable");
  } else if (mpg >= 21 && mpg <= 29) {
    console.log("Atmosphere smiles at your decision");
  } else if (mpg >= 30 && mpg <= 35) {
    console.log("Not many gas stops will be taken");
  } else if (mpg > 35 && mpg <= 119) {
    console.log("The fish of the sea smile at your conservation");
  } else if (mpg == 120) {
    console.log("if you are using the Tom Ogle fuel system, props");
  }
}
ozone(120);
ozone(9);
ozone(64);

// /usr/local/bin = $PATH

/*

var petDog = "Rex"
var petCat = "Pepper"


console.log('My pet dog\'s name is: ' ,petDog)
console.log('My pet cat\'s name is: ' ,petCat)

var catSound = "purrr"
var dogSound = "wooff"

console.log(petDog, ' says ', dogSound)
console.log(petCat, ' says ', catSound)

catSound = 'meow'

console.log(petCat, ' says ', catSound)

*/

/*

function addTwoNums(a,b)
{
    try {

        if(typeof(a) != 'number')
        {
            console.log('The first argument is not a number')
        }
        else if(typeof(b) != 'number')
        {
            console.log('The second argument is not a nunber')
        }
        else
        {
            console.log('Total is : ' , (a+b))
        }
        
    }
    catch(err)
    {
        console.log("Error! " , err)
    } 
}

addTwoNums(5,"5")


*/


function boundedRatio(numbers, left, right) {
    let b = [];
    for (let i = 0; i < numbers.length; i++) {
      let bounded = false;
      for (let x = left; x <= right; x++) {
        if ((i + 1) * x == numbers[i]) {
          bounded = true;
          break;
        }
      }
      b.push(bounded);
    }
  
    return b;
  }
  
  console.log(boundedRatio([8, 5, 6, 16, 5], 1, 3));
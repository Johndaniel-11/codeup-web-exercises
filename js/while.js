(function (){



"use strict";


// while loop
/*
Create a while loop that uses console.log() to create the output shown below.

2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
 */
// Practice.
//     var i = 2;
//     while(i <= 65536){
//         console.log(i);
//         i = i * 2;
//
//     }

// Refactored.
// var num = 2;
// while(num <= 65536){
//     console.log(num);
//     num = num * 2;
// }


// var number = 2;
//
// while(number <= 65536) {
//     console.log(number);
//     number = number * 2;
// }


/*
do while loop

An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;
The output should be similar to the following:

5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
Yay! I sold them all! // If there are no more cones
 */

    // Refactored 2/23/21.

// var allCones = Math.floor(Math.random() * 50) + 50;
//
//     console.log("You have " + allCones + " cones to sell today!");
//
//     do{
//     var boughtCones = Math.floor(Math.random() * 5) + 1;
//
//     if(boughtCones <= allCones){
//         allCones = allCones - boughtCones;
//         console.log(boughtCones + " cones sold. Now you have " + allCones + " cones left.");
//     }
//     else{
//         console.log("Cannot sell you " + boughtCones + " cones I only have " + allCones + "...");
//     }
//
// }while(allCones > 0)
//     console.log("Yay! I sold them all!");



// ******************************************************************
// do{
//     var numOfCones = Math.floor(Math.random() * 5) + 1;
//         allCones = allCones - numOfCones;
//
//             console.log(numOfCones + " cones sold...");
//
//             if (numOfCones > allCones) {
//                 console.log("Cannot sell you " + numOfCones + " cones I only have " + allCones + "...");
//                 if(allCones === 0) {
//                     console.log("Yay! I sold them all!");
//                 }
//
//             }
//
//
// }while( allCones > numOfCones );






// do{
//     var numOfCones = Math.floor(Math.random() * 5) + 1;
//     var total = allCones - numOfCones;
//     var totalLeft = total - numOfCones;
//
//         if(totalLeft < total ) {
//             console.log(total + " cones sold...");
//
//             if (totalLeft > total) {
//                 console.log("cannot sell you " + numOfCones + " cones. I only have " + totalLeft + "...");
//
//                 if (totalLeft === 0) {
//                     console.log("Yay! I sold them all!");
//                 }
//             }
//         }
//
//
// }while (totalLeft >= 0);
//
 })();
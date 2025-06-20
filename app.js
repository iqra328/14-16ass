//                       QUESTION NO 1



// 1. Declare an empty array using JS literal notation to store
// student names in future.
         
                    //   var studentNames = [];








//                       QUESTION NO 2

// 2. Declare an empty array using JS object notation to store
// student names in future.


                //    var studentNames = new Array();

//                               QUESTION NO 3

// 3. Declare and initialize a strings array.


// var colors = ["Red", "Blue", "Green", "Yellow"];




//                                     QUESTION NO 4

// 4. Declare and initialize a numbers array.



            // var numbers = [10, 20, 30, 40, 50];







//                                          QUESTION NO 5

// 5. Declare and initialize a boolean array.



                //        var flags = [true, false, true, false];
                //    console.log(flag[1]);



//                                            QUESTION NO 6

// 6. Declare and initialize a mixed array.

        //    var mixedArray = ["Iqra", 25, true, null, "Student"];

        //               console.log(mixedArray[0]);


                            
//                                        QUESTION NO 7

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:




  // var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

  // for (var i = 0; i < qualifications.length; i++) {
  //   document.write((i + 1) + ") " + qualifications[i] + "<br>");
  // }
                                       
//                                         QUESTION NO 8

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


var arr = ["Michael", "John", "Tony"];
var array = [320, 230, 480];
var totalMarks = 500;

for (var i = 0; i < arr.length; i++) {
  var percentage = (array[i] / totalMarks) * 100;
  document.write("Score of " + arr[i] + " is " + array[i] + ".");
  document.write("Percentage: " + percentage.toFixed(0) + "%" + "<br><br>");
}




//                                             QUESTION NO 9

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then


// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


var colors = ["Red", "Green", "Blue"];
document.write("<b>Original Colors:</b><br>" + colors + "<br><br>");

var addStart = prompt("Which color do you want to add to the beginning?");
colors.unshift(addStart);
document.write("<b>After adding to beginning:</b><br>" + colors + "<br><br>");

var addEnd = prompt("Which color do you want to add to the end?");
colors.push(addEnd);
document.write("<b>After adding to end:</b><br>" + colors + "<br><br>");


colors.unshift("Purple", "Pink");
document.write("<b>After adding two more to beginning:</b><br>" + colors + "<br><br>");


colors.shift();
document.write("<b>After deleting first color:</b><br>" + colors + "<br><br>");


colors.pop();
document.write("<b>After deleting last color:</b><br>" + colors + "<br><br>");

var indexToAdd = prompt("At which index do you want to add a color?");
var colorName = prompt("Enter the color name:");
colors.splice(indexToAdd, 0, colorName);
document.write("<b>After adding color at index " + indexToAdd + ":</b><br>" + colors + "<br><br>");

// g. Delete color(s) from user-defined index
var indexToDelete = prompt("At which index do you want to delete color(s)?");
var howMany = prompt("How many colors do you want to delete?");
colors.splice(indexToDelete, howMany);
document.write("<b>After deleting " + howMany + " color(s) from index " + indexToDelete + ":</b><br>" + colors);








//                             QUESTION NO 10
// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


var scores = [320, 230, 480, 120];

document.write("<b>Scores of Students:</b> " + scores + "<br><br>");


scores.sort(function(a, b) {
  return a - b; 
});

document.write("<b>Ordered Scores of Students:</b> " + scores);







//                                     QUESTION NO 11

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.




var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

var selectedCities = cities.slice(0, 3);  

document.write("<b>Cities:</b> " + cities + "<br><br>");
document.write("<b>Selected Cities:</b> " + selectedCities);









//                                   QUESTION NO 12

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


var arr = ["This ", " is ", " my ", " cat"];

var sentence = arr.join("");


document.write("<b>Array:</b> " + arr + "<br><br>");
document.write("<b>String:</b> " + sentence);




//                 question13
// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)



var queue = [];


queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");


document.write("<b>Devices in Queue:</b> " + queue + "<br><br>");


document.write("<b>Out:</b> " + queue.shift() + "<br>");
document.write("<b>Out:</b> " + queue.shift() + "<br>");
document.write("<b>Out:</b> " + queue.shift() + "<br>");
document.write("<b>Out:</b> " + queue.shift() + "<br>");




// 14. Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)





var stack = [];

stack.push("Keyboard");
stack.push("Mouse");
stack.push("Printer");
stack.push("Monitor");


document.write("<b>Devices in Stack:</b> " + stack + "<br><br>");


document.write("<b>Out:</b> " + stack.pop() + "<br>");
document.write("<b>Out:</b> " + stack.pop() + "<br>");
document.write("<b>Out:</b> " + stack.pop() + "<br>");
document.write("<b>Out:</b> " + stack.pop() + "<br>");



// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:




var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");


for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}

document.write("</select>");

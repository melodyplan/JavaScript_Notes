for (var triangle = "#######"; triangle <= triangle.length; triangle += 1)
//while (triangle <= triangle.length) {
  console.log(triangle.length);
  //triangle = triangle + 1;
//}

//for (var number = 0; number <= 12; number += 2)
  //console.log(number);

var number = 0;
while (number <= 7) {
  console.log(number);
  number = number + 1;
}

var triangle = "#";
while (triangle <= "#######") {
  console.log(triangle);
  triangle = triangle += "#";
}

/*it works!!!! it only took me like 20 minutes to figure out, but g'damn it,
it works!! it logs:

#
##
###
####
#####
######
#######

just like it's supposed to yaaaay*/

/* the below is supposed to go through 1-100 and say Fizz/Buzz/FizzBuzz 
respectively depending on what it's divisible by. Why does it not work? =( */

for (var number = 0; number <= 100; number++) {
  console.log(number);
  if (number = number % 3 == 0)
    console.log("Fizz");
  else if (number = number % 5 == 0)
    console.log("Buzz");
 else (number = number % 3 == 0|| number % 5 == 0)
    console.log("FizzBuzz");
    break;
}
/*if
else if
else*/

console.log("Hello")

## Requirement 1:
### Develop a function isLeapYear, which will accept a year as a number as a parameter and return a boolean response: true if the year is leap and false if not.
### Export this function from the file to make the file a reusable module named `dateUtil.js`.  Make provision so that the file can be imported as a whole default object or can also be imported as parts for just one function.
### Create two files to test the reusable module.
### File 1: Import the reusable function individually defined in the earlier step in your file and log the result by testing one leap year and one non-leap year
### File 2: import the module as a variable and log the result by testing one leap year and one non-leap year using the imported module variable


## Requirement 2:
### Create a TEXT file with an English poem as content. Name this file `poem.txt`.
### Develop a program to print the contents of this file using the fs module imported as a variable `fs` into your script file
### Use `readFile` method, which is a synchronised version, by passing a callback to process the printing of the file data


## Requirement 3:
### Develop a program to fetch pincode data for the following offsets using the public API available for pincode data used in the last session
### Call 1 - offset 31
### Call 2 - offset 51
### Call 3 - offset 61
### Once the data is available, combine the data in one array using the spread operator Lastly, print all the received data at once on the console
### This requirement requires using Promise.all by using the promises collected from fetch calls


## Requirement 4:
### Develop a sprint that will attach 'exit' and 'unhandledRejection' events to the 'process' object
### Develop a Promisified version of fs.readFile sync function and attach a then and catch handler to the returned promise when that new function is called
### Use incorrect file name so there will be an exception thrown and the code in catch handler is executed, throw a new Error from catch handler and check us the unhandledRejection event is called
### Print messages from the ';exit; as well as 'unhandledRejection' events are called to show what caused the event call


## Requirement 5:
### Develop scripts to demonstrate map and filter function of JavaScript Arrays
### Use the response.json file attached as data which will be stored in a variabled named response
### Create a list of objects which will have only name and year properties using map function and only objects having year higher than 2020 using filter operation
### Print the resulting array on console for verification


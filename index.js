// Create a FacebookUser class with one attribute: name.
// In a main function use the array below to create an array of FacebookUser
// objects and console.log that new array.
//


myArray = ['Marvin', 'Ferris', 'Brynn', 'Damian', 'Whitney', 'Leila', 'Frances', 'Keith', 'Cara',
    'Ainsley', 'Adrian', 'Adam', 'Iona', 'Akeem', 'Scarlett', 'Murphy', 'Angelica', 'Georgia', 'Calvin',
    'Amy', 'Merrill', 'Gloria', 'Charissa', 'Colorado', 'Inga', 'Eden', 'Carla', 'Hedley', 'Thaddeus', 'Maggie',
    'Kimberly', 'Ezra', 'Kane', 'Candace', 'Cade', 'Dante', 'Scott', 'Philip', 'Dieter', 'Kristen', 'Nerea', 'Ivor', 'Stacey',
    'Tanner', 'Judith', 'Emery', 'Lionel', 'Josiah', 'Wesley', 'Anne', 'Lane', 'Kameko', 'Colleen', 'Travis', 'Abdul', 'Scarlet',
    'Quail', 'Larissa', 'Palmer', 'Irene', 'Cherokee', 'Rajah', 'Maxine', 'Yen', 'Bruce', 'Matthew', 'Ivan', 'Georgia', 'Charissa',
    'Thaddeus', 'Jack', 'Dean', 'Florence', 'Madonna', 'Dennis', 'Zeus', 'Destiny', 'Maia', 'Mara', 'Florence', 'Anika', 'Brenda',
    'Jocelyn', 'Zia', 'Kiona', 'Lars', 'Molly', 'Gregory', 'Felix', 'William', 'Dahlia', 'Gil', 'Byron', 'Daria', 'Nevada', 'Claudia',
    'Zelenia', 'Nathan', 'Judah', 'Sheila'];


class FacebookUser {
    constructor(username) {
        this.username = username;
    }
}



let FacebookUsersArray = [];

myArray.forEach(lognewArray);

function lognewArray(){
myArray.push(FacebookUsersArray);
} // you didn't close your function



let u1 = new FacebookUser("test"); // create an object FOR EACH item in the array

//console.log(myArray);

//myArray.push.(FacebookUsersArray);
console.log(FacebookUsersArray);


//myArray.forEach(makenew);

// function makenew() {
//     myArray.push[FacebookUsersArray]
// }




//myArray.push();


//main();
//
// ### Challenge
// In your HTML file, include in below div tag in the position as seen below:
//     ```
// <body>
// <div id="classwork"></div>
// <script src="index.js"></script>
// </body>
// ```
// Using the array you created in the problem above, concatenate every element's name attribute to the [OBJECT NAME] position below. Make sure each element is no longer an array and concatenating each new string to a new variable.
//
//     ```
// <h1 style='color:blue;background:red;text-shadow: -2px 2px 2px #000000;'>[OBJECT NAME]</h1>
// ```
// Lastly, assign the new string variable to the code below:
//
//     ```
// document.getElementById("classwork").innerHTML = [NEW STRING]
// ```

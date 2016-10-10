// intentionally made global by leaving off var
log = console.log.bind(console);

var defaultName = 'Sally';

function sayHello(name) {
    if (name === undefined) {
        console.log('Hello, ' + defaultName + '!');
    }
    else {
        console.log('Hello, ' + name + '!');
    }
}

// sayHello('Seven');
// sayHello();

//console.log('hello');

var transportationName = 'Civic';
var transportationType = 'Car';
var $cost = 'Too Much';
var _black = true;
var snake_case_variable_is_okay = true;
var camelCaseIsBest = true;

var thisIsAVariable = true;
let thisBeTrue = true;
const thisNeverChage = true;

function testVariables () {
    var thisIsNotAvailableOutside = true; //now locked up inside of this function (var scope)
    console.log(thisIsAVariable);
}

if (true === true) {
    let thisIsAVariableOutside = true;
}

const thisCannotChange = true;

// thisCannotChange = false;

var firstName = 'Sally';
firstName = 'Jeane';

var lastName; // JS allows you to make variables with no value / will be undefined
// console.log(lastName); //console.log allows you to check what the output is at this point of code

var thisIsUndefined = undefined;
var thisIsNull = null; //value is empty
var thisIsBoolean = true; // or false, turns on and off
var thisIsNumber = 12.23; // JS recognizes as actual number
var thisIsString = '12.23' // JS recognizes as string of text
var thisIsString = 'hello' // can be any of line of text
var thisIsExpression = (1 + 1);
// var thisIsInput = inputs.first_name;

var movieTitle = 'Groundhog Day';
var movieDirector = 'Harold Ramis';
var movieYear = 1993;
var movieGenre = 'Drama/Comedy'
var isMovie = true;
//console.log(movieTitle, movieDirector, movieYear, movieGenre, isMovie);

var verb = 'run';
var sentence = 'Flying by the tower, I ' + verb + 'to safety.'; //concatenation
console.log(sentence);

var verb = 2;
var sentence = 12 + verb + 12;
console.log(sentence);

var verb = 'ran';
var sentence = `Flying by the tower, I ${verb} to safety.`; //string inturpulation (templating) / can inject var right into the string
console.log(sentence);

var on = true;
var ternary = (on ? 'The light is on.' : 'The light is off.');
console.log(ternary);



// log(thisIsAVariableOutside);

// console.log(thisIsNotAvailableOutside);

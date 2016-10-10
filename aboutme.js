/* - First name
- Last name
- Email address
- Grew up in the city (as Boolean)
- Number of years in college (as Number)
- High school graduation year (as Number)
- Number of pets (as Number)
- Number of children (as Number)
- Favorite genre of music
- Favorite movie */

var firstName = 'Sally';
var lastName = 'Wieland';
var emailAddress = 'sallybwieland@gmail.com';
var cityDweller = true;
var yearsInCollege = 4;
var hsGraduation = 2011;
var hsGraduationDate = new Date();
    hsGraduationDate.setFullYear(2011, 5, 20);
var numberOfPets = 2;
var numberOfChildren = 0;
var favoriteMusicGenre = 'Hip-Hop';
var favoriteMovie = 'Groundhog Day';

console.log(firstName, lastName, emailAddress, cityDweller, yearsInCollege, hsGraduation, hsGraduationDate, numberOfPets, numberOfChildren, favoriteMusicGenre, favoriteMovie)

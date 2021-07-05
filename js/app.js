'use strict';
let firstname = prompt('Welcome to my guessing game ! write your first name please :');
alert('Welcome ' + firstname + ' nice to meet you , let\'s start guessing !');

let favcolor = prompt('Is My Favourite color pink ?');

favcolor = favcolor.toLowerCase();

if (favcolor === 'yes') {

    alert('Excellent '+firstname+' yes it is Pink ! Such a beautiful color !');

}
else if (favcolor === 'no') {
    alert('Sorry '+firstname+ ' wrong answer , pink was indeed my favourite !');
}
    

else {
    alert('please write yes or no');
}

let favseason = prompt('Is My Favourite season summer ?');

favseason = favseason.toLowerCase();

if (favseason === 'yes') {

    alert('Nop '+firstname+' I hate Summer !');

}
else if (favseason === 'no') {
    alert('correct answer '+firstname+' Summer is NOT my favourite season !');
}
    

else {
    alert('please write yes or no');
}

let favfruit = prompt('Is My Favourite fruit Strawberries ?');

favfruit = favfruit.toLowerCase();

if (favfruit === 'yes') {

    alert('You are correct '+firstname+' Strawberries are my favourites , So delicious !');

}
else if (favfruit === 'no') {
    alert('Sorry '+firstname+' wrong answer !');
}
    

else {
    alert('please write yes or no');
}


let favdrink = prompt('Is My Favourite drink Tea ?');

favdrink = favdrink.toLowerCase();

if (favdrink === 'yes') {

    alert('I\'m sorry '+firstname+' My favourite drink is Coffee !');

}
else if (favdrink === 'no') {
    alert('Indeed '+firstname+' my favourite drink is definitely not tea !');
}
    

else {
    alert('please write yes or no');
}


let favpet = prompt('Do you think My Favourite pet would be a Dog?');

favpet = favpet.toLowerCase();

if (favpet === 'yes') {

    alert('Nop ! sorry '+firstname+' I\'m actually afraid of dogs !');

}
else if (favpet === 'no') {
    alert('correct answer '+firstname+' my favourite pet would be a cat ! they are adorable !');
}
    

else {
    alert('please write yes or no');
}

alert('thanks for playing '+firstname+' please click ok to continue to my website')






'use strict';
let firstname = prompt('Welcome to my guessing game ! write your first name please :');
alert('Welcome ' + firstname + ' nice to meet you , let\'s start guessing !');
let score=0;

let favcolor = prompt('Is My Favourite color pink ?');

favcolor = favcolor.toLowerCase();

if (favcolor === 'yes'||favcolor === 'y') {
    score++;
    alert('Excellent '+firstname+' yes it is Pink ! Such a beautiful color !');

}
else if (favcolor === 'no'||favcolor === 'n') {

    alert('Sorry '+firstname+ ' wrong answer , pink was indeed my favourite !');

}


else {
    alert('please write yes or no');
}

let favseason = prompt('Is My Favourite season summer ?');

favseason = favseason.toLowerCase();

if (favseason === 'yes'||favseason === 'y') {

    alert('Nop '+firstname+' I hate Summer !');


}
else if (favseason === 'no'||favseason === 'n') {score++;
    alert('correct answer '+firstname+' Summer is NOT my favourite season !');

}


else {
    alert('please write yes or no');
}

let favfruit = prompt('Is My Favourite fruit Strawberries ?');

favfruit = favfruit.toLowerCase();

if (favfruit === 'yes'||favfruit === 'y') {score++;

    alert('You are correct '+firstname+' Strawberries are my favourites , So delicious !');

}
else if (favfruit === 'no'||favfruit === 'n') {
    alert('Sorry '+firstname+' wrong answer !');

}


else {
    alert('please write yes or no');
}


let favdrink = prompt('Is My Favourite drink Tea ?');

favdrink = favdrink.toLowerCase();

if (favdrink === 'yes'||favdrink === 'y') {

    alert('I\'m sorry '+firstname+' My favourite drink is Coffee !');

}
else if (favdrink === 'no'||favdrink === 'n') {score++;
    alert('Indeed '+firstname+' my favourite drink is definitely not tea !');

}


else {
    alert('please write yes or no');
}


let favpet = prompt('Do you think My Favourite pet would be a Dog?');

favpet = favpet.toLowerCase();

if (favpet === 'yes'||favpet === 'y') {

    alert('Nop ! sorry '+firstname+' I\'m actually afraid of dogs !');

}
else if (favpet === 'no'||favpet === 'n') {score++;
    alert('correct answer '+firstname+' my favourite pet would be a cat ! they are adorable !');

}


else {
    alert('please write yes or no');
}

alert('you have a score of '+ score+'/5');

alert('thanks for playing '+firstname+' please click ok to continue to my website')


for (let i = 4; i > 0; i--) {
    alert('let\'s play a game and guess the number of my role modles in life ! you can choose a number from 1 to 20 ! Let\'s start ! you have ' + i + ' attempts ');
    let answer = prompt('write down your answer please :');
    if (answer = 10) {
        alert(' Well Done ' + firstname + ' It\'s the correct number !');
        score++;
        break;
    }
    else if (answer > 10){
        alert('Oops ! you\'ve gone too high ' + firstname + ' !');}
    else if (answer < 10){
        alert('Oops ! you\'ve gone too low ' + firstname + ' !');
}
alert('The number of my role modles in life ' + firstname + ' is 10 !');}
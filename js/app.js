
'use strict';

let score = 0;
let Name = prompt('what\'s your name?');
alert('Hi mr/s ' + Name);

let userName = confirm('Are you sure do you want to enter?');
console.log(userName)

let hunger = prompt('Do You think i\'m hangry ?', 'yes/no ');

console.log(hunger)
hunger = hunger.toLowerCase();
console.log(hunger)

if (hunger === 'yes' || hunger === 'y') {
    alert('You\'r right ' + Name);
    score++;
} else if (hunger === 'no' || hunger === 'n') {
    alert(' no, i\'m always hungry lol ')
    console.log(hunger);

} else {

    alert('please select again');
}


let choiceing = confirm('do you think i like sea food?')

if (choiceing) {
    alert('yeah i\'m ')
    score++;

} else {
    alert('wrong ,  actually i\'m!')
}

let junkFood = confirm('Do think I like Junk food?')
// console.log(junkFood);
if (junkFood === true) {
    alert('Right hahah ')
    score++;

} else {
    alert('no, i do !')
}


for (let i = 1; i < 5; i++) {

    let gussing = prompt('guss my age between 20/25?');

    if (gussing == '23') {

        alert('right');
        score++;
        break;

    }
    else if (gussing > '23') {

        alert('too high');
    }


    else if (gussing < '23') {
        alert('too low');
    }
    else {
        alert('welcome')
    }
}
alert('my age 23!')





// for (let i = 1; i < 7; i++) {

//     let boysdates = ['1997 ', '1998 ', '1996 ', '1995 '];

//     let choice = prompt('So what\'s my birth? ' + boysdates);

//     if (choice === '1997') {
//         alert('Right!');
//         score++;

//         break;

//     } else if (choice)
//         alert('not correct')

// }
// alert('correct anwser is 1997')



 let myFavfood = ['shawrma ', 'mansf', 'fahita', 'mushroom','checkin','grill','saj'];
let favFoood = null;

 for (let j=0 ;j<6 ;j++){

 favFoood = prompt('what\'s my favorite food?');
favFoood=favFoood.toLowerCase();

for(let i = 0 ; i < myFavfood.length ; i++ ){
if(favFoood === myFavfood[i]){

    alert('correct !');
    j= 6
    break;
}

}

}



let welcoming = confirm('Welcome to page owner ' + Name)
console.log(welcoming)


alert('your scores is :' + score);



'use strict';


let Name = prompt('what\'s your name?');
alert('Hi mr/s ' + Name);

let userName = confirm('Are you sure do you want to enter?');
console.log(userName)

let hunger = prompt('Do You think i\'m hangry ?','yes/no ');

 console.log(hunger)
hunger = hunger.toLowerCase();
 console.log(hunger)

if(hunger === 'yes') {
 alert('welcome to our resturent ' + Name);

}else if(hunger === 'no'){
    alert('anytime ')
console.log(hunger);

} else{

    alert('please select again');
}


let choiceing = confirm('do you think i like sea food?')

if(choiceing){
    alert('yeah i\'m healthy')
}else{
    alert('wrong ,  actually i\'m!')
}



let asking = prompt('what do you think my age?',' 18/23 ');

if(asking ==='23') {
    alert('Excelent!')
}else{
    alert('omg xD you made my day')
}






let welcoming = confirm('Welcome to my page ' + Name )
console.log(welcoming)

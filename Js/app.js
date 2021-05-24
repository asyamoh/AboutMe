
'use strict'

let pet = prompt ('do you think I am a cat person?') ;

pet = pet.toUpperCase('')

if (pet == 'YES' || pet == 'Y') {
       alert('YOU ARE WRONG!');
    console.log('WRONG'+pet)
    
     } else if (pet == 'NO' || pet == 'N') {
     
         alert ('Hurrayy!right')
         console.log('RIGHT!'+pet)
    }

       let month = prompt ('is November my fvrt month of the year ?');
       month = month.toUpperCase('')
       if (month == 'YES'|| month == 'Y'){
           alert('wow! are we a close friends or something how did you know :P');
           console.log('RIGHT!'+ month)
       } else if (month == 'NO'|| 'N') {

        alert('it is very clear that we do not know each other :(')
        console.log('WRONGG' + month)
       }

       let hobby = prompt('do you think swimming is my hobby?');
    hobby = hobby.toUpperCase()
    if (hobby == 'YES' || hobby == 'Y') {
     console.log('Amazing ,impressed!'+hobby)/     
     alert('AMAZING!');
    } else if (hobby == 'NO' || hobby == 'N') {
    alert('sorry, Wrong ')
    }
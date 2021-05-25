
'use strict'; 

let user = prompt('Hola, what is your name?');
    alert ('welcome! nice to meet you'+' ' + user)

let pet = prompt ('do you think I am a cat person?') ;

pet = pet.toUpperCase('')

if (pet == 'YES' || pet == 'Y') {
       alert('YOU ARE WRONG!');
   // console.log('WRONG'+pet)
    
     } else if (pet == 'NO' || pet == 'N') {
     
         alert ('Hurrayy!right')
         //console.log('RIGHT!'+pet)
    }
      let month = prompt ('is November my fvrt month of the year ?');
      month = month.toUpperCase('')
       if (month == 'YES'|| month == 'Y'){
           alert('wow! are we a close friends or something how did you know :P');
         //  console.log('RIGHT!'+ month)
       } else if (month == 'NO'|| 'N') {
        alert('it is very clear that we do not know each other :(')
      //console.log('WRONGG' + month)
     }

       let hobby = prompt('do you think swimming is my hobby?');
    hobby = hobby.toUpperCase()
    if (hobby == 'YES' || hobby == 'Y') {
     //console.log('Amazing ,impressed!'+hobby)/     
     alert('AMAZING!');
    } else if (hobby == 'NO' || hobby == 'N') {
    alert('sorry, Wrong ')
    }
    

    let subject = prompt('was calculas my favourite subject?');
    subject = subject.toUpperCase()

 if (subject == 'YES' || subject == 'Y') {
    alert('No' +' '+ user +' ' + 'Come on please who likes calculas!...' );

} else if (subject == 'NO' || subject == 'N') {
     alert('thank you!' +'even René Descarte himself did not understand it!');
   // console.log('it is very obvious' + ' '+ user+ ' ' + 'smartie')

}









let favColor = ['blue','white','red','pink'];
let myColor = favColor[0]


for (let index = 0 ; index < favColor.length; index++)

let colorGuess = prompt ('guess my fvrt color?');

if (colorGuess == favColor[0]){
  alert ('right!')
  break;

}

else if (colorGuess == favColor[2]){
  colorGuess = prompt ('wrong!');
}
else if (colorGuess == favColor[3]){
  colorGuess = prompt ('wrong!');
}
else if (colorGuess == favColor[4]){
colorGuess = prompt ('wrong!');

}
else if (colorGuess == favColor[5]){
  colorGuess = prompt ('wrong!');
}

else {
  alert ('noo!wrong guess');
   break;
}

 

 



  










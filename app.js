alert("welcome to my page");

var color=prompt('enter cat color (black)or(white)');
while(color!=='black'&& color!=='white'){

color=prompt('enter pic color (white)or(black)');

}
var pic=prompt('how many pic you want ');

for(var i=0;i<pic;i++){
document.write(i);
   
     
if( color =="black"){
    document.write('<img class="imgColor" src="data:image/jpeg;base64,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"/>');
}
else{
    document.write('<img src="https://i1.wp.com/ideasfornames.com/wp-content/uploads/2019/11/shutterstock_517303600.jpg?w=1000&ssl=1"/>');
}

}
function ShowMessage(firstName, lastName) {
    alert("hi " + firstName + " " + lastName);
}

var firstName= prompt('write your first name:');
var lastName= prompt('write your last name:');
ShowMessage(firstName, lastName);
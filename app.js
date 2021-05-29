alert("welcome to my page");

var color=prompt('enter pic color (blue)or(red)');
while(color!=='blue'&& color!=='red'){

color=prompt('enter pic color (blue)or(red)');

}
var pic=prompt('how many pic you want ');

for(var i=0;i<pic;i++){
document.write(i);
   
     
if( color =="blue"){
    document.write('<img class="imgColor" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/1024px-Solid_blue.svg.png"/>');
}
else{
    document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Red.svg/1200px-Red.svg.png"/>');
}

}
function ShowMessage(firstName, lastName) {
    alert("hi " + firstName + " " + lastName);
}

var firstName= prompt('write your first name:');
var lastName= prompt('write your last name:');
ShowMessage(firstName, lastName);
$(document).ready(function(){

var friends=["Rupa","Hanshika","Shyamalene","Gracia"];

friends.forEach(function(friend){
alert('Hi ' + friend + ' Good Morning ');

var total=400;
multiplys= [20, 1, 2, 5];
multiplys.forEach(function(multiply){
  total/=multiply;
});
console.log(total)
});
});

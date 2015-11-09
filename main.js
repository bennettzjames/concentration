console.log('link check');

$(document).ready(function(){
	
$wholeBoard = $('.game-board');

//to shuffle gameboard:

//randomize array, then create divs

//creat shuffle array with .shuffle, then loop through new array, for each time it loops creat a div for each, and append to col 1

outputArray = [];
backsideIds = [];
var counter = 0;
flippedArray = [
'1', '1', '2', '2', '3', '3', '4', '4'];

//below is the Fisher-Yates shuffle. aka the knuth shuffle. I found it on stackoverflow and followed the link to the github page. I couldn't get the underscore shuffle to work right. 
shuffle = function(array) {
  var currentIndex = flippedArray.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;


}; 

shuffle(flippedArray);
console.log(flippedArray);



makeBoard = function(event){
	counter = 0;
	for (var i = 0; i < flippedArray.length; i++){
		 console.log(i)
		 $('<div class="square '+flippedArray[i]+'"">').appendTo($wholeBoard);
	}

   };
makeBoard();


// the above makes a div and assigns it a number from the flippedArray

//now i need to make a function that adds an event listener to all of these boxes and shen they are clicked the reveal the corresponding number

//then if they match, they remain up. 

//otherwise they need to flip back. 



var flipCard = function(event){
	var target = event.target;
}



});
console.log('link check')

$(document).ready(function(){
	
$wholeBoard = $('.game-board')

//to shuffle gameboard:

//randomize array, then create divs

//creat shuffle array with .shuffle, then loop through new array, for each time it loops creat a div for each, and append to col 1

outputArray = [];
backsideIds = [];
var counter = 0;


//below is the Fisher-Yates shuffle. aka the knuth shuffle. I found it on stackoverflow and followed the link to the github page. I couldn't get the underscore shuffle to work right. 
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

flippedArray = ['1', '1', '2', '2'];
shuffle(flippedArray);
// shuffle(boardArray);
console.log(flippedArray);


randomBoard = function(){
	counter = 0;
	var output = ' ';
	for (var i = 0; i < flippedArray.length; i++){
		output += $('<div>');
	}

   }

   console.log(randomBoard);
		//needs to create a new div each time 
		//each div needs to get assigned a number correspoding with the counter
		//then just append that bitch to the 'game-board'
//}



	







var flipCard = function(event){
	var target = event.target;
}



});
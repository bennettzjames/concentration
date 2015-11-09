console.log('link check');

$(document).ready(function(){
	
$wholeBoard = $('.game-board');




//to shuffle gameboard:

//randomize array, then create divs

//creat shuffle array with .shuffle, then loop through new array, for each time it loops creat a div for each, and append to col 1

outputArray = [];
var counter = 0;
flippedArray = ['1', '1', '2', '2', '3', '3', '4', '4'];


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
		 console.log(i);
		 newDiv = $('<div class="covered" square '+flippedArray[i]+'">').text(flippedArray[i]).on('click', flipCard).appendTo($wholeBoard);

	}


   };
makeBoard();




$allSquares = $('.square');

// the above makes a div and assigns it a number from the flippedArray

//now i need to make a function that adds an event listener to all of these boxes and then they are clicked they reveal the corresponding number

//then if they match, they remain up. 

//otherwise they need to flip back. 

//before I can do this, i need to give each square a value. 

var flipCard = function(event){
	var target = event.target;
	if (target.hasClass('covered')){
		target.removeClass('covered');
		target.addClass('square');
		}

//event listener not working right

	//if its covered, then uncover
	//once uncovered, need
		

	};
	


})





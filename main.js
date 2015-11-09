console.log('link check');

$(document).ready(function(){
	
$wholeBoard = $('.game-board');


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
	for (var i = 0; i < flippedArray.length; i++){
		 console.log(i);
		 newDiv = $('<div class="covered square '+flippedArray[i]+'">').text(flippedArray[i]).on('click', makeMatch).appendTo($wholeBoard);
		 console.log(newDiv);

	}


   };
// var flipCard = function(event){
	
// 	var $target = $(event.target);
// 	if ($target.hasClass('covered')){
// 		$target.removeClass('covered');
// 		$target.addClass('square');
// 		}

// 	};


//the makeMatch function needs to count the number of clicks and find matches
//if clickOne's text content = clickTwo's text content, then they keep the class of square
//if they do not match, then they need to revert to covered. 
//maybe also setTimeout, so the user can see the second choice before the cards turn back
var $counter = 0;

var makeMatch = function(event){
	
	var $target = $(event.target);
	if ($counter <2){
		$target.removeClass('covered');
		$target.addClass('square');
	} else if ($target > 2) {
		$target.addClass('covered')
	}
			

$counter++;

}

makeBoard();
makeMatch();




$allSquares = $('.square');


});





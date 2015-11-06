console.log('link check')




	$(document).ready(function(){
	

$wholeBoard = $('.game-board')

$boxOne = $('.one')
$boxTwo = $('.two')
$boxThree = $('.three')
$boxFour = $('.four')
// $boxFive = $('.five')
// $boxSix = $('.six')
// $boxSeven = $('.seven')
// $boxEight = $('.eight')
// $boxNine = $('.nine')
// $boxTen = $('.ten')
// $boxEleven = $('.eleven')
// $boxTwelve = $('.twelve')
// $boxThirteen = $('.thirteen')
// $boxFourteen = $('.fourteen')
// $boxFifteen = $('.fifteen')
// $boxSixteen = $('.sixteen')


var gamePieces = ['$boxOne', '$boxTwo', '$boxThree', '$boxFour']


var randomBoard = function() {
   for (var i=0;i<gamePieces.length;i++) {
      $(".square").append($wholeBoard[i]);
   }
};

// var randomBoard = function(){
// 	for (i = 0; i<gamePieces.length; i++)
// 	$wholeBoard.math.floor(math.random(i * 4) +1)
// };



flippedArray = ['1', '2', '1', '2',];
	
	flippedValue = [ ]



var counter = 0


var flipCard = function(event){
	var target = event.target;
}



});
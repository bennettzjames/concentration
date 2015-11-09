console.log('link check');

$(document).ready(function(){
    
var $wholeBoard = $('.game-board');
var flippedArray = ['1', '1', '2', '2', '3', '3', '4', '4'];


//below is the Fisher-Yates shuffle. aka the knuth shuffle. I found it on stackoverflow and followed the link to the github page. I couldn't get the underscore shuffle to work right. 
var shuffle = function(array) {
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

var makeBoard = function(event){
  for (var i = 0; i < flippedArray.length; i++){
    console.log(i);
    var newDiv = $('<div class="covered square '+flippedArray[i]+'">');
    newDiv.text(flippedArray[i]);
    newDiv.on('click', checkForMatch)
    newDiv.appendTo($wholeBoard);
    console.log(newDiv);
  }
};
// var flipCard = function(event){
    
//  var $target = $(event.target);
//  if ($target.hasClass('covered')){
//      $target.removeClass('covered');
//      $target.addClass('square');
//      }

//  };


//the checkForMatch function needs to count the number of clicks and find matches
//if clickOne's text content = clickTwo's text content, then they keep the class of square
//if they do not match, then they need to revert to covered. 
//maybe also setTimeout, so the user can see the second choice before the cards turn back
var clicks = 0;
var firstSquareNumberClassName;


var checkForMatch = function(event){
    // it's a match when all the classes are the same
    var $target = $(event.target);

    // if it's the first square clicked then remove class covered
    // if it's the second square clicked then check for a match
      // if it is a match keep the covered class off
      // else put the covered class back on
    clicks++;
    console.log('clicks:', clicks);
    var numberClasses = ['1', '2', '3', '4'];

    var currentSquareNumberClassArray = numberClasses.filter(function(numberClass){
      return $target.hasClass(numberClass);
    });

    currentSquareNumberClassName = currentSquareNumberClassArray[0];
    console.log(currentSquareNumberClassName);
    if (clicks === 1) {
      $target.removeClass('covered');
      firstSquareNumberClassName = currentSquareNumberClassArray[0];
      console.log('firstSquare:', firstSquareNumberClassName);
    } else if (clicks === 2) {
      console.log('two clicks')
      // check for a match
      // if match, keep square class
      // if not a match, add back on coverd class
      $target.removeClass('covered');

      // find the number for the two squares
      console.log(firstSquareNumberClassName);
      console.log(currentSquareNumberClassName);
      clicks = 0;
      if(firstSquareNumberClassName === currentSquareNumberClassName) {
        
      } else {
        $target.addClass('covered');
      }

      
    }
};

shuffle(flippedArray);
console.log(flippedArray);
makeBoard();

});





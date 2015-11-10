console.log('link check');

$(document).ready(function(){
 
var $wholeBoard = $('.game-board');

var flippedArray = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6'];

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

//sung helped with the checkForMatch function

var clicks = 0;

var firstSquareNumberClassName;

var checkForMatch = function(event){
  var $target = $(event.target);

    var flipBack = function(){
      $('.square').addClass('covered');
    }
  
  clicks++;
  console.log('clicks:', clicks);
  var numberClasses = ['1', '2', '3', '4', '5', '6',];

  var currentSquareNumberClassArray = numberClasses.filter(function(numberClass){
    return $target.hasClass(numberClass);
  });

  currentSquareNumberClassName = currentSquareNumberClassArray[0];
    console.log(currentSquareNumberClassName);
  if (clicks === 1) {
    $target.removeClass('covered');
    $target.addClass('match')
    firstSquareNumberClassName = currentSquareNumberClassArray[0];
      console.log('firstSquare:', firstSquareNumberClassName);
  }else if (clicks === 2) {
    console.log('two clicks')
    $target.removeClass('covered');
    console.log(firstSquareNumberClassName);
    console.log(currentSquareNumberClassName);
    clicks = 0;
      if(firstSquareNumberClassName === currentSquareNumberClassName) {
        return matchCounter+1;
      }else if(firstSquareNumberClassName !== currentSquareNumberClassName){
        $target.removeClass('covered');
        $target.addClass('match');
        setTimeout(flipBack, 800)
        clicks = 0;
      }
  else {
        $target.addClass('covered');
  }
};
};
 
shuffle(flippedArray);
console.log(flippedArray);
makeBoard();
});





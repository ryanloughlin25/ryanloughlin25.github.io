var selectedSquare = null;

var populateBoard = function(size) {
  for(var i = 0; i < size; i++) {
    var row = $('<div>', {class: 'row'});
    for(var j = 0; j < size; j++) {
      var square = $('<div>', {class: 'square'});
      square.data('row', i);
      square.data('column', j);
      row.append(square);
    }
    $('.board').append(row);
  }
};

var clearSelectedSquare = function() {
  selectedSquare = null;
  $('.square').css('background', '');
};

var setSelectedSquare = function() {
  selectedSquare = $(event.target);
  selectedSquare.css('background', 'blue');
};

var clickSquare = function(event) {
  clearSelectedSquare();
  setSelectedSquare();
};

$(document).ready(function() {
  populateBoard(6);
  $('.square').on('click', clickSquare);
});

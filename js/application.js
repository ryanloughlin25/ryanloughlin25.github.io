var selectedPiece = null;

var populateBoard = function(size) {
  for(var i = 0; i < size; i++) {
    var row = $('<div>', {class: 'row'});
    for(var j = 0; j < size; j++) {
      var square = $('<div>', {class: 'square'});
      square.attr('row', i);
      square.attr('column', j);
      row.append(square);
    }
    $('.board').append(row);
  }
};

var clearSelectedPiece = function() {
  if (selectedPiece) {
    selectedPiece.css('opacity', 0.75);
  }
  selectedPiece = null;
  $('.square').removeClass('available_move');
};

var setSelectedPiece = function() {
  selectedPiece = $(event.target);
  selectedPiece.css('opacity', 1);
};

var colorAvailableMoves = function () {
  var square = selectedPiece.parent();
  var row = parseInt(square.attr('row'));
  var column = parseInt(square.attr('column'));
  var locations = [
    {row: row - 1, column: column},
    {row: row + 1, column: column},
    {row: row, column: column - 1},
    {row: row, column: column + 1},
  ];
  squares = locations.forEach(function(location) {
    var square = $('.square[row="' + location.row + '"][column="' + location.column + '"]');
    square.addClass('available_move');
  });
};

var clickPiece = function(event) {
  clearSelectedPiece();
  setSelectedPiece();
  colorAvailableMoves();
};

$(document).ready(function() {
  populateBoard(6);
  var img = $('<img>', {src: 'imgs/footman_front.png'});
  $('.square:eq(27)').append(img);
  var img = $('<img>', {src: 'imgs/footman_front.png'});
  $('.square:eq(14)').append(img);
  $('.board').on('click', 'img', clickPiece);
  $('body').on('click', function(event) {
    if (!$(event.target).is('img')) {
      clearSelectedPiece();
    }
  });
  $('.board').on('click', '.available_move', function(event) {
    selectedPiece.remove();
    $(event.target).append(selectedPiece);
  });
});

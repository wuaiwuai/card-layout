
var cardName = "card";

$('.card').wrap('<div class="' + cardName + "-scene" + '"></div>');
$('.card').append('
  <div class="' + cardName + '-light"></div>\
  <div class="' + cardName + "-side " + cardName + '-top"></div>\
  <div class="' + cardName + "-side " + cardName + '-left"></div>\
  <div class="' + cardName + "-side " + cardName + '-right"></div>\
  <div class="' + cardName + "-side " + cardName + '-bottom"></div>\
  ');

var colorThief = new ColorThief();
var cardOneImg = $('#card-1 .card-face img').attr("src");
// colorThief.getColor(cardOneImg);
console.log(cardOneImg)

// console.log(colorThief.getColor(cardOneImg));
$(document.body).ready(function() {
  var tmp = 500;
  $('.title').fadeIn(tmp);
  $('.section-title').fadeIn(tmp += 500);
  $('.lists > div:nth-child(1)').fadeIn(tmp += 500);
  $('.lists > div:nth-child(2)').fadeIn(tmp += 1000);
  $('.lists > div:nth-child(3)').fadeIn(tmp += 1000);
})
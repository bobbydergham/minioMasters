$(document).ready(function () {
  var requestURL = 'http://localhost:3000/images';
  $.getJSON(requestURL, function (imgList) {
    imgList.forEach(function (myImg) {
      console.log(myImg.src);
      $('#image-container').append('<img src="' + myImg.src + '"><p>' + myImg.caption + '</p>');
    });
  });
});

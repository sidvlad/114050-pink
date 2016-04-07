function initMap() {
  var mapOptions = {
    zoom: 16,
    center: {lat: 59.936593, lng: 30.321051},
    disableDefaultUI: true,
    scrollwheel: false
  }
  var map = new google.maps.Map(document.getElementById("map"),
       mapOptions);

  var image = 'img/icon-map-marker.svg';
  var beachMarker = new google.maps.Marker({
    position: {lat: 59.936113, lng: 30.321051},
    map: map,
    icon: image
  });
}

var burger = document.querySelector("#burger")
var menu = document.querySelector(".main-header")

function toggle(e){
    e.preventDefault();
    menu.classList.toggle('main-header__expanded');
}

if (burger) {
    burger.addEventListener('click',toggle);
}

menu.classList.remove("main-header__flow");

$('.btn__modal').click(function() {
  $('.modal-submitted').addClass('modal-hide');
});

$('.btn__modal').click(function() {
  $('.modal-wrong').addClass('modal-hide');
});

$('.btn--submit').click(function() {
  $('.modal-submitted').removeClass('modal-hide');
   return false;
});

$('.btn--submit').click(function() {
  $('.modal-wrong').removeClass('modal-hide');
   return false;
});
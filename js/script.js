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

var form = document.querySelector(".form-fields");

if (form){
    form.onsubmit=function(){
    var modalList = ['.modal-submitted', '.modal-wrong'];
    var modalElement = modalList[Math.floor(Math.random()*(modalList.length))];
    var modalWnd = document.querySelector(modalElement);
    modalWnd.classList.remove("modal-hide");
    closeModal(modalWnd);
    return false;
  };
}

function closeModal(wnd){
    var btnClose = wnd.querySelector(".btn__modal");
    btnClose.addEventListener('click',function(){wnd.classList.add("modal-hide")});
}

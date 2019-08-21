document.querySelector(".map").classList.remove("map--no-js");
var myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [59.938872, 30.323037],
        zoom: 13,
        controls: []
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    },{
      iconLayout: "default#image",
      iconImageHref: '../img/map-marker.svg',
      iconImageSize: [35, 35]
    });

    myMap.geoObjects.add(myPlacemark);

};

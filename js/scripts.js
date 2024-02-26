ymaps.ready(init);

function init() {
    // Определяем начальные координаты
    let centerCoords = [52.976043, 36.064394];
    let placemarkCoords = [52.976043, 36.064394];

    if (window.matchMedia("(max-width: 700px)").matches) {
        // Если ширина экрана меньше или равна 700px, сохраняем начальные координаты
        centerCoords = [52.976043, 36.064394];
        placemarkCoords = [52.976043, 36.064394];
    } else {
        // Если ширина экрана больше 700px, изменяем координаты
        centerCoords = [52.976044, 36.062816];
        placemarkCoords = [52.976041, 36.064381];
    }

    var myMap = new ymaps.Map("map", {
            center: centerCoords,
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаем метку с заданными координатами.
        myPlacemark = new ymaps.Placemark(placemarkCoords, {}, {
            preset: 'islands#redIcon',
            draggable: false
        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);
}


document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-item .nav-link'); // Убедитесь, что выбираете .nav-link внутри .nav-item
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);

    navLinks.forEach((link) => {
        link.addEventListener('click', function() {
            bsOffcanvas.hide(); // Используйте метод hide для закрытия offcanvas меню
            this.blur(); // Снимаем фокус с элемента после клика
        });
    });
});


document.addEventListener('hidden.bs.offcanvas', function () {
    // Установка фокуса на body или другой безопасный элемент
    document.body.focus();
});



$(document).ready(function(){
    $('.card').click(function(){
        $(this).toggleClass('flipped');
    });
});

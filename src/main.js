import './main.scss'
import { initNewsSlider, initServicesSlider, initReviewsSlider, initBannerSlider } from './js/slider.js';

initNewsSlider()
initServicesSlider()
initReviewsSlider()
initBannerSlider()

// Функция инициализации
function initMap() {
    // Точные координаты для Ижевск, ул. Промышленная, 6
    const center = [56.83258288764716,53.23371241534423];

    const map = new ymaps.Map("yandex-map", {
        center: center,
        zoom: 16, // Масштаб от 0 до 19
        // Убираем лишние кнопки управления для чистоты дизайна
        controls: []
    });

    // Создаем метку (маркер)
    const placemark = new ymaps.Placemark(center, {
        // Контент при клике на метку
        balloonContentHeader: "Торгово-промышленная палата",
        balloonContentBody: "г. Москва, ул. Ильинка, 6/1",
        hintContent: "Мы здесь!"
    }, {
        // Настройки иконки метки
        preset: 'islands#redDotIcon', // Стандартная красная точка
        // Если хочешь свою картинку вместо точки:
        // iconLayout: 'default#image',
        // iconImageHref: 'img/map-marker.svg',
        // iconImageSize: [40, 40],
        // iconImageOffset: [-20, -40]
    });

    // Добавляем зум (кнопки +/-) слева
    map.controls.add('zoomControl', {
        float: 'none',
        position: {
            right: 15,  // отступ от правого края
            top: 150    // отступ от верхнего края
        }

    });

// Добавляем кнопку геолокации слева
    map.controls.add('geolocationControl', {
        float: 'right'
    });

// Добавляем переключатель типов карт (Схема/Спутник) слева
    map.controls.add('typeSelector', {
        float: 'right'
    });

// Добавляем кнопку пробок слева
    map.controls.add('trafficControl', {
        float: 'right'
    });

    // Отключаем скролл мышкой (чтобы не мешать листать страницу)
    map.behaviors.disable('scrollZoom');

    // Добавляем метку на карту
    map.geoObjects.add(placemark);
}

// Запуск при полной загрузке API
ymaps.ready(initMap);
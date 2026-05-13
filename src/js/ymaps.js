export const initMap = () => {
    const mapContainer = document.getElementById("yandex-map");

    // 1. Проверяем, есть ли блок для карты на странице
    if (!mapContainer) return;

    // 2. Обертка для инициализации
    const setup = () => {
        // Точные координаты
        const center = [56.83258288764716, 53.23371241534423];

        const map = new ymaps.Map("yandex-map", {
            center: center,
            zoom: 16,
            controls: []
        });

        const placemark = new ymaps.Placemark(center, {
            balloonContentHeader: "Торгово-промышленная палата",
            balloonContentBody: "г. Ижевск, ул. Промышленная, 6",
            hintContent: "Мы здесь!"
        }, {
            preset: 'islands#redDotIcon',
        });

        // Добавляем контролы
        map.controls.add('zoomControl', {
            float: 'none',
            position: { right: 15, top: 150 }
        });
        map.controls.add('geolocationControl', { float: 'right' });
        map.controls.add('typeSelector', { float: 'right' });
        map.controls.add('trafficControl', { float: 'right' });

        map.behaviors.disable('scrollZoom');
        map.geoObjects.add(placemark);
    };

    // 3. Запускаем только когда API готово
    if (typeof ymaps !== 'undefined') {
        ymaps.ready(setup);
    } else {
        console.error("Яндекс.Карты не загружены. Проверьте подключение скрипта в head.");
    }
};
import './main.scss'
import 'select2/dist/css/select2.css';
import 'glightbox/dist/css/glightbox.min.css';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'remodal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import select2 from 'select2';
import GLightbox from 'glightbox';
import { initNewsSlider, initServicesSlider, initReviewsSlider, initBannerSlider, initPrivilegesSlider, initChamberSlider, initChamberDetailSlider } from './js/slider.js';
import { menu } from './js/menu.js';
import { initMap } from './js/ymaps.js';
import { initAosCounters } from './js/count.js';
import { initMouseParallax } from './js/parallax.js';


document.addEventListener('DOMContentLoaded', () => {
    menu()
    initNewsSlider()
    initServicesSlider()
    initReviewsSlider()
    initBannerSlider()
    initPrivilegesSlider()
    initChamberSlider()
    initChamberDetailSlider()
    select2();
    initMap()
    //Селекты
    $('.js-select2').select2({
        width: '100%',
        allowClear: true,
    });
    $('.js-select2').on('select2:unselecting', function (e) {
        $(this).data('unselecting', true);
    }).on('select2:opening', function (e) {
        if ($(this).data('unselecting')) {
            $(this).removeData('unselecting');
            e.preventDefault();
        }
    });

    const lightbox = GLightbox({
        selector: '.glightbox', // Класс для элементов, которые должны открываться в поп-апе
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });
    setTimeout(() => {
    AOS.init({
        easing: 'ease-in-out', // тип сглаживания анимации
        duration: 800, // Скорость анимации в миллисекундах (0.8 сек)
        once: true,    // Анимация сработает только один раз (при скролле обратно блок не будет исчезать)
        offset: 120,   // Элемент начнет анимироваться, не доходя 120px до края экрана
    });
    }, 200);

    initAosCounters();
    initMouseParallax();
});

const handleModalData = (e) => {
    // Ищем, был ли клик совершен по кнопке с нужным атрибутом
    const triggerButton = e.target.closest('[data-remodal-target]');

    // Если кликнули не по кнопке модалки — ничего не делаем
    if (!triggerButton) return;

    // 1. Находим саму модалку по ID, который указан в атрибуте кнопки
    const modalId = triggerButton.getAttribute('data-remodal-target');
    const modal = document.querySelector(`[data-remodal-id="${modalId}"]`);

    if (modal) {
        // 2. Вытаскиваем значения дата-атрибутов из кликнутой кнопки
        const title = triggerButton.getAttribute('data-title');
        const subtitle = triggerButton.getAttribute('data-subtitle');
        const formName = triggerButton.getAttribute('data-form-name');
        const formOption = triggerButton.getAttribute('data-option');

        // 3. Подставляем данные в элементы модалки, если они есть
        if (title) {
            const modalTitle = modal.querySelector('.modal-question__title');
            if (modalTitle) modalTitle.textContent = title;
        }

        if (subtitle) {
            const modalSubtitle = modal.querySelector('.modal-question__subtitle');
            if (modalSubtitle) modalSubtitle.textContent = subtitle;
        }

        if (formName) {
            const hiddenInput = modal.querySelector('input[name="form-name"]');
            if (hiddenInput) hiddenInput.value = formName;
        }

        if (formOption) {
            const hiddenOptionInput = modal.querySelector('input[name="form-option"]');
            if (hiddenOptionInput) hiddenOptionInput.value = formOption;
        }
    }
};

// Навешиваем функцию на событие клика
document.addEventListener('click', handleModalData);
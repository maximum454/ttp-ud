import './main.scss'
import 'select2/dist/css/select2.css';
import 'glightbox/dist/css/glightbox.min.css';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'remodal';
import select2 from 'select2';
import GLightbox from 'glightbox';
import { initNewsSlider, initServicesSlider, initReviewsSlider, initBannerSlider, initPrivilegesSlider, initChamberSlider } from './js/slider.js';
import { menu } from './js/menu.js';
import { initMap } from './js/ymaps.js';


document.addEventListener('DOMContentLoaded', () => {
    menu()
    initNewsSlider()
    initServicesSlider()
    initReviewsSlider()
    initBannerSlider()
    initPrivilegesSlider()
    initChamberSlider()
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
});
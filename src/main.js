import './main.scss'
import 'select2/dist/css/select2.css';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'remodal';
import select2 from 'select2';
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
    });
});
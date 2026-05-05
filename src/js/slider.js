import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export const initNewsSlider = () => {
    const container = document.querySelector('.swiper-slider-news');

    if (!container) return;

    return new Swiper(container, {
        modules: [Navigation, Pagination],
        slidesPerView: 4,
        spaceBetween: 30,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.slider-news-next',
            prevEl: '.slider-news-prev',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            426: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
        }
    });
};

export const initServicesSlider = () => {
    const container = document.querySelector('.swiper-slider-services');

    if (!container) return;

    return new Swiper(container, {
        modules: [Navigation, Pagination],
        slidesPerView: 4,
        spaceBetween: 30,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.slider-services-next',
            prevEl: '.slider-services-prev',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            426: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
        }
    });
};

export const initReviewsSlider = () => {
    const container = document.querySelector('.swiper-slider-reviews');

    if (!container) return;

    return new Swiper(container, {
        modules: [Navigation, Pagination],
        slidesPerView: 4,
        spaceBetween: 30,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.slider-reviews-next',
            prevEl: '.slider-reviews-prev',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            426: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
        }
    });
};
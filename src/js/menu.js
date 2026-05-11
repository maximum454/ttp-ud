import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";

export const menu = () => {
    const btn = document.querySelector('.js-btn-menu');
    const nav = document.querySelector('.nav');
    const body = document.body;

    if (!btn || !nav) return;

    // 1. Клик по кнопке (Открыть/Закрыть)
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Чтобы клик не дошел до document
        nav.classList.toggle('is-active');
        btn.classList.toggle('is-active'); // Если нужно анимировать саму кнопку
        body.classList.toggle('lock');
    });

    // 2. Клик вне меню (Закрыть)
    document.addEventListener('click', (e) => {
        const isClickInsideNav = nav.contains(e.target);
        const isClickOnBtn = btn.contains(e.target);

        if (!isClickInsideNav && !isClickOnBtn && nav.classList.contains('is-active')) {
            nav.classList.remove('is-active');
            btn.classList.remove('is-active');
        }
    });

    // 3. (Опционально) Закрытие по клавише Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('is-active')) {
            nav.classList.remove('is-active');
            btn.classList.remove('is-active');
        }
    });


    const menuItems = document.querySelectorAll('.nav__list > li');

    menuItems.forEach(item => {
        const subMenu = item.querySelector('ul');

        if (subMenu) {
            item.addEventListener('click', function(e) {
                // Если экран мобильный и меню еще не открыто
                if (window.innerWidth <= 1024 && !this.classList.contains('is-open')) {
                    e.preventDefault(); // Запрещаем переход по ссылке
                    this.classList.add('is-open');
                }
            });
        }
    });
};


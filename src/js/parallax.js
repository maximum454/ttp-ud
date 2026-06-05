export const initMouseParallax = () => {
    const items = document.querySelectorAll('.js-parallax-item');

    // Если на странице нет параллакс-элементов, тушим скрипт
    if (!items.length) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    // Слушаем движение мыши и высчитываем координаты относительно центра экрана
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX - window.innerWidth / 2;
        mouseY = e.clientY - window.innerHeight / 2;
    });

    // Функция плавной анимации (сглаживание / линеаризация)
    const tick = () => {
        // Формула плавности: чем меньше шаг (0.08), тем «маслянистее» двигаются элементы
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;

        items.forEach(item => {
            // Берем индивидуальную скорость элемента
            const speed = parseFloat(item.getAttribute('data-speed')) || 0.02;

            // Вычисляем итоговый сдвиг
            const x = currentX * speed;
            const y = currentY * speed;

            // Двигаем элемент через translate
            item.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });

        // Зацикливаем анимацию для постоянной проверки координат
        requestAnimationFrame(tick);
    };

    // Запускаем цикл анимации
    tick();
};

// Безопасный запуск в Vite
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initMouseParallax();
} else {
    document.addEventListener('DOMContentLoaded', initMouseParallax);
}
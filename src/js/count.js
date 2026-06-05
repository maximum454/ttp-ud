export const initAosCounters = () => {
    const counters = document.querySelectorAll('.js-counter');

    counters.forEach(counter => {
        // Получаем целевое число из текста
        const target = parseInt(counter.innerText, 10);
        if (isNaN(target)) return;

        // Сразу сбрасываем в 0, чтобы подготовить к анимации
        counter.innerText = '0';

        const speed = 2000; // Время анимации (2 секунды)

        const animate = () => {
            const count = +counter.innerText;
            const increment = Math.ceil(target / (speed / 16));

            if (count < target) {
                counter.innerText = Math.min(count + increment, target);
                requestAnimationFrame(animate);
            } else {
                counter.innerText = target;
            }
        };

        // Настраиваем MutationObserver — он следит за тем, когда AOS добавит класс анимации
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                // Если AOS добавил класс .aos-animate, значит элемент на экране
                if (mutation.target.classList.contains('aos-animate')) {
                    animate(); // Запускаем цифры
                    observer.disconnect(); // Выключаем слежку за этим элементом
                }
            });
        });

        observer.observe(counter, {attributes: true, attributeFilter: ['class']});
    });
};

// Запуск
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initAosCounters();
} else {
    document.addEventListener('DOMContentLoaded', initAosCounters);
}
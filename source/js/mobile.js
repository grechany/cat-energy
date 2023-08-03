//Открываем и закрываем меню

const buttonMenu = document.getElementById('toggleButton');
const mobileMenu = document.getElementById('menu');

buttonMenu.onclick = function () {
    mobileMenu.classList.toggle('page-header__menu');
    buttonMenu.classList.toggle('page-header__toggler--opened');
    buttonMenu.classList.toggle('page-header__toggler--closed');
};

//Переключаем котов на мобильных

// Функция, которая будет выполнять код, если ширина экрана до 767px
function executeCodeOnSmallScreens() {
    // Получаем ширину экрана
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Если ширина экрана меньше или равна 767px, выполняем код
    if (screenWidth <= 767) {
        // Весь исходный код здесь
        const previousButton = document.getElementById('previousButton');
        const nextButton = document.getElementById('nextButton');
        const exampleSwither = document.getElementById('exampleSwither');
        const imageAfter = document.getElementById('imageAfter');
        const imageBefore = document.getElementById('imageBefore');

        nextButton.onclick = function () {
            exampleSwither.classList.remove('swither__toogler-before');
            exampleSwither.classList.add('swither__toogler-after');
            imageAfter.classList.remove('example__image--active');
            imageBefore.classList.add('example__image--active');
        };

        previousButton.onclick = function () {
            exampleSwither.classList.remove('swither__toogler-after');
            exampleSwither.classList.add('swither__toogler-before');
            imageAfter.classList.add('example__image--active');
            imageBefore.classList.remove('example__image--active');
        };
    }
}

// Вызов функции при загрузке страницы и при изменении размера окна
window.addEventListener('load', executeCodeOnSmallScreens);
window.addEventListener('resize', executeCodeOnSmallScreens);

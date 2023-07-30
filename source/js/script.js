//Открытие и закрытие меню на мобильных

const toggleButton = document.getElementById("toggleButton");
const menu = document.getElementById("menu");

toggleButton.addEventListener("click", function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";
        toggleButton.classList.remove("page-header__toggler--closed");
        toggleButton.classList.add("page-header__toggler--opened");
    } else {
        menu.style.display = "none";
        toggleButton.classList.remove("page-header__toggler--opened");
        toggleButton.classList.add("page-header__toggler--closed");
    }
});
//Конец кода

//Переключаем котов на мобильных
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const exampleSwither = document.getElementById('exampleSwither');
const imageAfter = document.getElementById('imageAfter');
const imageBefore = document.getElementById('imageBefore');

function addEventListenersForSmallScreens() {
  nextButton.addEventListener('click', function () {
    exampleSwither.classList.remove('swither__toogler-before');
    exampleSwither.classList.add('swither__toogler-after');
    imageBefore.classList.add('example__image--active');
    imageAfter.classList.remove('example__image--active');
  });

  previousButton.addEventListener('click', function() {
    exampleSwither.classList.remove('swither__toogler-after');
    exampleSwither.classList.add('swither__toogler-before');
    imageBefore.classList.remove('example__image--active');
    imageAfter.classList.add('example__image--active');
  });
}

function removeEventListenersForSmallScreens() {
  nextButton.removeEventListener('click', function () {
    exampleSwither.classList.remove('swither__toogler-before');
    exampleSwither.classList.add('swither__toogler-after');
    imageBefore.classList.add('example__image--active');
    imageAfter.classList.remove('example__image--active');
  });

  previousButton.removeEventListener('click', function() {
    exampleSwither.classList.remove('swither__toogler-after');
    exampleSwither.classList.add('swither__toogler-before');
    imageBefore.classList.remove('example__image--active');
    imageAfter.classList.add('example__image--active');
  });
}

// Проверяем разрешение экрана при загрузке страницы и добавляем или удаляем обработчики событий
function checkScreenSize() {
  if (window.innerWidth <= 767) {
    addEventListenersForSmallScreens();
  } else {
    removeEventListenersForSmallScreens();
  }
}

// Вызываем функцию проверки разрешения экрана при загрузке страницы и при изменении размера окна
checkScreenSize();
window.addEventListener('resize', checkScreenSize);

//Конец кода
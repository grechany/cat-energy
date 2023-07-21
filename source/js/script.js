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

//Переключение изображений в примере на разрешении до 767px

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const exampleSwither = document.getElementById("exampleSwither");
const exampleImage = document.getElementById("exampleImage");

function applyStyles() {
    if (window.innerWidth <= 767) {
        previousButton.addEventListener("click", function () {
            exampleSwither.classList.remove("swither__toogler-after");
            exampleSwither.classList.add("swither__toogler-before");
            exampleImage.classList.remove("images__after");
            exampleImage.classList.add("images__before");
        });

        nextButton.addEventListener("click", function () {
            exampleSwither.classList.remove("swither__toogler-before");
            exampleSwither.classList.add("swither__toogler-after");
            exampleImage.classList.remove("images__before");
            exampleImage.classList.add("images__after");
        });
    } else {
        // Если ширина экрана больше 767px, удаляем обработчики событий
        previousButton.removeEventListener("click", function () {});
        nextButton.removeEventListener("click", function () {});
    }
}

applyStyles();

// Обработчик изменения размера окна браузера
window.addEventListener("resize", function () {
    applyStyles();
});
//Конец кода
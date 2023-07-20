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
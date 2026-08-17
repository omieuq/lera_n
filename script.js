function hideAll() {
    document.querySelectorAll(".card")
        .forEach(card => card.classList.remove("active"));
}

function showOops() {
    alert("Кнопка нажалась");

    hideAll();

    document.getElementById("screen2")
        .classList.add("active");
}

function showLoading() {

    hideAll();

    document.getElementById("screen3")
        .classList.add("active");

    setTimeout(() => {

        hideAll();

        document.getElementById("screen4")
            .classList.add("active");

    }, 4000);
}

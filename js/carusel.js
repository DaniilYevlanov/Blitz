document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const indicatorsContainer = document.querySelector(".carousel-indicators");
    const items = document.querySelectorAll(".carousel-item");
    const totalSlides = items.length;
    let index = 0;

    // Додаємо індикатори (крапки)
    for (let i = 0; i < totalSlides; i++) {
        const button = document.createElement("button");
        if (i === 0) button.classList.add("active");
        button.addEventListener("click", () => {
            index = i;
            updateCarousel();
        });
        indicatorsContainer.appendChild(button);
    }
    const indicators = document.querySelectorAll(".carousel-indicators button");

    function updateCarousel() {
        const offset = -index * 100;
        track.style.transform = translateX`(${offset}%)`;

        // Оновлення індикаторів
        indicators.forEach((btn, i) => {
            btn.classList.toggle("active", i === index);
        });
    }

    nextButton.addEventListener("click", () => {
        index = (index + 1) % totalSlides;
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        index = (index - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    // Автоматична прокрутка кожні 5 секунд
    setInterval(() => {
        index = (index + 1) % totalSlides;
        updateCarousel();
    }, 5000);
});
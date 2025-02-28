document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const indicatorsContainer = document.querySelector(".carousel-indicators");
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;
    let index = 0;
    let autoSlide;

    // Очищаємо контейнер перед додаванням індикаторів
    indicatorsContainer.innerHTML = "";

    // Додаємо індикатори (крапки) з правильним класом
    for (let i = 0; i < totalSlides; i++) {
        const button = document.createElement("button");
        button.classList.add("indicator"); // Додаємо правильний клас
        if (i === 0) button.classList.add("active");
        button.setAttribute("data-slide", i);
        indicatorsContainer.appendChild(button);
    }

    const indicators = document.querySelectorAll(".indicator");

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;

        // Оновлення індикаторів
        indicators.forEach((btn, i) => {
            btn.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        updateCarousel();
    }

    nextButton.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    prevButton.addEventListener("click", () => {
        index = (index - 1 + totalSlides) % totalSlides;
        updateCarousel();
        resetAutoSlide();
    });

    // Додаємо подію для індикаторів
    indicators.forEach((indicator) => {
        indicator.addEventListener("click", (e) => {
            index = parseInt(e.target.getAttribute("data-slide"));
            updateCarousel();
            resetAutoSlide();
        });
    });

    // Автоматична прокрутка слайдів
    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    startAutoSlide();
});
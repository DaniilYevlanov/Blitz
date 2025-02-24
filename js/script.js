document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("energyChart").getContext("2d");

    var data = {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
        datasets: [{
            label: "Частка ВДЕ у світовій енергетиці (%)",
            data: [23, 25, 27, 30, 34, 38, 41, 45, 50], // Фіксовані значення, які не змінюються
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            tension: 0.4 // Згладжування лінії
        }]
    };

    var options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false,  // Вимикаємо прив'язку до нуля
                min: 20,  // Мінімальне значення Y, щоб уникнути падіння вниз
                max: 60,  // Максимальне значення для обмеження зростання
                ticks: {
                    stepSize: 5
                }
            }
        },
        animation: {
            duration: 1000 // Запобігає ефекту "росту вниз"
        }
    };

    new Chart(ctx, {
        type: "line",
        data: data,
        options: options
    });
});
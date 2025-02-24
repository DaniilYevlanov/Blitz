// Глобальная переменная для хранения экземпляра графика
let myChart;

function createChart() {
    // Если график уже существует, уничтожаем его
    if (myChart) {
        myChart.destroy();
    }

    // Получаем контекст канваса
    const ctx = document.getElementById('energyChart').getContext('2d');

    // Создаём новый график
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Частка ВДЕ у світовій енергетиці (%)',
                data: [23, 25, 27, 30, 34, 38, 41, 45, 50],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 20,
                    max: 60,
                    ticks: {
                        stepSize: 5
                    }
                }
            },
            animation: {
                duration: 1000
            }
        }
    });
}

// Вызываем функцию создания графика
createChart();

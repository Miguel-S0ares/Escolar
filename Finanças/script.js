const ctx = document.getElementById('graficoSaldo');

new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],

        datasets: [{
            label: 'Saldo',

            data: [2500, 4200, 3900, 5100, 6400, 8450],

            borderColor: '#16A34A',

            backgroundColor: 'rgba(22,163,74,0.15)',

            fill: true,

            tension: 0.4
        }]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                display: false
            }
        },

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
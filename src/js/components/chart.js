const checkDataAttributes = data => data ? data : null;

if (document.querySelector('.chart')) {
    new Chart(
        chart = document.querySelector('.chart'),
        {
        type: 'line',
        data: {
            labels: [
                checkDataAttributes(chart.dataset.chartXAxisA),  
                checkDataAttributes(chart.dataset.chartXAxisB),    
                checkDataAttributes(chart.dataset.chartXAxisC),
                checkDataAttributes(chart.dataset.chartXAxisD),    
            ],
            datasets: [
            {
                label: checkDataAttributes(chart.dataset.chartLabelText),
                data: [
                    checkDataAttributes(chart.dataset.chartDotA),
                    checkDataAttributes(chart.dataset.chartDotB),
                    checkDataAttributes(chart.dataset.chartDotC),
                    checkDataAttributes(chart.dataset.chartDotD),
                ],
                borderColor: '#ee9b4f',
                borderWidth: 1,
                backgroundColor: '#ee9b4f2e',
                cubicInterpolationMode: 'monotone',
                pointStyle: 'circle',
                fill: true
            }
            ]
        },
        options: {
            responsive: true,
                scales: {
                    y: {
                        ticks: {
                            callback: function(value) {
                                return value.toFixed(10).replace(/0*$/,'');
                            }
                        }
                    }     
                }
            }
        }
    );
}
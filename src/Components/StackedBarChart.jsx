import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';



const StackedBarChart = ({ data, height, width }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Average LPA',
              backgroundColor: '#9747FF',
              data: data.averageLPAs,
            },
            {
              label: 'Highest LPA',
              backgroundColor: '#FF7171',
              data: data.highestLPAs,
            },
          ],
        },
        options: {
          layout: {
            padding: {
              top: 20,
            },
          },
          scales: {
            x: {
              stacked: true,
              ticks: {
                font: {
                  family: 'Dosis',
                  size: 10, 
                  weight: "bold",
                },
              },
            },
            y: {
              stacked: false,
              beginAtZero: true,
              min: 0,
              ticks: {
                stepSize: 1,
                font: {
                  family: 'Dosis',
                  size: 10, 
                  weight: "bold",
                },
              },
              grid: {
                display: true, // Display gridlines
                drawTicks: false, // Do not draw ticks
                color: 'rgba(255, 255, 255, 1)', // Color of the gridlines
                z: 1,
                width: 4,
              },
            },
          },
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: {
                  family: 'Dosis',
                  size: 10, 
                  weight: "bold",
                },
              }
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  let label = context.dataset.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.dataset.label === 'Highest LPA') {
                    const avgLPA = data.averageLPAs[context.dataIndex];
                    const highestLPA = data.highestLPAs[context.dataIndex];
                    label +=  highestLPA.toFixed(2); // Show the sum of highest LPA and average LPA
                  } else {
                    label += context.parsed.y.toFixed(2);
                  }
                  return label;
                }
              }
            }
          }
        },
      });
    }
    return () => {
      if (chartInstance.current) {
        // chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} style={{height: height, width: width}}/>;
};

export default StackedBarChart;

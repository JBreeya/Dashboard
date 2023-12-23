const salesData = {
    Jan: 5000,
    Feb: 6000,
    Mar: 8000,
    Apr: 7000,
    May: 9000,
    Jun: 12000,
    Jul: 10000,
    Aug: 11000,
    Sep: 8500,
    Oct: 9500,
    Nov: 7500,
    Dec: 13000,
  };

  const salesByGroupData = {
    'Indian': 3000,
    'Chinese': 5000,
    'Italy': 8000,
    'Snacks': 6000,
    'Desserts': 2500,
  };
  
  const salesByHourData = {
    'Early Morning': 50,
    'Morning': 100,
    'Midday': 80,
    'Afternoon': 120,
    'Evening': 90,
    'Night': 150,
    'Midnight': 110,
  };
  
  // Sparkline initialization
  const sparklineOptions = {
    type: 'line',
    height: 20,
    width: '100%',
    series: [{
      data: [10, 20, 18, 25, 10, 15, 12, 8, 10, 5],
    }],
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    colors: ['#2196F3'],
  };
  
  // Initialize ApexCharts
  const salesOfMonthChart = new ApexCharts(document.getElementById('salesOfMonthChart'), {
    series: [{
      name: 'Sales',
      data: Object.entries(salesData).map(([month, value]) => ({ x: month, y: value })),
    }],
    chart: {
      type: 'line',
      height: 250,
      width: '100%',
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: true,
      },
      colors: ['#FF5733' ], 
    },
    xaxis: {
      type: 'category',
      categories: Object.keys(salesData),
      labels: {
        format: 'MMM',
      },
      tickAmount: 15,
    },
    grid: {
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      stroke: {
        width: 2,
      },
    markers: {
      size: 0,
    },
  });
  
  
  
  const salesByHourChart = new ApexCharts(document.getElementById('salesByHourChart'), {
    series: Object.values(salesByHourData),
    chart: {
      type: 'polarArea', 
      height: 300,
      width: '100%',
    },
    labels: Object.keys(salesByHourData),
    colors: ['#FF5733', '#607D8B' , '#DAF7A6', '#00A7E1', '#900C3F', '#4CAF50', '#FFEB3B', '#FF9800'],
});
  

  const colors = ['#FF5733', '#FFC300', '#DAF7A6', '#4CAF50', '#2196F3'];
  
  const salesByGroupChart = new ApexCharts(document.getElementById('salesByGroupChart'), {
    series: [{
      name: 'Sales',
      data: Object.entries(salesByGroupData).map(([category, value], index) => ({
        x: category,
        y: value,
        fillColor: colors[index % colors.length], 
      })),
    }],
    chart: {
      type: 'bar',
      height: 250,
      width: '100%',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded',
        distributed: true,
        strokeWidth: 0,
      },
    },
    grid: {
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      },
    dataLabels: {
      enabled: false,
    },
    colors: colors,
    xaxis: {
      categories: Object.keys(salesByGroupData),
      
    },
    legend: {
        show: false,
    },
  });
    
// Initialize ApexCharts
const salesChart = new ApexCharts(document.getElementById('salesSparkline'), {
    series: [{
      data: [10, 20, 18, 25, 10, 15, 12, 8, 10, 15],
    }],
    chart: {
      type: 'line',
      height: 20,
      width: '100%',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    markers: {
      size: 0,
    },
    colors: ['#2196F3'],
  });
  
  const expensesChart = new ApexCharts(document.getElementById('expensesSparkline'), {
    series: [{
      data: [5, 15, 10, 20, 8, 18, 12, 25, 10, 8],
    }],
    chart: {
      type: 'line',
      height: 20,
      width: '100%',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    markers: {
      size: 0,
    },
    colors: ['#2196F3'],
  });
  
  const profitChart = new ApexCharts(document.getElementById('profitSparkline'), {
    series: [{
      data: [5, 10, 8, 5, 19, 8, 15, 12, 18, 20],
    }],
    chart: {
      type: 'line',
      height: 20,
      width: '100%',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    markers: {
      size: 0,
    },
    colors: ['#2196F3'],
  });
  
  const checkinChart = new ApexCharts(document.getElementById('checkinSparkline'), {
    series: [{
      data: [100, 150, 120, 180, 200, 160, 140, 120, 180, 150],
    }],
    chart: {
      type: 'line',
      height: 20,
      width: '100%',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    markers: {
      size: 0,
    },
    colors: ['#2196F3'],
  });
  
  const deliveryChart = new ApexCharts(document.getElementById('deliverySparkline'), {
    series: [{
      data: [120, 180, 150, 100, 140, 160, 200, 180, 120, 150],
    }],
    chart: {
      type: 'line',
      height: 20,
      width: '100%',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    markers: {
      size: 0,
    },
    colors: ['#2196F3'],
  });

  const takeChart = new ApexCharts(document.getElementById('takeSparkline'), {
    series: [{
      data: [110, 180, 160, 100, 140, 150, 200, 180, 160, 150],
    }],
    chart: {
      type: 'line',
      height: 20,
      width: '100%',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    markers: {
      size: 0,
    },
    colors: ['#2196F3'],
  });
  
  // Render charts
  salesChart.render();
  expensesChart.render();
  profitChart.render();
  checkinChart.render();
  deliveryChart.render();
  takeChart.render();  
  
  // Render charts
  salesOfMonthChart.render();
  salesByHourChart.render();
  salesByGroupChart.render();
  
  // Add sparklines
  $(document).ready(function () {
    $('#salesValue').sparkline([10, 20, 18, 25, 10, 15, 12, 8, 10, 5], sparklineOptions);
    $('#expensesValue').sparkline([5, 15, 10, 20, 8, 18, 12, 25, 10, 8], sparklineOptions);
    $('#profitValue').sparkline([5, 5, 8, 5, 10, 8, 15, 12, 18, 20], sparklineOptions);
    $('#checkinValue').sparkline([100, 150, 120, 180, 200, 160, 140, 120, 180, 150], sparklineOptions);
    $('#deliveryValue').sparkline([120, 180, 150, 100, 140, 160, 200, 180, 120, 150], sparklineOptions);
    $('#takeValue').sparkline([110, 180, 160, 100, 140, 150, 200, 180, 160, 140], sparklineOptions);
    $('#salesOfMonthChart').sparkline(Object.values(salesData), sparklineOptions);
    $('#salesByHourChart').sparkline(Object.values(salesByHourData), sparklineOptions);
    $('#salesByGroupChart').sparkline(Object.values(salesByGroupData), sparklineOptions);
  });


  function toggleSidebar() {
    const body = document.body;
    const sidebar = document.getElementById('sidebar');
    const iconSpan = document.getElementById('toggleIcon');

    body.classList.toggle('sidebar-open');
    sidebar.classList.toggle('open');

    // Check if the sidebar is open and update the icon accordingly
    if (sidebar.classList.contains('open')) {
        iconSpan.innerHTML = '&times;'; // '×' for close
    } else {
        iconSpan.innerHTML = '&#9776;'; // '☰' for hamburger
    }
}




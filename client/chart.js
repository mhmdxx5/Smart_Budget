google.charts.load("current", {packages:["corechart"]});
const drawChart=()=> {
    let data = google.visualization.arrayToDataTable([
      ['category', 'money spend'],
      ['Work',     111111],
      ['Eat',      200000],
      ['Commute',  200000],
      ['Watch TV', 200000],
      ['Sleep',    700000]
    ]);
    const options = {
      pieHole: 0.5,
      backgroundColor: '#4B4C4E',
      legend: 'none'
    };
    const chart = new google.visualization.PieChart(document.getElementById('drawChart'));
    chart.draw(data, options);
  }
google.charts.setOnLoadCallback(drawChart);

window.addEventListener('resize', (event)=>{
    drawChart();
  });
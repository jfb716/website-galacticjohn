
function meterCreate(){


  google.charts.load('current', {packages: ['corechart', 'bar', 'gauge']});
  google.charts.setOnLoadCallback(drawWinsChart);



    function drawWinsChart() {

      JWinP = $('.JohnWP').text();
      JWinP2 = JWinP.slice(0, 2);

      OWinP = $('.OlegWP').text();
      OWinP2 = OWinP.slice(0, 2);

      AWinP = $('.AmitWP').text();
      AWinP2 = AWinP.slice(0, 2);

      DWinP = $('.DavidWP').text();
      DWinP2 = DWinP.slice(0, 2);

      var data1 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Amit', AWinP2],
      ]);

      var data2 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['John', JWinP2],
      ]);

      var data3 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Oleg', OWinP2],
      ]);

      var data4 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['David', DWinP2],
      ]);

      var options = {
        width: 220, height: 220,
        redFrom: 0, redTo: 50,
        greenFrom: 50, greenTo: 100,
        minorTicks: 5
      };



      var chart1 = new google.visualization.Gauge(document.getElementById('chart1_div'));
      var chart2 = new google.visualization.Gauge(document.getElementById('chart2_div'));
      var chart3 = new google.visualization.Gauge(document.getElementById('chart3_div'));
      var chart4 = new google.visualization.Gauge(document.getElementById('chart4_div'));

      chart1.draw(data1, options);
      chart2.draw(data2, options);
      chart3.draw(data3, options);
      chart4.draw(data4, options);
    }

}

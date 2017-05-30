
function meterCreate(){
  var JP = $('.JohnWP').text();
  var JB = JP.slice(0, 2);


  var OP = $('.OlegWP').text();
  var OR = OP.slice(0, 2);


  var AP = $('.AmitWP').text();
  var AB = AP.slice(0, 2);

  var DP = $('.DavidWP').text();
  var DR = DP.slice(0, 2);

  google.charts.load('current', {packages: ['corechart', 'bar', 'gauge']});
  google.charts.setOnLoadCallback(drawWinsChart);



    function drawWinsChart() {

      var data1 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Amit', AB],
      ]);

      var data2 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['John', JB],
      ]);

      var data3 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Oleg', OR],
      ]);

      var data4 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['David', DR],
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

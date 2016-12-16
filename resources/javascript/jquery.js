

$(document).ready(function(){   


    
    
/* ------ Buttons ------- */
$("button").button();
    


    
/* ------ Date ------ */
var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

    

/* ------- Weather Temp API ------- */
    
$.ajax({
  url : "http://api.wunderground.com/api/ecac81007093c564/conditions/q/NY/New_York.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var temp_f = parsed_json['current_observation']['temp_f'];
$("#temp").html(temp_f);
  }
  });
    
/* ------- Stock Price API ------- 
$.ajax({
  url : "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22FB%22)%0A%09%09&format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=",
  dataType : "json",
  success : function(parsed_json) {
  var price = parsed_json['Ask'];
$("#stock_price").html(price);
  }
  });
    

$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22FB%22)%0A%09%09&format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=", function(data) {
    var ask = data.query.results.quote.ask;
    console.log(ask);
    });
    
    */
    
    
    
});
    
    






































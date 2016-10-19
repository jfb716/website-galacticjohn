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
    
/* ------- Stock Price API ------- */
$.ajax({
  url : "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=fb",
  dataType : "jsonp",
  success : function(parsed_json) {
  var stock_price = parsed_json['LastPrice'];
$("#stock_price").html(stock_price);
  }
  });
    


    
    
});






































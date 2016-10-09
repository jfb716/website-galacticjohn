$(document).ready(function(){   
    
    
/* ------ Tabs ------ */ 
$(function(){
   $("#tabs").tabs(); 
});
    
/* ------ Buttons ------- */
$("button").button();
    
/* ------ Table ------- */

$("#myTable").DataTable();

    
/* ------ Date ------ */
var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

    
/* ------- IA API ------- */
    
$.ajax({
  url: "https://developers.facebook.com/blog/iablog/rss",
  dataType: "xml",
});
    
    

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







































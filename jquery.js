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

    
/* ------- IA News ------- */
    
var feed = "https://developers.facebook.com/blog/iablog/rss?format=xml.xml";
    $.ajax(feed, {
        accepts:{
            xml:"application/rss+xml"
        },
        dataType:"xml",
        success:function(data) {

            $(data).find("item").each(function () {
                var el = $(this);
                console.log("------------------------");
                console.log("title      : " + el.find("title").text());
                console.log("link       : " + el.find("link").text());
                console.log("description: " + el.find("description").text());
            });
    

        }   
    });
   
    
});







































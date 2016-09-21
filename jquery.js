$(document).ready(function(){   
    
    
/* ------ Tabs ------ */ 
$(function(){
   $("#tabs").tabs(); 
});
    
/* ------ Buttons ------- */
$("button").button();
    

/* ------ Hide Vendor Control Divs On Page Load ------- */

$(".adSenseAsync, .adSenseSync, .dfp, .adx, .rubicon").hide();
    
    
/* ------ Passback Dropdown Value ------- */
$(".passback_type").change(function(){
   var value = $(".passback_type").val();
   console.log(value);



/* ------ DFP Dropdown Selection ------ */    
   if(value === "passback_1") {
       console.log("DFP Was Selected");
       $(".tagOutput").empty();
       $(".adSenseAsync, .adSenseSync, .adx, .rubicon").hide();
       $(".dfp").show();
   }
    
    else if (value === "passback_2") {
        console.log("AdX Was Selected");
        $(".tagOutput").empty();
        $(".adSenseAsync, .adSenseSync, .dfp, .rubicon").hide();
        $(".adx").show();
    }
    
    else if (value === "passback_3") {
        console.log("AdSense Async Was Selected");
        $(".tagOutput").empty();
        $(".adSenseSync, .dfp, .adx, .rubicon").hide();
        $(".adSenseAsync").show();
        $(".tagOutput").load('passbacks/adsenseasync.html');
    }
    
    else if (value === "passback_4") {
        console.log("AdSense Sync Was Selected");
        $(".tagOutput").empty();
        $(".adSenseAsync, .dfp, .adx, .rubicon").hide();
        $(".adSenseSync").show();
    }
    
    else if (value === "passback_5") {
        console.log("Rubicon Was Selected");
        $(".tagOutput").empty();
        $(".adSenseAsync, .adSenseSync, .dfp, .adx").hide();
        $(".rubicon").show();
    }
    
    else {
        console.log("Nothing Was Selected");
        $(".tagOutput").empty();
        $(".adSenseAsync, .adSenseSync, .dfp, .adx, .rubicon").hide();
    }
});
    


    
});







































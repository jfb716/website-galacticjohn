$(document).ready(function(){
       
/* ------- Passback Helper Code ------- */
    
/* ------ Hide Vendor Control Divs On Page Load ------- */

$(".adSenseAsync, .adSenseSync, .dfp, .adxAsync, .adxSync, .rubicon, adx-async, #pageReload, rubicon").hide();

/* ------ Refresh Page Button ------- */
    
$("#pageReload").click(function(){
   location.reload(); 
});
    
/* ------ Passback Dropdown Value ------- */
$(".passback_type").change(function(){
   var value = $(".passback_type").val();
   console.log(value);



/* ------ Dropdown Selection ------ */    
   if(value === "passback_1") {
       console.log("DFP Was Selected");
       $(".adSenseAsync, .adSenseSync, .adxAsync, .adxSync, .rubicon, adx-async, rubicon").hide();
       $(".dfp").show();
   }
    
    else if (value === "passback_2") {
        console.log("AdX Was Selected");
        $(".adSenseAsync, .adSenseSync, .dfp, .rubicon, .adxSync, adx-async, rubicon").hide();
        $(".adxAsync, adx-async").show();
    }

    
    else if (value === "passback_3") {
        console.log("AdSense Was Selected");
        $(".adSenseSync, .dfp, .adxAsync, .adxSync, .rubicon, adx-async, rubicon").hide();
        $(".adSenseAsync, ad-sense-async").show();
       
    }
    
    
    else if (value === "passback_4") {
        console.log("Rubicon Was Selected");
        $(".adSenseAsync, .adSenseSync, .dfp, .adxAsync, .adxSync, adx-async, rubicon").hide();
        $(".rubicon, rubicon").show();
    }
    
    else {
        console.log("Nothing Was Selected");
        $(".adSenseAsync, .adSenseSync, .dfp, .adxAsync, .adxSync, .rubicon, ad-sense-async, adx-async, rubicon").hide();
    }
});
    

/* -------- Execution Button for Passback Helper ------- */
    
$("#executeHelper").click(function(){
    console.log("Insert Passback Click");

        var value = $(".passback_type").val();
        console.log(value);
    
        var passbackSnippet = '<div class="passback_fb"></div>';
        console.log(passbackSnippet);
        
    if(value === "passback_1") {
        console.log("For DFP");
    }
    
    else if (value === "passback_2") {
        console.log("For Adx");  
           
           $("rubicon").detach();
        
           var adxAsyncCode = $(".tagOutput").text();
           console.log(adxAsyncCode);

           var anTag = $("#drop_zone").val();
           console.log(anTag);
            
           $("#drop_zone, .controlBox, .tagOutput").hide();
           $("#executeHelper").hide();
           $(".passbackTest").css({"margin-top":"25%", "margin-right":"15%"});
           $(".type_box").hide();
           $("#pageReload").show();

           var insertSpot = anTag.indexOf("errorCode +");
           console.log(insertSpot);

           var extra = 33; 
           console.log(extra);

           var insertSpotPlus = insertSpot + extra;
           console.log(insertSpotPlus);

           var finalTag = [anTag.slice(0, insertSpotPlus), adxAsyncCode, anTag.slice(insertSpotPlus)].join('');
           console.log(finalTag);
        
           var insertSpot2 = finalTag.lastIndexOf("</div>");
           console.log(insertSpot2);
        
           var extra2 = 6;
           console.log(extra2);
        
           var insertSpotPlus2 = insertSpot2 + extra2; 
        
           var finalTagPassback = [finalTag.slice(0, insertSpotPlus2), passbackSnippet, finalTag.slice(insertSpotPlus2)].join('');
           console.log(finalTagPassback);
   
           var hiddenElement = document.createElement('a');

           hiddenElement.href = 'data:attachment/text,' + encodeURI(finalTagPassback);
           hiddenElement.target = '_blank';
           hiddenElement.download = 'an_tag.txt';
           hiddenElement.click();
        
           $(".passbackTest").html(finalTagPassback);
    }

    
    else if (value === "passback_3") {
        console.log("For AdSense");
        
        $("rubicon").detach();
      
        
           var adxAsyncCode = $(".tagOutput").text();
           console.log(adxAsyncCode);

           var anTag = $("#drop_zone").val();
           console.log(anTag);
            
           $("#drop_zone, .controlBox, .tagOutput").hide();
           $("#executeHelper").hide();
           $(".passbackTest").css({"margin-top":"25%", "margin-right":"15%"});
           $(".type_box").hide();
           $("#pageReload").show();

           var insertSpot = anTag.indexOf("errorCode +");
           console.log(insertSpot);

           var extra = 33; 
           console.log(extra);

           var insertSpotPlus = insertSpot + extra;
           console.log(insertSpotPlus);

           var finalTag = [anTag.slice(0, insertSpotPlus), adxAsyncCode, anTag.slice(insertSpotPlus)].join('');
           console.log(finalTag);
        
           var insertSpot2 = finalTag.lastIndexOf("</div>");
           console.log(insertSpot2);
        
           var extra2 = 6;
           console.log(extra2);
        
           var insertSpotPlus2 = insertSpot2 + extra2; 
        
           var finalTagPassback = [finalTag.slice(0, insertSpotPlus2), passbackSnippet, finalTag.slice(insertSpotPlus2)].join('');
           console.log(finalTagPassback);
   
           var hiddenElement = document.createElement('a');

           hiddenElement.href = 'data:attachment/text,' + encodeURI(finalTagPassback);
           hiddenElement.target = '_blank';
           hiddenElement.download = 'an_tag.txt';
           hiddenElement.click();
        
           $(".passbackTest").html(finalTagPassback);
    }
    
    
    else if (value === "passback_4") {
        console.log("For Rubicon");
        
        $("adx-async").detach();
        
           var rubiconCode = $(".tagOutput").text();
           console.log(rubiconCode);

           var anTag = $("#drop_zone").val();
           console.log(anTag);
            
           $("#drop_zone, .controlBox, .tagOutput").hide();
           $("#executeHelper").hide();
           $(".passbackTest").css({"margin-top":"25%", "margin-right":"15%"});
           $(".type_box").hide();
           $("#pageReload").show();

           var insertSpot = anTag.indexOf("errorCode +");
           console.log(insertSpot);

           var extra = 33; 
           console.log(extra);

           var insertSpotPlus = insertSpot + extra;
           console.log(insertSpotPlus);

           var finalTag = [anTag.slice(0, insertSpotPlus), rubiconCode, anTag.slice(insertSpotPlus)].join('');
           console.log(finalTag);
        
           var insertSpot2 = finalTag.lastIndexOf("</div>");
           console.log(insertSpot2);
        
           var extra2 = 6;
           console.log(extra2);
        
           var insertSpotPlus2 = insertSpot2 + extra2; 
        
           var finalTagPassback = [finalTag.slice(0, insertSpotPlus2), passbackSnippet, finalTag.slice(insertSpotPlus2)].join('');
           console.log(finalTagPassback);
   
           var hiddenElement = document.createElement('a');

           hiddenElement.href = 'data:attachment/text,' + encodeURI(finalTagPassback);
           hiddenElement.target = '_blank';
           hiddenElement.download = 'an_tag.txt';
           hiddenElement.click();
        
           $(".passbackTest").html(finalTagPassback);
    }
    
    else {
        console.log("For Nothing");
    }  
});




/* ------- Demo On / Off Switch ------- */
    
$("#demo_on").click(function(){
   document.cookie = "demo=on; expires=Thu, 18 Dec 2018 12:00:00 UTC"; 
});

$("#demo_off").click(function(){
   document.cookie = "demo=off; expires=Thu, 18 Dec 2018 12:00:00 UTC" 
});


$("#tab-3, #demo_on, #demo_off").click(function(){
    var cookie = document.cookie;
    console.log(cookie);
    if (cookie === 'demo=on') {
      $("#demo_on").css({"border-color":"green"});
      $("#demo_off").css({"border-color":"transparent"});
  }
    else {
        $("#demo_off").css({"border-color":"green"});
        $("#demo_on").css({"border-color":"transparent"});
    }
});


    
 
});
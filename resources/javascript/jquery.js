$(document).ready(function(){   
    

    
/* ------ Buttons ------- */
$("button").button();
    
/* ------ Table ------- */

$("#myTable").DataTable();

    
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
    
    
    
    
/* ------ Button Code to Download Tag ------ */


        $(document).on("click", ".tagButton", function(){

            var newTag = $(".box_right").text();
            console.log(newTag);

            var hiddenElement = document.createElement('a');

            hiddenElement.href = 'data:attachment/text,' + encodeURI(newTag);
            hiddenElement.target = '_blank';
            hiddenElement.download = 'audience_network_tag.txt';
            hiddenElement.click();
        });


/* ------ Button Code to Update CSS ------ */
            
            
        $(".ctaButton").click(function(){
            console.log("CTA Button Click");

            var ctaColorNew = $("#ctaCol").val();
            console.log(ctaColorNew);

            $(".thirdPartyCallToActionClass").css({"color": ctaColorNew});
        });
    
    

        $(".fontFamButton").click(function(){
           console.log("Font Family Button Click");

            var fontFamNew = $("#fontFam").val();
            console.log(fontFamNew);

            $(".thirdPartyRoot").css({"font-family": fontFamNew});
        });
    
    

        $(".subTitButton").click(function(){
           console.log("Subtitle Update Button Click"); 

            var subWeNew = $("#subFontWeight").val();
            console.log(subWeNew);
            
            var subSiNew = $("#subFontSize").val();
            console.log(subSiNew);

            $(".fbAdSubtitle").css({"font-weight": subWeNew});
            $(".fbAdSubtitle").css({"font-size": subSiNew});
        });
    
    

        $(".titButton").click(function(){
            console.log("Title Update Button Click"); 

            var titWeNew = $("#titFontWeight").val();
            console.log(titWeNew);
            
            var titSiNew = $("#titFontSize").val();
            console.log(titSiNew);

            $(".fbAdTitle").css({"font-weight": titWeNew});
            $(".fbAdTitle").css({"font-size": titSiNew});
        });
    
    

        $(".ctaButton").click(function(){
            console.log("CTA Update Button Click"); 

            var ctaWeNew = $("#ctaFontWeight").val();
            console.log(ctaWeNew);
            
            var ctaColorNew = $("#ctaCol").val();
            console.log(ctaColorNew);
            
            var ctaSiNew = $("#ctaFontSize").val();
            console.log(ctaSiNew);

            $(".thirdPartyCallToActionClass").css({"font-weight": ctaWeNew});
            $(".thirdPartyCallToActionClass").css({"color": ctaColorNew});
            $(".thirdPartyCallToActionClass").css({"font-size": ctaSiNew});
        });



    
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
        console.log("AdX Async Was Selected");
        $(".adSenseAsync, .adSenseSync, .dfp, .rubicon, .adxSync, adx-async, rubicon").hide();
        $(".adxAsync, adx-async").show();
    }
    
    else if (value === "passback_3") {
        console.log("AdX Sync Was Selected");
        $(".adSenseAsync, .adSenseSync, .dfp, .rubicon, .adxAsync, adx-async, rubicon").hide();
        $(".adxSync").show();
    }
    
    else if (value === "passback_4") {
        console.log("AdSense Async Was Selected");
        $(".adSenseSync, .dfp, .adxAsync, .adxSync, .rubicon, adx-async, rubicon").hide();
        $(".adSenseAsync, ad-sense-async").show();
       
    }
    
    else if (value === "passback_5") {
        console.log("AdSense Sync Was Selected");
        $(".adSenseAsync, .dfp, .adxAsync, .adxSync, .rubicon, adx-async, rubicon").hide();
        $(".adSenseSync").show();
    }
    
    else if (value === "passback_6") {
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
        console.log("For Adx Async");  
           
           $("rubicon").detach();
        
           var adxAsyncCode = $(".tagOutput").text();
           console.log(adxAsyncCode);

           var anTag = $("#drop_zone").val();
           console.log(anTag);
            
           $("#drop_zone").hide();
           $("#executeHelper").hide();
           $(".passbackTest").css({"left": "25%", "hieght": "400px", "width": "555px", "padding": "75px 127px"});
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
        console.log("For Adx Sync");
    }
    
    else if (value === "passback_4") {
        console.log("For AdSense Async");
    }
    
    else if (value === "passback_5") {
        console.log("For AdSense Sync");
    }
    
    else if (value === "passback_6") {
        console.log("For Rubicon");
        
        $("adx-async").detach();
        
           var rubiconCode = $(".tagOutput").text();
           console.log(rubiconCode);

           var anTag = $("#drop_zone").val();
           console.log(anTag);
            
           $("#drop_zone").hide();
           $("#executeHelper").hide();
           $(".passbackTest").css({"left": "25%", "hieght": "400px", "width": "555px", "padding": "75px 127px"});
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






































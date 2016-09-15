$(document).ready(function(){   
    
/*----- Hide Refresh Button ------ */
    
$(".refresh_button").hide();
    


/* ------ Tabs ------ */ 
$(function(){
   $("#tabs").tabs(); 
});
    
/* ------ Buttons ------- */
$("button").button();
    
/* ------ Passback Dropdown Example Image Display ------- */
$(".passback_type").change(function(){
   var value = $(".passback_type").val();
   console.log(value);
   $("button.passback_button").removeClass("dfp_button adsense_async_button");
   $(".example").empty();


/* ------ DFP Dropdown Selection ------ */    
   if(value === "passback_1") {
       console.log("DFP Was Selected");
       $(".example").html("<img src='dfp_passback_example.png'/>");
       $("button.passback_button").addClass("dfp_button");
       $(".example_box").css({"height": "100px"});
   }
    
    else if (value === "passback_2") {
        console.log("AdX Was Selected");
        $(".example_box").css({"height": "100px"});
    }
    
    else if (value === "passback_3") {
        console.log("AdSense Async Was Selected");
        $(".example").html("<img src='adsense_async_example.png'/>");
        $("button.passback_button").addClass("adsense_async_button");
        $(".example_box").css({"height": "150px"});
    }
    
    else if (value === "passback_4") {
        console.log("AdSense Sync Was Selected");
        $(".example").html("<img src='adsense_sync_example.png'/>");
        $("button.passback_button").addClass("adsense_sync_button");
        $(".example_box").css({"height": "250px"});
    }
    
    else if (value === "passback_5") {
        console.log("Rubicon Was Selected");
        $(".example_box").css({"height": "100px"});
    }
    
    else {
        console.log("Nothing Was Selected");
        $(".example_box").css({"height": "100px"});
    }
});
    

/* ------ DFP Passback Extract ------ */

$(document).on("click",".dfp_button", function(){
    
    var dfpPassback = $(".passback_tag").val();
    
    var startPos1 = dfpPassback.indexOf("<script");
    var endPos1 = dfpPassback.indexOf("googletag.p");
    var dfpSnippet1 = dfpPassback.substring(startPos1,endPos1) + '</script> ';
    console.log(dfpSnippet1);
    
    var startPos2 = dfpPassback.indexOf(">") + 1;
    var endPos2 = dfpPassback.indexOf("<", startPos2);
    var dfpSnippet2 = dfpPassback.substring(startPos2,endPos2);
    console.log(dfpSnippet2);
    
    var dfpTag = $("#drop_zone").val();
    console.log(dfpTag);
    
    $("#drop_zone").val('');
    $("#drop_zone").css({"display": "none"});
    
    var pos1 = dfpTag.indexOf("<div");
    console.log(pos1);

    var appendPassback1 = [dfpTag.slice(0, pos1), dfpSnippet1, dfpTag.slice(pos1)].join('');
    console.log(appendPassback1);
    
    var pos2 = appendPassback1.indexOf("errorCode +");
    console.log(pos2);
    
    var num1 = 33; 
    console.log(num1);
    
    var pos2plus = pos2 + num1;
    console.log(pos2plus);

    var appendPassback2 = [appendPassback1.slice(0, pos2plus), dfpSnippet2, appendPassback1.slice(pos2plus)].join('');
    console.log(appendPassback2);
    
    var hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:attachment/text,' + encodeURI(appendPassback2);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'audience_network_tag.txt';
    hiddenElement.click();
    
    $(".passback_button").hide();
    $(".refresh_button").show();
    $(".passback_tag").val('');
    $(".example").empty();

});
    
    $(".refresh_button").click(function(){
       location.reload(); 
    });
    
    
});

    



$(document).ready(function(){

/* ------ Tabs ------ */ 
$(function(){
   $("#tabs").tabs(); 
});
    
/* ------ Buttons ------- */
$("button").button();
    

/* ------ DFP Passback Extract ------ */

$(".passback_button").click(function(){
    var dfpPassback = $(".passback_tag").val();
    
    var startPos1 = dfpPassback.indexOf("<script");
    var endPos1 = dfpPassback.indexOf("googletag.p");
    var dfpSnippet1 = dfpPassback.substring(startPos1,endPos1);
    console.log(dfpSnippet1);
    
    var startPos2 = dfpPassback.indexOf(">") + 1;
    var endPos2 = dfpPassback.indexOf("<", startPos2);
    var dfpSnippet2 = dfpPassback.substring(startPos2,endPos2);
    console.log(dfpSnippet2);
    
    var dfpTag = $("#drop_zone").val();
    


});
    
    
});

    



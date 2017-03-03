$(document).ready(function(){
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

    
    
});
$(document).ready(function(){


  $(".anTag1").blur(function(){
    var newTag = $(".anTag1").html();
    var newTag2 = encodeURIComponent(newTag);
    console.log(newTag2);
    $.ajax({
      type: 'POST',
      url: 'resources/writetxt.php',
      data: 'd=' + newTag2,
      success: function(response){
        console.log(response);
        var tagytag = decodeURIComponent(response);
        $(".anTag1").text(tagytag);
      }
    });


  });


});

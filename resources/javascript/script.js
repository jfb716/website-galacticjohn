/*  

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", "https://developers.facebook.com/blog/iablog/rss?t=" + Math.random(), true);
    xhttp.send();
}
        
*/


function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; 
    var reader = new FileReader();  
    reader.onload = function(event) {            
         document.getElementById('drop_zone').value = event.target.result;
    }        
    reader.readAsText(files[0],"UTF-8");
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }

window.onload = function() {
  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);
    
};
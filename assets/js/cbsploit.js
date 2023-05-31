alert("exploiting chromebook (may freeze for a bit)") 
while(true){     
onbeforeunload=function() {
      localstorage.x=1
    };
    setTimeout(function() {
      while (1) location.reload(1)
    }, 1000);
}
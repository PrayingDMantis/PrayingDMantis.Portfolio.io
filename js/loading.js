window.onload =function(){


    var bar = document.getElementById("myBar");
    //var txt = document.getElementById("loading-text");
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        setTimeout(500);
        window.location = "http://localhost/secondsite/home.html";
      } else {
        width += Math.floor(Math.random() * (5 + 1)) + 1;
        //width++;
       bar.style.width = width + '%';
      // txt.innerHTML = width * 1  + '%';
      }
    }

}

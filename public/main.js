$(document).ready(function() {
  $("button").click(function(){
    event.preventDefault();
    display();
  })
})

function display() {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
      var parsed = JSON.parse(this.responseText) 
      for(i in parsed.documents) {
        var cur = parsed.documents[i].title;
        var pid = "demo" + i;
        document.getElementById(pid).innerHTML += cur;
      }
    }
  });
  
  xhr.open("GET", "http://localhost:3000/webapi?word="+encodeURI('용기'));
  xhr.setRequestHeader("Authorization", "KakaoAK 62ecc8a4a163e78b24348694a6d18cf9");
  xhr.send();
}
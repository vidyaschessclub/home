window.onload = function() {
  var elmnt = document.getElementById("contents-box");
  file = 'about.html';
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log(this.readyState)
    if (this.readyState == 4) {
      if (this.status == 200) {elmnt.innerHTML = this.responseText;}
      if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
    }
  }
  xhttp.open("GET", file, true);
  xhttp.send();
}

window.onload = function() {
  setText('about.html'); // initial page
}

function setText(navItem) {
  var elmnt = document.getElementById("contents-box");
  file = navItem;
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

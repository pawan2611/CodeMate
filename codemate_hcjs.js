function run() {
  let htmlcode = document.getElementById("html-code").value;
  let csscode = document.getElementById("css-code").value;
  let jscode = document.getElementById("javascript-code").value;
  let output = document.getElementById("output");
  output.contentDocument.body.innerHTML = htmlcode;
  output.contentDocument.head.innerHTML = "<style>" + csscode + "</style>";
  output.contentWindow.eval(jscode);
}

// setInterval(run(), 1);

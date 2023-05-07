function callback(responseText) {
  const res = document.getElementById("response");
  const data = JSON.parse(responseText);
  res.innerHTML = data.status;
}
function post() {
  let xmlHttp = new XMLHttpRequest();
  let name = document.getElementById("name").value;
  let information = document.getElementById("information").value;
  const data = {
    name: name,
    information: information,
  };
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      callback(xmlHttp.responseText);
    }
  };

  xmlHttp.open("post", "/app/blogpost", true);
  xmlHttp.setRequestHeader("Content-Type", "application/json");
  xmlHttp.send(JSON.stringify(data));
}

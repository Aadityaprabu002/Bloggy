function callback(responseText) {
  const res = document.getElementById("response");

  if (responseText === "{}") {
    res.innerHTML = "No User Found";
    return;
  }
  const data = JSON.parse(responseText);
  res.innerHTML = `<h4> Latest Blog of ${data.name} </h4>` + data.information;
}
function get() {
  let xmlHttp = new XMLHttpRequest();
  let name = document.getElementById("name").value;
  const data = {
    name: name,
  };
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  };

  xmlHttp.open("post", "/app/blogget", true);
  xmlHttp.setRequestHeader("Content-Type", "application/json");
  xmlHttp.send(JSON.stringify(data));
}

document.querySelector("#butt1").addEventListener("click", reload);
function reload() {
  var response_percentage = 0;
  var name_1 = document.getElementById("input1").value.toLowerCase();
  var name_2 = document.getElementById("input2").value.toLowerCase();
  var name_average_length = (name_1.length + name_2.length) / 2;
  var percent_rate = Math.floor(100 / name_average_length);

  for (let i = 0; i < name_1.length; i++) {
    var s_r = name_2.search(name_1[i]);
    if (s_r < 0) {
    } else {
      arr = name_2.split("");
      arr.splice(s_r, 1, "");
      name_2 = arr.join("");
      response_percentage += percent_rate;
    }
  }

  var res = document.getElementById("weight");
  res.innerHTML = response_percentage + "%";
}

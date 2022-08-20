// $.get("https://api.waifu.pics/sfw/waifu", function (data) {
//     var img = document.createElement("img");
//     img.src = data.url;
//     var body = document.querySelector("body");
//     body.appendChild(img);
// });



function refresh() {
  $.ajax({
    url: "https://api.waifu.pics/sfw/waifu",
  })
    .done(function (data) {
      var img = document.createElement("img");
      img.src = data.url;
      img.className = "center-fit";
      $(".imgbox").append(img);
    });
}

window.onload = function () {
    var button = document.getElementById("refresh");
    button.addEventListener("click", refresh);
  }
  

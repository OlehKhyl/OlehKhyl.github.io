// $.get("https://api.waifu.pics/sfw/waifu", function (data) {
//     var img = document.createElement("img");
//     img.src = data.url;
//     var body = document.querySelector("body");
//     body.appendChild(img);
// });




function refresh() {
  var urlSfw = "https://api.waifu.pics/sfw/waifu";
  var urlNsfw = "https://api.waifu.pics/nsfw/waifu";
  var nfsw = document.getElementById("switch");
  var url = nfsw.checked ? urlNsfw : urlSfw;
  

  $.ajax({
      url: url,
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
  

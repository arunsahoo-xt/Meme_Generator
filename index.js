var outImage = ".original-image";
var image_ele = document.querySelector(outImage);
var image_container = document.querySelector(".image-container");

/*** Adding selectors color palette *****/
const green = document.querySelector(".green");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const torquise = document.querySelector(".torquise");
const white = document.querySelector(".white");
const purple = document.querySelector(".purple");
const pink = document.querySelector(".pink");

/*** Adding event listeners to change text color *****/
green.addEventListener("click", function (e) {
  var top_inp = (document.querySelector(".top-h4").style.color = "#69f80a");
  var bot_inp = (document.querySelector(".bot-h4").style.color = "#69f80a");
});

red.addEventListener("click", function (e) {
  var top_inp = (document.querySelector(".top-h4").style.color = "#f03108");
  var bot_inp = (document.querySelector(".bot-h4").style.color = "#f03108");
});

blue.addEventListener("click", function (e) {
  var top_inp = (document.querySelector(".top-h4").style.color = "#0275fe");
  var bot_inp = (document.querySelector(".bot-h4").style.color = "#0275fe");
});

yellow.addEventListener("click", function (e) {
  var top_inp = (document.querySelector(".top-h4").style.color = "#ffe000");
  var bot_inp = (document.querySelector(".bot-h4").style.color = "#ffe000");
});

white.addEventListener("click", function (e) {
  var top_inp = (document.querySelector(".top-h4").style.color = "#fff");
  var bot_inp = (document.querySelector(".bot-h4").style.color = "#fff");
});

purple.addEventListener("click", function (e) {
  var top_inp = (document.querySelector(".top-h4").style.color = "#8a0df7");
  var bot_inp = (document.querySelector(".bot-h4").style.color = "#8a0df7");
});

pink.addEventListener("click", function (e) {
  var top_inp = (document.querySelector(".top-h4").style.color = "#fc04ed");
  var bot_inp = (document.querySelector(".bot-h4").style.color = "#fc04ed");
});

torquise.addEventListener("click", function (e) {
  var top_inp = (document.querySelector(".top-h4").style.color = "#33ffff");
  var bot_inp = (document.querySelector(".bot-h4").style.color = "#33ffff");
});

/*** Adding selectors text palette *****/
const xLarge = document.querySelector(".xlarge");
const large = document.querySelector(".large");
const medium = document.querySelector(".medium");
const small = document.querySelector(".small");

/*** Adding eventListeners text palette to change font size *****/
xLarge.addEventListener("click", function (e) {
  var top_inp = (document.querySelector(".top-h4").style.fontSize = "28px");
  var bot_inp = (document.querySelector(".bot-h4").style.fontSize = "28px");
});

large.addEventListener("click", function (e) {
  var top_inp = (document.querySelector(".top-h4").style.fontSize = "25px");
  var bot_inp = (document.querySelector(".bot-h4").style.fontSize = "25px");
});

medium.addEventListener("click", function (e) {
  var top_inp = (document.querySelector(".top-h4").style.fontSize = "20px");
  var bot_inp = (document.querySelector(".bot-h4").style.fontSize = "20px");
});

small.addEventListener("click", function (e) {
  var top_inp = (document.querySelector(".top-h4").style.fontSize = "16px");
  var bot_inp = (document.querySelector(".bot-h4").style.fontSize = "16px");
});

/********* Handling checkbox and toggle textbox *********/
var checkbox1 = document.querySelector(".textbox1 input");
var checkbox2 = document.querySelector(".textbox2 input");

checkbox1.addEventListener("click", (event) =>
  hide_textbox(".drag-top", event)
);
checkbox2.addEventListener("click", (event) =>
  hide_textbox(".drag-bot", event)
);

function hide_textbox(textbox_name, checkbox_name) {
  var check = document.querySelector(textbox_name);
  if (checkbox_name.target.checked) {
    check.style.display = "none";
  } else {
    check.style.display = "block";
  }
}
/* **************************************************** */

$(document).on("input", "#inp-top", function () {
  var top_inp = document.querySelector(".top-h4");
  top_inp.innerHTML = $(this).val();
});
$(document).on("input", "#inp-bot", function () {
  var bot_inp = document.querySelector(".bot-h4");
  bot_inp.innerHTML = $(this).val();
});

//**************code to download meme********************

$("button").click(function (event) {
  event.preventDefault();
  printToFile();
});

function printToFile() {
  var wrapper = document.getElementById("#wrapperid");

  html2canvas(wrapper).then((canvas) => {
    canvas.crossOrigin = "Anonymous";
    var myImage = canvas.toDataURL("image/png"); //it actually returns a canvas then converted to DataURI
    //Then download file
    downloadURI("data:" + myImage, "yourMeme.png");
  });
}
//Creating dynamic link that automatically click
function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}
// *******************************************************

function preview_1(obj) {
  console.log(obj);
  var copy_image = document.querySelector(".copy-image");

  var image = new Image();
  image.src = obj.src;
  image.onload = function () {
    image_ele.src = image.src;

    copy_image.src = image.src;
  };
}
function preview_2(obj) {
  var copy_image = document.querySelector(".copy-image");
  if (FileReader) {
    var reader = new FileReader();
    reader.readAsDataURL(obj.files[0]);
    reader.onload = function (e) {
      var image = new Image();
      image.src = e.target.result;
      image.onload = function () {
        image_ele.src = image.src;
        copy_image.src = image.src;
      };
    };
  }
}

$(function () {
  $(".top-h4").draggable({
    containment: ".wrapper",
  });
});
$(function () {
  $(".bot-h4").draggable({
    containment: ".wrapper",
  });
});

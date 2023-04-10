var outImage =".original-image";
var image_ele=document.querySelector(outImage);
var image_container=document.querySelector(".image-container");




/********* Handling checkbox and toggle textbox *********/
var checkbox1=document.querySelector(".textbox1 input");
var checkbox2=document.querySelector(".textbox2 input");

checkbox1.addEventListener("click",(event)=> hide_textbox(".drag-top",event));
checkbox2.addEventListener("click",(event)=> hide_textbox(".drag-bot",event));


function hide_textbox(textbox_name,checkbox_name){
	var check=document.querySelector(textbox_name);
	if(checkbox_name.target.checked){
		check.style.display="none";
		
	}
	else{
		check.style.display="block";
		
	}
}
/* **************************************************** */


$(document).on('input','#inp-top',function(){
	var top_inp=document.querySelector(".top-h4");
	top_inp.innerHTML=$(this).val();
});
$(document).on('input','#inp-bot',function(){
	var bot_inp=document.querySelector(".bot-h4");
	bot_inp.innerHTML=$(this).val();
});




//**************code to download meme********************

$('button').click(function(event){
	event.preventDefault();
	printToFile();
});


function printToFile() {
	var wrapper = document.getElementById('#wrapperid');


		html2canvas(wrapper).then(canvas => {
			canvas.crossOrigin = "Anonymous";
			var myImage = canvas.toDataURL("image/png");//it actually returns a canvas then converted to DataURI
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



function preview_1(obj){
	console.log(obj);
	var copy_image=document.querySelector(".copy-image");
	
	var image=new Image();
	image.src=obj.src;
		image.onload = function () {
			image_ele.src=image.src;
			
			copy_image.src=image.src;
		};
}
function preview_2(obj)
{
	var copy_image=document.querySelector(".copy-image");
	if (FileReader)
	{
		var reader = new FileReader();
		reader.readAsDataURL(obj.files[0]);
		reader.onload = function (e) {
		var image=new Image();
		image.src=e.target.result;
		image.onload = function () {
			image_ele.src=image.src;
			copy_image.src=image.src;
			
		};
	}
}
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let image = new Image();
let topText = "Top Text";
let bottomText = "Bottom Text";
let textSize = 30;
let textColor = "#ffffff";

function drawMeme() {
  canvas.width = image.width;
  canvas.height = image.height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0);
  
  ctx.fillStyle = textColor;
  ctx.strokeStyle = 'black';
  ctx.textAlign = 'center';
  ctx.font = textSize + 'px Impact';
  
  // Draw top text
  ctx.lineWidth = textSize / 20;
  ctx.strokeText(topText, canvas.width/2, textSize, canvas.width - 20);
  ctx.fillText(topText, canvas.width/2, textSize, canvas.width - 20);
  
  // Draw bottom text
  ctx.strokeText(bottomText, canvas.width/2, canvas.height - 20, canvas.width - 20);
  ctx.fillText(bottomText, canvas.width/2, canvas.height - 20, canvas.width - 20);
}

function changeTextColor() {
  textColor = document.getElementById('text-color').value;
  drawMeme();
}

function changeTextSize() {
  textSize = document.getElementById('text-size').value;
  drawMeme();
}

image.onload = function() {
  drawMeme();
};

image.src = 'meme.jpg';


$( function() {
	$(".top-h4").draggable({
		containment:".wrapper"
	});
  } );
$( function() {
	$( ".bot-h4" ).draggable({
		containment:".wrapper"
	});
	
  } );

var pixelRatio = 1 / window.devicePixelRatio; 
var html = document.getElementsByTagName('html')[0];
var pageWidth = html.getBoundingClientRect().width;
html.style.fontSize = pageWidth / 10 + "px";
var Pmore = document.getElementById("Pmore");
var Pcontent = document.getElementById("Pcontent");
var Pli = Pcontent.getElementsByTagName("li");
var flag = false;
Pmore.onclick = function(){
	Pli[2].style.display="inline-block";
	Pli[3].style.display="inline-block";
	flag = true;
}
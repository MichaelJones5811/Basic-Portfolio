function myFunction(){
	document.getElementById("abby").style.height="500px";
	document.getElementById("abby").style.width="500px";
}
function redo(){
	document.getElementById("abby").style.height="315px";
	document.getElementById("abby").style.height="560px";
}


// button make picture grow


document.getElementById("abbyPicGrow").addEventListener("click",function(){
	document.getElementById("abby").style.height = "200px";
	document.getElementById("abby").style.width = "200px";
//

});
document.getElementById("reset").addEventListener("click",myFunction);

document.getElementById("abby").addEventListener("click",function(){
	document.getElementById("abby").innerHtml = "Abby is my Best Friend and I enjoy all the Christmas";
});

document.getElementById("redo").addEventListener("click",redo);		
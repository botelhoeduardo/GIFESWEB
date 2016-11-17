function slidetoggle(){
	var slider = document.getElementById("nav-slide");
	//slider.style.heigth = window.innerHeight - 0 + "px";
	tam = slider.style.left.length;
	num = slider.style.left.substring(0,tam-2);
	if(num >= 0){
		slider.style.left = "-250px";
	}
	else {
		num = parseInt(num)+250;
		slider.style.left = num+"px";
	}

}

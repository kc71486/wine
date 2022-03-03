var currentBeer = 0;
const rotatedeg = [-48, -23, -11, 0, 11, 23, 48];
const transxdist = [-32, -24, -11, 0, 11, 24, 32];
const transydist = [-40, -12, -3, 0, -3, -12, -40];

function rotateWine(left) {
	wine = document.getElementById("wine").style;
	if(left) {
		if(currentBeer >= 3)
			return;
		currentBeer += 1;
	}
	else {
		if(currentBeer <= -3)
			return;
		currentBeer -= 1;
	}
	
	rot = rotatedeg[currentBeer+3];
	tranx = transxdist[currentBeer+3];
	trany = transydist[currentBeer+3];
	wine.transform = 'rotate(' + rot + 'deg) translateX(' + tranx +'%) translateY(' + trany +'%)';
}

function scrollMenu(scrollin) {
	menu = document.getElementById("menu").style;
	screenmask = document.getElementById("screen_mask").style;
	if(scrollin) {
		trans = "translateX(0%)";
		screenmask.opacity = "0.5";
		screenmask.zIndex = "1";
	}
	else {
		trans = "translateX(-100%)";
		screenmask.opacity = "0";
		screenmask.zIndex = "-2";
	}
	menu.transform = trans;
}
function scrollCart(scrollin) {
	cart = document.getElementById("cart").style;
	screenmask = document.getElementById("screen_mask").style;
	if(scrollin) {
		trans = "translateX(0%)";
		screenmask.opacity = "0.5";
		screenmask.zIndex = "1";
	}
	else {
		trans = "translateX(100%)";
		screenmask.opacity = "0";
		screenmask.zIndex = "-2";
	}
	cart.transform = trans;
}
function clickmask() {
	scrollMenu(false);
	scrollCart(false);
}

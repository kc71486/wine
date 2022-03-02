var currentBeer = 0;
const rotatedeg = [-48, -23, -11, 0, 11, 23, 48];

function rotateWine(left) {
	wine = document.querySelector("#wine").style;
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
	tranx = currentBeer*10;
	trany = currentBeer*currentBeer*-3;
	wine.transform = 'rotate(' + rot + 'deg) translateX(' + tranx +'%) translateY(' + trany +'%)';
}

function scrollMenu(scrollin) {
	menu = document.querySelector(".menu").style;
	if(scrollin) {
		trans = "translateX(0%)";
	}
	else {
		trans = "translateX(-100%)";
	}
	menu.transform = trans;
}
function scrollCart(scrollin) {
	cart = document.querySelector(".cart").style;
	if(scrollin) {
		trans = "translateX(0%)";
	}
	else {
		trans = "translateX(100%)";
	}
	cart.transform = trans;
}
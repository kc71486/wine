function rotateBeer(left) {
	if(left) {
		if(beers.currentBeer <= 0)
			return;
		beers.currentBeer -= 1;
	}
	else {
		if(beers.currentBeer >= 6)
			return;
		beers.currentBeer += 1;
	}
	updateBeer();
}
function updateBeer() {
	for(let i=0; i<7; i++) {
		let pos = i - beers.currentBeer;
		let rot = 10 * pos;
		let tranx = 140 * pos;
		let trany = 8 * pos*pos;
		//translate xy before rotate or it will screw the positioning
		beers.style[i].transform = 'translateX(' + tranx +'%) translateY(' + trany +'%) rotate(' + rot + 'deg) ';
		if(pos>=-1 && pos<=1) {
			beers.id[i].classList.add('beercenter');
			beers.id[i].classList.remove('beeroffcenter');
		}
		else {
			beers.id[i].classList.add('beeroffcenter');
			beers.id[i].classList.remove('beercenter');
		}
	}
}

function scrollMenu(scrollin) {
	let menu = document.getElementById("menu").style;
	let screenmask = document.getElementById("screen_mask").style;
	if(scrollin) {
		trans = "translateX(0%)";
		screenmask.opacity = "0.5";
		screenmask.zIndex = "1";
	}
	else {
		trans = "translateX(-100%)";
		screenmask.opacity = "0";
		screenmask.zIndex = "-40";
	}
	menu.transform = trans;
}
function scrollCart(scrollin) {
	let cart = document.getElementById("cart").style;
	let screenmask = document.getElementById("screen_mask").style;
	if(scrollin) {
		trans = "translateX(0%)";
		screenmask.opacity = "0.5";
		screenmask.zIndex = "1";
	}
	else {
		trans = "translateX(100%)";
		screenmask.opacity = "0";
		screenmask.zIndex = "-40";
	}
	cart.transform = trans;
	document.getElementById("totalmoney").textContent = calcmoney();
	document.getElementById("ownedbeer").textContent = getOwnedBeer();
}
function calcmoney() {
	let money = 0;
	for(let i=0; i<7; i++) {
		money += beers.amount[i] * beers.prize[i];
	}
	return money;
}
function getOwnedBeer() {
	let beertext = "you have:";
	for(let i=0; i<7; i++) {
		if(beers.amount[i]) {
			beertext += "beer#" + i + ", ";
		}
	}
	if(beertext === "you have:") {
		beertext = "your cart is empty."
	}
	return beertext;
}

function clickmask() {
	scrollMenu(false);
	scrollCart(false);
}

function clickbeer(event) {
	let id = event.target.id.substring(4);
	if(id == beers.currentBeer) {
		beers.amount[beers.currentBeer] ^= 1;
	}
	else if(id == beers.currentBeer - 1) {
		rotateBeer(true);
	}
	else if(id == beers.currentBeer + 1) {
		rotateBeer(false);
	}
}

function loadEvent() {
	resizeEvent();
	updateBeer();
	for(let i=0; i<7; i++) {
		beers.id[i].addEventListener("click", clickbeer);
	}
	setTimeout("loadrotate()", 100);
}
function resizeEvent() {
	let w = window.innerWidth;
	for(let i=0; i<7; i++) {
		//image will always in the center
		beers.style[i].left = w/2 - 100 + 'px';
	}
}
function loadrotate() {
	for(let i=0; i<7; i++) {
		beers.id[i].classList.add('beerdynamic');
	}
	beers.currentBeer = 3;
	updateBeer();
}

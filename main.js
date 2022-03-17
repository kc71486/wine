var currentBeer = 0;
var selected = [0, 0, 0, 0, 0, 0, 0];

function rotateBeer(left) {
	if(left) {
		if(currentBeer >= 6)
			return;
		currentBeer += 1;
	}
	else {
		if(currentBeer <= 0)
			return;
		currentBeer -= 1;
	}
	updateBeer();
}
function updateBeer() {
	let beer = [];
	for(let i=0; i<7; i++) {
		beer[i] = document.getElementById('beer'+i).style;
	}
	for(let i=0; i<7; i++) {
		let pos = i+currentBeer-6;
		let rot = 10*pos;
		let tranx = 125*pos;
		let trany = 6*pos*pos;
		beer[i].transform = 'rotate(' + rot + 'deg) translateX(' + tranx +'%) translateY(' + trany +'%)';
		if(pos>=-1 && pos<=1) {
			beer[i].opacity = '1';
		}
		else {
			beer[i].opacity = '0.5';
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
		screenmask.zIndex = "-2";
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
		screenmask.zIndex = "-2";
	}
	cart.transform = trans;
	document.getElementById("totalmoney").textContent = calcmoney();
	document.getElementById("ownedbeer").textContent = getOwnedBeer();
}
function calcmoney() {
	let money = selected[0]
				+selected[1]*2
				+selected[2]*4
				+selected[3]*8
				+selected[4]*16
				+selected[5]*32
				+selected[6]*64;
	return money;
}
function getOwnedBeer() {
	let beers = "you have:";
	for(let i=0; i<7; i++) {
		if(selected[i]) {
			beers += "beer#" + i + ", ";
		}
	}
	if(beers == "you have:") {
		beers = "your cart is empty."
	}
	return beers;
}

function clickmask() {
	scrollMenu(false);
	scrollCart(false);
}

function clickcenter() {
	selected[currentBeer] ^= 1;
}

function loadevent() {
	currentBeer = 3;
	updateBeer();
}

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
	//lag friendly 2 fps
	if(Math.abs(beers.currentBeer - beers.currentPosFrame) < 0.05) {
		beers.currentPosFrame = beers.currentBeer;
	}
	else if(beers.currentBeer > beers.currentPosFrame)
		beers.currentPosFrame += 0.5;
	else if(beers.currentBeer < beers.currentPosFrame)
		beers.currentPosFrame -= 0.5;
	for(let i=0; i<7; i++) {
		let pos = i - beers.currentPosFrame;
		let rot = 10 * pos;
		let tranx = 140 * pos;
		let trany = 8 * pos*pos;
		//translate xy before rotate or it will screw the positioning
		beers.style[i].transform = "translateX(" + tranx +"%) translateY(" + trany +"%) rotate(" + rot + "deg) ";
		if(pos>=-1 && pos<=1) {
			beers.id[i].classList.add("beercenter");
			beers.id[i].classList.remove("beeroffcenter");
		}
		else {
			beers.id[i].classList.add("beeroffcenter");
			beers.id[i].classList.remove("beercenter");
		}
	}
	if(beers.currentBeer == beers.currentPosFrame)
		return;
	else
		setTimeout(updateBeer, 250);
}

function scrollMenu(scrollin) {
	let menu = document.getElementById("menu").style;
	let screenmask = document.getElementById("screen_mask").style;
	if(scrollin) {
		trans = "translateX(0%)";
		screenmask.opacity = "0.5";
		screenmask.zIndex = "5";
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
		beers.amount[id] ^= 1;
		document.getElementById("cart_note").textContent = getCartNoteText(id, beers.amount[id]);
		animateCartNote();
	}
	else if(id == beers.currentBeer - 1) {
		rotateBeer(true);
	}
	else if(id == beers.currentBeer + 1) {
		rotateBeer(false);
	}
}
function animateCartNote() {
	cart = document.getElementById("cart_note");
	clearTimeout(cartpid);
	cart.classList.remove("cart_animation");
	setTimeout(() => {cart.classList.add("cart_animation")}, 50);
	cartpid = setTimeout(() => {cart.classList.remove("cart_animation")}, 4050);
}
function getCartNoteText(idx, amount) {
	if(amount === 1) {
		return "selected " + beers.name[idx];
	}
	else {
		return "unselected " + beers.name[idx];
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
		beers.style[i].left = w/2 - 100 + "px";
	}
}
function loadrotate() {
	for(let i=0; i<7; i++) {
		beers.id[i].classList.add("beerdynamic");
	}
	beers.currentBeer = 3;
	updateBeer();
}

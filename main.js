<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta content="width=device-width, initial-scale=1" name="viewport">
		<link rel="stylesheet" type="text/css" href="./winestyle.css">
		<link rel="icon" href="resource/beericon.ico" type="image/x-icon">
		<title>wine</title>
	</head>
	<body class="body" onload="loadEvent()" onresize="resizeEvent()">
		<div id="topmargin"></div>
		<div id="hangar">hangar24</div>
		<div id="menuword" class="sideword" onclick="scrollMenu(true)">= menu</div>
		<div id="menu" class="side_area">
			<span class="scrolled_title"><u>menu</u></span>
			<span><a href="nothing.html" class="scrolled_content" target="_blank" title="about this site">about</a></span>
			<span><a href="nothing.html" class="scrolled_content" target="_blank" title="all products">product</a></span>
			<span><a href="nothing.html" class="scrolled_content" target="_blank" title="contact us">contact</a></span>
			<image id="menu_cross" class="cross" src="./resource/x.png" alt="cross for menu" onclick="scrollMenu(false)">
		</div>
		<div id="cartword" class="sideword" onclick="scrollCart(true)">cart</div>
		<div id="cart" class="side_area">
			<span class="scrolled_title"><u>cart</u></span>
			<span class="scrolled_content">
				<span id="ownedbeer">your cart is empty</span>
			</span>
			<p class="scrolled_content">total money:
				<span id="totalmoney">0</span>
			</p>
			<image id="cart_cross" class="cross" src="./resource/x.png" alt="cross for menu" onclick="scrollCart(false)">
		</div>
		<span id="cart_note" class="cart_notification">###</span>
		<span id="screen_mask" onclick="clickmask()"></span>
		<span class="arrow_left">
			<image id="arrow_left_black" src="./resource/arrow-black.png" alt="left arrow" onclick="rotateBeer(true)">
			<image id="arrow_left_yellow" src="./resource/arrow-yellow.png" alt="left arrow on hover" onclick="rotateBeer(true)">
		</span>
		<span class="arrow_right">
			<image id="arrow_right_black" src="./resource/arrow-black.png" alt="right arrow" onclick="rotateBeer(true)">
			<image id="arrow_right_yellow" src="./resource/arrow-yellow.png" alt="right arrow on hover" onclick="rotateBeer(false)">
		</span>
		<image id="beer0" class="beer beeroffcenter" src="resource/beer0.png" style="width:200px; height:400px;" alt="beer#0">
		<image id="beer1" class="beer beeroffcenter" src="resource/beer1.png" style="width:200px; height:400px;" alt="beer#1">
		<image id="beer2" class="beer beeroffcenter" src="resource/beer2.png" style="width:200px; height:400px;" alt="beer#2">
		<image id="beer3" class="beer beeroffcenter" src="resource/beer3.png" style="width:200px; height:400px;" alt="beer#3">
		<image id="beer4" class="beer beeroffcenter" src="resource/beer4.png" style="width:200px; height:400px;" alt="beer#4">
		<image id="beer5" class="beer beeroffcenter" src="resource/beer5.png" style="width:200px; height:400px;" alt="beer#5">
		<image id="beer6" class="beer beeroffcenter" src="resource/beer6.png" style="width:200px; height:400px;" alt="beer#6">
		<script type="text/javascript" src="./global.js"></script>
		<script type="text/javascript" src="./main.js"></script>
		<noscript>Please enable javascript or picture will not be aligned.</noscript>
	</body>
</html>

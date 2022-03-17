var beers = {
	id: [
		document.getElementById('beer0'),
		document.getElementById('beer1'),
		document.getElementById('beer2'),
		document.getElementById('beer3'),
		document.getElementById('beer4'),
		document.getElementById('beer5'),
		document.getElementById('beer6')
	],
	style: [
		document.getElementById('beer0').style,
		document.getElementById('beer1').style,
		document.getElementById('beer2').style,
		document.getElementById('beer3').style,
		document.getElementById('beer4').style,
		document.getElementById('beer5').style,
		document.getElementById('beer6').style
	],
	name: [
		'beer#0',
		'beer#1',
		'beer#2',
		'beer#3',
		'beer#4',
		'beer#5',
		'beer#6'
	],
	currentBeer: 8,
	currentPosFrame: 8,
	amount: [0, 0, 0, 0, 0, 0, 0],
	prize: [100, 150, 200, 300, 250, 400, 100]
};
var cartpid = -1;

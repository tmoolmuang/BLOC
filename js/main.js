function StackedDeck(code) {
	this.cheatCode = code;	
 	this.deck = ["Ah", "2h", "3h", "4h", "5h", "6h", "7h", 
							"8h", "9h", "10h", "Jh", "Qh", "Kh",
						 	"Ac", "2c", "3c", "4c", "5c", "6c", "7c", 
							"8c", "9c", "10c", "Jc", "Qc", "Kc",
						 	"As", "2s", "3s", "4s", "5s", "6s", "7s", 
							"8s", "9s", "10s", "Js", "Qs", "Ks",
						 	"Ad", "2d", "3d", "4d", "5d", "6d", "7d", 
							"8d", "9d", "10d", "Jd", "Qd", "Kd"						 
						 ];	
	this.shuffle =  function() {	
		var shuffledDeck = [];
		var randomNum;
		while (this.deck.length >= 1) {
			randomNum = Math.floor(Math.random() * this.deck.length);
			shuffledDeck.push(this.deck.splice(randomNum, 1));			
		}
		this.deck = shuffledDeck.slice();
	}
}

var myDeck = new StackedDeck();
for (var q=0; q<myDeck.deck.length; q++) {
	console.log(myDeck.deck[q]);
}
console.log(typeof(myDeck.dek));
myDeck.shuffle();
for (var q=0; q<myDeck.deck.length; q++) {
	console.log(myDeck.deck[q]);
}
console.log(typeof(myDeck));



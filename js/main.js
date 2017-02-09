function findBall(balls) {
 	var p, left, right, stray, result;
	var count = 0;
  while (balls.length > 1) {
		p = Math.ceil(balls.length/3);
	 	left = balls.slice(0, p);
		right = balls.slice(p, p*2);
		stray = balls.slice(p*2, balls.length);
		result = scales(left, right);
		count++;
		if (result == 0)
			balls = stray;
		else {
			if (result == -1) {
				balls = left;
			}
			else {
				balls = right;
			}
		}
  }
	console.log("scale count = " + count);
	console.log("heaviest ball: "); 
  return balls[0];
}

console.log(findBall(makeBalls(249, 115)));
console.log(findBall(makeBalls(32, 24)));
console.log(findBall(makeBalls(9, 5)));

function makeBalls(numberBall, makeHeavy) {
	function Ball(num, weight) {
		this.num = num;
		this.weight = weight;
	}
	var balls = [];
	for (var i=1; i<numberBall+1; i++) {
		balls.push(new Ball(i, (i==makeHeavy)?2:1));
	}	
	return balls;
}

function scales(leftballs, rightballs) {
	var tleft = 0;
	var tright = 0;
	var result;
	for (var i=0; i<leftballs.length; i++) {
		tleft += leftballs[i].weight;		
	}
	for (var j=0; j<rightballs.length; j++) {
		tright += rightballs[j].weight;
	}	
	if (tleft == tright) {
		return 0;
	} 
	else {
		if (tleft > tright) {
			return -1;
		}
		else {
			return 1;
		}
	}
}

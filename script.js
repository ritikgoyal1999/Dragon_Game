score =0;
cross = true;

  audio = new Audio('backgroundSound.mp3');
  audiogo = new Audio('collision.mp3');

  setTimeout(()=>{
			 audio.play()
		  },1000);

document.onkeydown = function(e){
	console.log("Key code is ", e.keyCode);
	if(e.keyCode==38)
	{
		dino = document.querySelector('.dino');
		dino.classList.add('animateDino');
		setTimeout(() => {
			dino.classList.remove('animateDino');
		},700);
	}
	
	 if(e.keyCode==39)
	 {
		 dino = document.querySelector('.dino');
		 dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
		 dino.style.left = dinoX + 132 + "px";
	 }
	
	
	 if(e.keyCode==37)
	 {
		 dino = document.querySelector('.dino');
		 dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
		 dino.style.left = (dinoX - 132) + "px";
	 }
}

setInterval(()=>{
	dino = document.querySelector('.dino');
	gameOver = document.querySelector('.gameOver');
	gameBody = document.querySelector('.gameBody');
	
	 dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
	 dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

		
	 ox = parseInt(window.getComputedStyle(gameBody, null).getPropertyValue('left'));
	 oy = parseInt(window.getComputedStyle(gameBody, null).getPropertyValue('top'));
	
	 offsetX = Math.abs(dx-ox);
	 offsetY = Math.abs(dy-oy);
	
	 if(offsetX<73 && offsetY<52)
	 {
		gameOver.style.visibility = 'visible';
		gameBody.classList.remove('gameBodyAnimation');
		audiogo.play();
		 setTimeout(()=>{
			 audiogo.pause();
			 audio.pause();
		  },1000);
		
	 }
	 else if(offsetX<145 && cross)
	 {
		score+=1;
		UpdateScore(score);
		cross = false;
		 
		setTimeout(()=>{
		 cross = true;
		},1000);
		 
		setTimeout(()=>{
	    animationDur = parseFloat(window.getComputedStyle(gameBody, null).getPropertyValue('animation-duration'));
		newDur = animationDur - 0.8;
		gameBody.style.animationduration = newDur + 's';
		console.log('New animation value:', newDur);
		},500) ;
	 }
	

},10);

function UpdateScore(score)
{
	scoreCount.innerHTML = "Your Score: "+score;
}
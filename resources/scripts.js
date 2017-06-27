var gameBoardEl = document.getElementById("gameBoard");
var availableBlocks = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];


function hasClass( target, className ) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

function chooseRandomIndex(){
	return Math.floor(Math.random() * availableBlocks.length);
}

function computerPlay(){
	var randomId = chooseRandomIndex();
	var randomField = availableBlocks[randomId];

	availableBlocks.splice(randomId, 1);	

	setTimeout(function(){
		document.getElementById(randomField).innerHTML = "<i class='ion-android-radio-button-off'></i>";
	}, 300);
}

gameBoardEl.onclick = function(ev){
	ev.stopPropagation();
	if (hasClass(ev.target, 'block') && availableBlocks.indexOf(ev.target.id) > -1){

		if (availableBlocks.indexOf(ev.target.id) !== -1){
			availableBlocks.splice(availableBlocks.indexOf(ev.target.id), 1);

		}

		ev.target.innerHTML = "<i class='ion-close-round'></i>";

		
		if (availableBlocks.length){
			computerPlay();
		}
		else{
			setTimeout(function(){
				alert('Game over!');
			}, 300)
		}
	
	}
	return false;
} 

//winner logic

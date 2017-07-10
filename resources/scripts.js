var gameBoardEl = document.getElementById("gameBoard");
var availableBlocks = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var playerClass = "xClass";
var computerClass = "oClass";
var winningLines = 
[
	["1", "2", "3"],
	["4", "5", "6"],
	["7", "8", "9"],
	["1", "5", "9"],
	["3", "5", "7"],
	["1", "4", "7"],
	["1", "4", "7"],
	["2", "5", "8"],
	["3", "6", "9"]
]

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
	document.getElementById(randomField + "").classList.add(computerClass);
	checkIfWon(computerClass);
}

gameBoardEl.onclick = function(ev){
	ev.stopPropagation();
	if (hasClass(ev.target, 'block') && !(hasClass(ev.target, 'xClass') || hasClass(ev.target, 'oClass'))){
		if (availableBlocks.indexOf(ev.target.id) !== -1){
			availableBlocks.splice(availableBlocks.indexOf(ev.target.id), 1);

		}

		ev.target.innerHTML = "<i class='ion-close-round'></i>";

		ev.target.classList.add(playerClass);


		if (!checkIfWon(playerClass) && availableBlocks.length){
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

function checkIfWon(classToCheck){
	for (var i = 0; i < winningLines.length; i++){
			if (
				hasClass(document.getElementById(winningLines[i][0]), classToCheck) &&
				hasClass(document.getElementById(winningLines[i][1]), classToCheck) &&
				hasClass(document.getElementById(winningLines[i][2]), classToCheck)
			){
				setTimeout(function(){
					alert (classToCheck + " won");
				}, 10);
				break;
				return true;
			}
	}
	return false;
}


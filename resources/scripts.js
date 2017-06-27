var gameBoardEl = document.getElementById("gameBoard");
var idArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function hasClass( target, className ) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

gameBoardEl.onclick = function(ev){
	ev.stopPropagation();
	if (hasClass(ev.target, 'block')){

		if (idArray.indexOf(ev.target.id) !== -1){
			idArray.splice(idArray.indexOf(ev.target.id), 1);
		}

		ev.target.innerHTML = "<i class='ion-close-round'></i>";
	}
	return false;

} 



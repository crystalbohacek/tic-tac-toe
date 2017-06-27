var gameBoardEl = document.getElementById("gameBoard");

gameBoardEl.onclick = function(ev){

	ev.target.innerHTML = "<span> X </span>";
} 



function verifyWinner(player){

	if(player === players[0]){
	
		win(winArrH,playerOneArr,player);
		win(winArrV,playerOneArr,player);
		win(winArrD1,playerOneArr,player)
		win(winArrD2,playerOneArr,player)

	}else{
		win(winArrH,playerTwoArr,player);
		win(winArrV,playerTwoArr,player);
		win(winArrD1,playerTwoArr,player)
		win(winArrD2,playerTwoArr,player)
		
	}

}

function win(arrPossibility,arrPlayer,playercell){
	
	let countToWin = 0;
	for(let i = 0 ; i < arrPossibility.length;i++){
		countToWin = 0
		for(let c = 0 ; c < 4 ; c++){
			if(arrPlayer.includes(arrPossibility[i][c])){
				countToWin++;	
			}		
		}
		if(countToWin===4){
			playercell = (playercell.classList.value === 'catCells') ?  catV() : dogV();
			
          
			countToWin = 0
			//colocar função que mostrara a tela de vitoria
			setTimeout(function(){gameBox.remove()}, 2000)
			let section = document.querySelectorAll('section');
			section.forEach(function(element){element.removeEventListener('click', cell)})
			return 
		}
		
	}
	
}


let button = document.createElement('button');
let node = document.createTextNode('Reset');
function reset() {
	
   setTimeout(function() {button.appendChild(node), body.appendChild(button)}, 2000);
   
   button.addEventListener('click', function() {
	console.log(gameBox.childNodes)
	gameBox.innerHTML= '';
	num = 1;
	playerOneArr = [];
	playerTwoArr = [];
	dogPopUp.remove()
	img.remove()
	catPopUp.remove()
	imge.remove()
	button.remove()

	
	menu.style.display = 'flex'
	 
})   

}



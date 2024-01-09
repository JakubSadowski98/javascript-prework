function printMessage(msg) {
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else {
	return 'nożyce';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
	printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
	printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
	printMessage('Remis');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}


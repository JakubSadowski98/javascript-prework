const buttonRock = document.getElementById('button-rock'); // tu będą kolejne linie kodu, w których do zmiennych będą przypisane elementy znalezione po id
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName){ //początek deklaracji funkcji
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    const playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}                                       //koniec deklaracji funkcji

buttonRock.addEventListener('click', function(){buttonClicked('kamień')}); // tu będą kolejne powiązania guzików z funkcją buttonClicked
buttonPaper.addEventListener('click', function(){buttonClicked('papier')});
buttonScissors.addEventListener('click', function(){buttonClicked('nożyce')});



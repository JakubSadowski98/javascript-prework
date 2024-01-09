var buttonRock, buttonPaper, buttonScissors; // tu będą wymienione pozostałe zmienne guzików, np. buttonRock

buttonRock = document.getElementById('button-rock'); // tu będą kolejne linie kodu, w których do zmiennych będą przypisane elementy znalezione po id
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

var argButtonName;

function buttonClicked(argButtonName){ //początek deklaracji funkcji
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    var computerMove, playerMove, randomNumber;

    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}                                       //koniec deklaracji funkcji

buttonRock.addEventListener('click', function(){ // tu będą kolejne powiązania guzików z funkcją buttonClicked
    buttonClicked('kamień')
});
buttonPaper.addEventListener('click', function(){
    buttonClicked('papier')
});
buttonScissors.addEventListener('click', function(){
    buttonClicked('nożyce')
});

function showGoals() {
    var goalsList = document.getElementById('goals-list');
    
    if (goalsList.innerHTML === '') {
        goalsList.innerHTML = '<h4>Kevins favoritmål:</h4>' +
            '<p>• Mål mot Arsenal 2015-16</p>' +
            '<p>• Mål mot Chelsea 2017-18</p>' +
            '<p>• Mål mot Liverpool 2019-20</p>' +
            '<p>• Mål mot Real Madrid 2021-22</p>' +
            '<p>• Mål mot Manchester United 2023-24</p>';
    } else {
        goalsList.innerHTML = '';
    }
}

function showJerseys() {
    var jerseysList = document.getElementById('jerseys-list');
    
    if (jerseysList.innerHTML === '') {
        jerseysList.innerHTML = '<h4>Tröja-samling:</h4>' +
            '<p>• 2015-16: Första säsongen</p>' +
            '<p>• 2017-18: Centurions-säsongen</p>' +
            '<p>• 2019-20: Champions League-final</p>' +
            '<p>• 2021-22: Premier League-mästare</p>' +
            '<p>• 2023-24: Treble-vinnare</p>';
    } else {
        jerseysList.innerHTML = '';
    }
}

function showTribute() {
    var tributeForm = document.getElementById('tribute-form');
    
    if (tributeForm.innerHTML === '') {
        tributeForm.innerHTML = '<h4>Skriv din hyllning:</h4>' +
            '<input type="text" id="name" placeholder="Ditt namn"><br><br>' +
            '<textarea id="message" placeholder="Din hyllning..." rows="4" cols="40"></textarea><br><br>' +
            '<button onclick="submitTribute()">Skicka hyllning</button>';
    } else {
        tributeForm.innerHTML = '';
    }
}

function submitTribute() {
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    
    if (name === '' || message === '') {
        alert('Vänligen fyll i både namn och meddelande!');
        return;
    }
    
    var tributeForm = document.getElementById('tribute-form');
    tributeForm.innerHTML = '<h4>Tack för din hyllning, ' + name + '!</h4>' +
        '<p>"' + message + '"</p>' +
        '<p><em>Din hyllning har sparats!</em></p>';
}
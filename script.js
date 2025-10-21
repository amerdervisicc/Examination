document.addEventListener('DOMContentLoaded', () => {
    initializeMobileMenu();
    updateFooterYear();
});

const getCurrentYear = () => new Date().getFullYear();

const updateFooterYear = () => {
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        footerYear.textContent = footerYear.textContent.replace('2024', getCurrentYear());
    }
};

function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger && navMenu) {

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

function showGoals() {
    const goalsList = document.getElementById('goals-list');
    
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
    const jerseysList = document.getElementById('jerseys-list');
    
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
    const tributeForm = document.getElementById('tribute-form');
    
    if (tributeForm.innerHTML === '') {
        tributeForm.innerHTML = '<h4>Skriv din hyllning:</h4>' +
            '<input type="text" id="name" placeholder="Ditt namn" class="tribute-input">' +
            '<textarea id="message" placeholder="Din hyllning..." rows="4" class="tribute-textarea"></textarea>' +
            '<button onclick="submitTribute()" class="tribute-submit-btn">Skicka hyllning</button>';
    } else {
        tributeForm.innerHTML = '';
    }
}

function submitTribute() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    if (name === '' || message === '') {
        alert('Vänligen fyll i både namn och meddelande!');
        return;
    }
    
    const tributeForm = document.getElementById('tribute-form');
    tributeForm.innerHTML = '<h4>Tack för din hyllning, ' + name + '!</h4>' +
        '<p>"' + message + '"</p>' +
        '<p><em>Din hyllning har sparats!</em></p>';
}
document.addEventListener('DOMContentLoaded', () => {
    initializeTribute();
});

const initializeTribute = () => {
    const tributeForm = document.getElementById('tributeForm');
    const tributesGrid = document.getElementById('tributesGrid');

    loadTributes();

    tributeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitTribute();
    });

    const validateForm = () => {
        const name = document.getElementById('tributeName').value.trim();
        const message = document.getElementById('tributeMessage').value.trim();
        
        if (!name || !message) {
            showNotification('Vänligen fyll i både namn och meddelande!', 'error');
            return false;
        }
        
        if (message.length < 10) {
            showNotification('Meddelandet måste vara minst 10 tecken långt.', 'error');
            return false;
        }
        
        return true;
    };

    const submitTribute = () => {
        if (!validateForm()) return;

        const formData = new FormData(tributeForm);
        const tributeData = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
            season: formData.get('season'),
            date: new Date().toISOString(),
            id: Date.now().toString()
        };

        const tributes = JSON.parse(localStorage.getItem('tributes') || '[]');
        tributes.push(tributeData);
        localStorage.setItem('tributes', JSON.stringify(tributes));

        addTributeToDisplay(tributeData);

        tributeForm.reset();

        showNotification('Tack för din hyllning! Den har sparats.', 'success');
    };

    const loadTributes = () => {
        const tributes = JSON.parse(localStorage.getItem('tributes') || '[]');

        tributes.forEach(tribute => {
            addTributeToDisplay(tribute);
        });

        if (tributes.length === 0) {
            showSampleTributes();
        }
    };

    const addTributeToDisplay = (tribute) => {
        const tributeCard = createTributeCard(tribute);
        tributesGrid.insertAdjacentHTML('afterbegin', tributeCard);
    };

    const createTributeCard = (tribute) => {
        const { name, message, season, date } = tribute;
        const formattedDate = new Date(date).toLocaleDateString('sv-SE');
        
        return `
            <div class="tribute-card">
                <h3>${name}</h3>
                <div class="tribute-date">${formattedDate}</div>
                ${season ? `<span class="tribute-season">${season}</span>` : ''}
                <p>${message}</p>
            </div>
        `;
    };

    const showSampleTributes = () => {
        const sampleTributes = [
            {
                name: "Sarah M.",
                message: "Kevin de Bruyne är den bästa spelaren jag någonsin har sett. Hans passningar är magiska och han har gjort Manchester City till det lag det är idag. Tack för alla fantastiska minnen!",
                season: "2021-22",
                date: "2024-01-15T10:30:00Z"
            },
            {
                name: "James L.",
                message: "Jag kommer aldrig att glömma hans mål mot Real Madrid i Champions League. Det var det vackraste jag någonsin har sett på en fotbollsplan. En sann legend!",
                season: "2021-22",
                date: "2024-01-20T14:45:00Z"
            },
            {
                name: "Emma K.",
                message: "Kevin de Bruyne har varit min favoritspelare sedan han kom till City. Hans teknik, vision och ledarskap är exceptionella. Han kommer att saknas enormt.",
                season: "2017-18",
                date: "2024-02-01T09:15:00Z"
            }
        ];

        const sampleCards = sampleTributes.map(tribute => createTributeCard(tribute)).join('');
        tributesGrid.innerHTML = sampleCards;
    };

    const showNotification = (message, type) => {

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
 
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            border-radius: 5px;
            color: white;
            font-weight: 600;
            z-index: 3000;
            animation: slideIn 0.3s ease;
            ${type === 'success' ? 'background: #28a745;' : 'background: #dc3545;'}
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    };

    const addSearchFunctionality = () => {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Sök hyllningar...';
        searchInput.className = 'search-input';
        searchInput.style.cssText = `
            width: 100%;
            max-width: 400px;
            padding: 0.8rem;
            border: 2px solid #e9ecef;
            border-radius: 25px;
            margin: 2rem auto;
            display: block;
            font-size: 1rem;
        `;

        const tributesDisplay = document.querySelector('.tributes-display');
        tributesDisplay.insertBefore(searchInput, tributesGrid);

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const tributeCards = document.querySelectorAll('.tribute-card');
            
            // Use filter HOF to filter tribute cards
            tributeCards.forEach(card => {
                const name = card.querySelector('h3').textContent.toLowerCase();
                const message = card.querySelector('p').textContent.toLowerCase();
                
                if (name.includes(searchTerm) || message.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    };

    addSearchFunctionality();
};

const tributeUtils = {

    createTributeHTML: (tribute) => {
        const { name, message, season, date } = tribute;
        const formattedDate = new Date(date).toLocaleDateString('sv-SE');
        
        return `
            <div class="tribute-card">
                <h3>${name}</h3>
                <div class="tribute-date">${formattedDate}</div>
                ${season ? `<span class="tribute-season">${season}</span>` : ''}
                <p>${message}</p>
            </div>
        `;
    },

    processTributeData: (tributeData) => {
        const { name, message, season, date, email } = tributeData;
        return {
            authorName: name,
            tributeMessage: message,
            favoriteSeason: season,
            submissionDate: date,
            authorEmail: email
        };
    },

    sortTributesByDate: (tributes) => {
        return tributes.sort((a, b) => new Date(b.date) - new Date(a.date));
    },

    filterTributesBySeason: (tributes, season) => {
        return tributes.filter(tribute => tribute.season === season);
    },

    getTributeStats: (tributes) => {
        const totalTributes = tributes.length;
        const seasonCounts = tributes.reduce((acc, tribute) => {
            const season = tribute.season || 'Ingen säsong';
            acc[season] = (acc[season] || 0) + 1;
            return acc;
        }, {});

        return {
            total: totalTributes,
            bySeason: seasonCounts,
            averageLength: tributes.reduce((sum, tribute) => sum + tribute.message.length, 0) / totalTributes
        };
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { tributeUtils };
}

document.addEventListener("DOMContentLoaded", function () {
    const acceptBtn = document.getElementById('acceptBtn');
    const rejectBtn = document.getElementById('rejectBtn');
    const roommateContainer = document.getElementById('roommates');

    // Sample roommate data
    const roommates = [
        { name: 'John Doe', image: 'images/pexels-photo-935985.jpeg', description: 'Looking for a quiet roommate, loves gaming and basketball.' },
        { name: 'Jane Smith', image: 'images/depositphotos_466060946-stock-photo-smiling-black-lady-student-with.jpg', description: 'Outgoing and loves cooking and yoga.' },
        { name: 'Mike Brown', image: 'images/istockphoto-1438969575-612x612.jpg', description: 'Enjoys late-night studying and jogging in the morning.' },
        { name: 'Emily Davis', image: 'images/pexels-olly-3769021.jpg', description: 'A night owl who loves music and art.' }
    ];

    let currentCardIndex = 0;

    // Function to create a roommate card
    function createRoommateCard({ name, image, description }) {
        const card = document.createElement('div');
        card.className = 'roommate-card';
        card.innerHTML = `
            <img src="${image}" alt="${name}">
            <div class="roommate-info">
                <h2>${name}</h2>
                <p>${description}</p>
            </div>
        `;
        return card;
    }

    // Function to load initial cards
    function loadCards() {
        roommates.forEach((roommate, index) => {
            const card = createRoommateCard(roommate);
            card.style.display = index === currentCardIndex ? 'flex' : 'none';
            roommateContainer.appendChild(card);
        });
    }

    // Swipe away card with animation
    function swipeCard(action) {
        const cards = document.querySelectorAll('.roommate-card');
        if (currentCardIndex < cards.length) {
            const currentCard = cards[currentCardIndex];
            currentCard.classList.add(action); // Add 'accepted' or 'rejected' class for animation
            setTimeout(() => {
                currentCard.style.display = 'none'; // Hide the current card after animation
                currentCardIndex++;
                if (currentCardIndex < cards.length) {
                    cards[currentCardIndex].style.display = 'flex'; // Show the next card
                }
            }, 500); // Adjust delay to match animation duration
        }
    }

    // Event listeners for buttons
    acceptBtn.addEventListener('click', function () {
        swipeCard('accepted');
    });

    rejectBtn.addEventListener('click', function () {
        swipeCard('rejected');
    });

    // Initialize the cards
    loadCards();
});

// Cronômetro
const startDate = new Date('2023-12-21T00:00:00');
const timerElement = document.getElementById('timer');

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timerElement.textContent = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos de amor.`;
}

setInterval(updateTimer, 1000);

// Abrir Carta
const openLetterButton = document.getElementById('open-letter');
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

openLetterButton.addEventListener('click', () => {
    envelope.classList.toggle('open');
    if (envelope.classList.contains('open')) {
        letter.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente até o início
    }
});

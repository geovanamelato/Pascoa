function revealMessage(number) {
    // Esconde todas as mensagens primeiro
    document.querySelectorAll('.hidden-message').forEach(msg => {
        msg.style.display = 'none';
    });
    
    // Mostra a mensagem selecionada
    const message = document.getElementById('message' + number);
    message.style.display = 'block';
}

function showSurprise() {
    const surpriseBox = document.getElementById('surprise-box');
    const button = document.querySelector('.surprise-btn');
    
    if (surpriseBox.classList.contains('hidden')) {
        surpriseBox.classList.remove('hidden');
        button.textContent = 'Presente recebido! ❤️';
        
        // Efeito de corações
        createHearts();
    } else {
        surpriseBox.classList.add('hidden');
        button.textContent = 'Clique para seu presente';
    }
}

function createHearts() {
    const heartStyles = ['❤️', '🖤', '🤍','❤️', '🖤', '🤍','❤️', '🖤', '🤍','❤️', '🖤', '🤍','❤️', '🖤', '🤍'];
    const colors = ['#ff0000', '#ff6b6b', '#ff8e8e', '#ffb3b3', '#ffd8d8'];
    
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = heartStyles[Math.floor(Math.random() * heartStyles.length)];
        heart.style.position = 'fixed';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-30px';
        heart.style.zIndex = '1000';
        heart.style.opacity = '0.8';
        heart.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
        document.body.appendChild(heart);
        
        const animationDuration = Math.random() * 3 + 2;
        
        heart.animate([
            { top: '-30px', opacity: 1 },
            { top: window.innerHeight + 'px', opacity: 0 }
        ], {
            duration: animationDuration * 1000,
            easing: 'cubic-bezier(0.1, 0.8, 0.9, 1)'
        });
        
        setTimeout(() => {
            heart.remove();
        }, animationDuration * 1000);
    }
}

// Mostra a primeira mensagem ao carregar
window.onload = function() {
    revealMessage(1);
};

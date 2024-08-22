document.addEventListener('DOMContentLoaded', () => {
    // Mostrar mais sobre o Homem-Aranha
    const moreAboutBtn = document.getElementById('more-about-btn');
    const moreAboutSection = document.getElementById('more-about');
    
    moreAboutBtn.addEventListener('click', () => {
        moreAboutSection.classList.toggle('hidden');
    });

    // Mostrar poderes
    const togglePowersBtn = document.getElementById('toggle-powers-btn');
    const togglePowersSection = document.getElementById('toggle-powers');
    
    togglePowersBtn.addEventListener('click', () => {
        togglePowersSection.classList.toggle('hidden');
    });

    // Exibir informações dos vilões
    const villains = {
        'Duende Verde': 'Norman Osborn, um dos maiores inimigos do Homem-Aranha, conhecido por seu traje verde e seus dispositivos letais.',
        'Dr. Octopus': 'Otto Octavius, um cientista com braços mecânicos altamente avançados que lhe conferem força e habilidades sobre-humanas.',
        'Venom': 'Eddie Brock, um anti-herói com um simbiótico alienígena que lhe dá força e habilidades semelhantes às do Homem-Aranha.',
        'Electro': 'Max Dillon, um criminoso com a habilidade de manipular eletricidade.',
        'Rei do Crime': 'Wilson Fisk, um poderoso chefe do crime em Nova York.'
    };

    const villainCards = document.querySelectorAll('.villain-card');
    const villainName = document.getElementById('villain-name');
    const villainDetails = document.getElementById('villain-details');

    villainCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const villain = e.currentTarget.getAttribute('data-villain');
            villainName.textContent = villain;
            villainDetails.textContent = villains[villain] || 'Informações não disponíveis.';
            document.querySelector('#villain-info').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animação ao rolar para a seção
    const sections = document.querySelectorAll('.section');
    const options = {
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Interatividade do título
    const siteTitle = document.getElementById('site-title');

    siteTitle.addEventListener('mouseover', () => {
        siteTitle.style.color = '#ffcccc';
        siteTitle.style.transform = 'scale(1.1)';
        siteTitle.style.textShadow = '0 6px 12px rgba(0, 0, 0, 0.9)';
    });

    siteTitle.addEventListener('mouseout', () => {
        siteTitle.style.color = '#ffffff';
        siteTitle.style.transform = 'scale(1)';
        siteTitle.style.textShadow = '0 4px 8px rgba(0, 0, 0, 0.8)';
    });
});

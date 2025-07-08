

// Menu toggle 
const menuToggle = document.querySelector('.menu-toggle'); 
const navLinks = document.querySelector('.nav-links'); 
menuToggle.addEventListener('click', () => { 
    navLinks.classList.toggle('active'); 
}); 

// Scroll header 
window.addEventListener('scroll', () => { 
    const header = document.getElementById('header'); 
    if (window.scrollY > 100) { 
    header.classList.add('scrolled'); 
    } 
    else { 
        header.classList.remove('scrolled'); 
    } 
}); 
    
// Smooth scroll pour les liens 
document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener('click', function(e) { 
        e.preventDefault(); 
        // Ferme le menu mobile si ouvert 
        if (navLinks.classList.contains('active')) { 
            navLinks.classList.remove('active'); 
        } 
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' }); 
    });
}); 
// Animation des barres de compétences 
function animateSkills() { 
    const skillElements = document.querySelectorAll('.skill-progress'); 
    skillElements.forEach(skill => { 
        skill.style.width = '0'; 
        setTimeout(() => { 
            skill.style.width = skill.getAttribute('style').split(':') [1]; 
        }, 500); 
    }); 
}
// Observer pour déclencher l'animation des compétences lorsque visible 
const skillsSection = document.getElementById('competences'); 
const observer = new IntersectionObserver((entries) => { 
    entries.forEach(entry => { 
        if (entry.isIntersecting) { 
            animateSkills(); 
            observer.unobserve(entry.target); 
        } 
    }); 
}, { threshold: 0.1 }); 
observer.observe(skillsSection);

// Animation du texte d'accueil 
const animateHeroText = () => { 
    const heroContent = document.querySelector('.hero-content'); 
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)'; 
    setTimeout(() => { 
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease'; 
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)'; 
    }, 300); 
}; 
// Déclencher l'animation au chargement de la page 
window.addEventListener('load', animateHeroText); 

// telecharger le fichier pdf
document.getElementById('downloadButton').addEventListener('click', function() {
    const pdfFileName = 'monfichier.pdf';
    const pdfFilePath = 'upload/' + pdfFileName;
    
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.classList.add('hidden');
    
    // Vérifier d'abord si le fichier existe
    fetch(pdfFilePath, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                // Afficher le message
                statusMessage.textContent = 'Téléchargement en cours...';
                statusMessage.className = 'status success';
                statusMessage.classList.remove('hidden');
                
                // Créer un lien temporaire pour le téléchargement
                const link = document.createElement('a');
                link.href = pdfFilePath;
                link.download = pdfFileName;
                
                // Simuler un clic sur le lien
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Cacher le message après 3 secondes
                setTimeout(() => {
                    statusMessage.classList.add('hidden');
                }, 3000);
            } else {
                throw new Error('Fichier non trouvé');
            }
        })
        .catch(error => {
            statusMessage.textContent = 'Erreur: Le fichier PDF n\'a pas pu être trouvé.';
            statusMessage.className = 'status error';
            statusMessage.classList.remove('hidden');
            console.error('Erreur:', error);
            
            // Cacher le message d'erreur après 5 secondes
            setTimeout(() => {
                statusMessage.classList.add('hidden');
            }, 5000);
        });
});
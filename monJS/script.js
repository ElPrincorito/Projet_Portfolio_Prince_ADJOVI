document.addEventListener('DOMContentLoaded', () => {

   /* @@@SupposedbyPrincePearsonFerencziADJOVI FOR DClicOIFBeginningLevelProject@@@ */
   /* GESTION DE LA NAVIGATION RESPONSIVE */
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    /*GESTION DU FORMULAIRE DE CONTACT ET VALIDATION */
    /* (Use window.location.href for mailto redirection) */
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');
    const recipientEmail = 'pearson3adjovi@gmail.com'; 

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            
            /* Empêche l'envoi par défaut pour valider */
            event.preventDefault(); 
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            /* Fonction simple de validation de l'e-mail */
            function isValidEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(String(email).toLowerCase());
            }

            /* Vérification des champs */
            if (name === '' || email === '' || subject === '' || message === '') {
                formMessage.textContent = 'Erreur : Tous les champs sont obligatoires.';
                formMessage.style.color = 'var(--secondary-color)';
            } else if (!isValidEmail(email)) {
                formMessage.textContent = 'Erreur : Veuillez entrer une adresse e-mail valide.';
                formMessage.style.color = 'var(--secondary-color)';
            } else {
                
                /* Construction et Lancement du mailto */
                /* Corps du message (inclut toutes les données dans le corps du mail) */
                const bodyContent = `
                Nom: ${name}
                Email de réponse: ${email}
                Message: ${message}`;
                
                /* Encodage des composants de l'URL */
                const subjectEncoded = encodeURIComponent(subject);
                const bodyEncoded = encodeURIComponent(bodyContent);

                /* Construction de l'URL mailto finale */
                const mailtoUrl = `mailto:${recipientEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;

                /* Redirection pour ouvrir le client de messagerie de l'utilisateur (ACTION) */
                window.location.href = mailtoUrl;

                /* Afficher et nettoyer l'interface */
                formMessage.textContent = 'Ouverture de votre client de messagerie...';
                formMessage.style.color = 'var(--primary-color)';
                
                setTimeout(() => {
                    contactForm.reset();
                    formMessage.textContent = '';
                }, 3000);
            }
        });
    }

    /* @@@SupposedbyPrincePearsonFerencziADJOVI FOR DClicOIFBeginningLevelProject@@@ */

    /* GESTION DE LA MODALE DES PROJETS */
        
    const modal = document.getElementById("projectModal");
    const closeButton = document.getElementsByClassName("close-button")[0];
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalTech = document.getElementById("modal-tech");
    const modalLink = document.getElementById("modal-link");
    const openModalButtons = document.querySelectorAll('.open-modal');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const title = button.getAttribute('data-title');
            const description = button.getAttribute('data-description');
            const tech = button.getAttribute('data-tech');
            const link = button.getAttribute('data-link'); 

            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalTech.textContent = `Technologies utilisées : ${tech}`;
            
            modalLink.href = link;
            modalLink.setAttribute('target', '_blank');
            modalLink.setAttribute('rel', 'noopener noreferrer');

            modal.style.display = "block";
        });
    });

    if (closeButton) {
        closeButton.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

/* @@@SupposedbyPrincePearsonFerencziADJOVI FOR DClicOIFBeginningLevelProject@@@ */
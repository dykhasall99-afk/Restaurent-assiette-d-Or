//=====les scripts pour la  validation de la page de réservation=====//
// On sélectionne le formulaire
const reservationForm = document.getElementById('reservationForm');

// On crée la fonction de validation
if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche le rechargement de la page 
            
        // On affiche le pop-up de validation
        Swal.fire({
            title: 'Succès !',
            text: 'Votre réservation à L\'assiette d\'Or a été enregistrée.',
            icon: 'success',
            confirmButtonColor: '#d4af7f', // La couleur dorée de votre thème
            confirmButtonText: 'Parfait'
        });

        // Optionnel : vider le formulaire après la validation
        this.reset();
    });
}
     


    //======alert succés formulaire pour la commande en popup
document.addEventListener('DOMContentLoaded', function() {
    const formCommande = document.getElementById('formCommandePopUp');

    if (formCommande) {
        formCommande.addEventListener('submit', function(e) {
            e.preventDefault();

            // Affichage avec SweetAlert comme pour tes autres sections
            Swal.fire({
                title: 'Succès !',
                text: 'Votre commande a été reçue.',
                icon: 'success',
                confirmButtonColor: '#d4af7f'
            });
            
            formCommande.reset();
        });
    }
});


 //====== alert succés pour le formulaire contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Affichage avec SweetAlert comme pour tes autres sections
            Swal.fire({
                title: 'Succès !',
                text: 'Votre commande a été reçue.',
                icon: 'success',
                confirmButtonColor: '#d4af7f'
            });
            
            contactForm.reset();
        });
    }
});
//=====les scripts pour la  validation de la page de réservation=====//
// On sélectionne le formulaire
const reservationForm = document.getElementById('reservationForm');

// On crée la fonction de validation
if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche le rechargement de la page

        // on récupere les valeurs des champs du formulaire
            const nom =
            this.querySelector('input[type="text"]').value;
            const email = 
            this.querySelector('input[type="email"]').value;
            const date =
            this.querySelector('input[type="date"]').value; 
            
            // la verification si les champs sont remplis
            if (!nom || !email || !date) {
                Swal.fire({
                    title: 'Erreur !',
                    text: 'Veuillez remplir tous les champs.',
                    icon: 'error',
                    confirmButtonColor: '#d4af7f',
                    confirmButtonText: 'Essayer à nouveau'
                });
                return;
            }


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
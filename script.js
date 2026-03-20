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
 
// On attend que le document soit prêt
document.addEventListener('DOMContentLoaded', function() {
    const formCommande = document.getElementById('formCommandePopUp');

    if (formCommande) {
        formCommande.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs
            const nom = document.getElementById('nomClientCmd').value;
            const email = document.getElementById('emailClientCmd').value;
            const plat = document.getElementById('platSelectCmd').value;

            // Validation : Vérifier si un plat a été choisi
            if (plat === "" || !nom || !email) {
                Swal.fire({
                    title: 'Oups !',
                    text: 'Veuillez remplir votre nom, email et choisir un plat dans la liste.',
                    icon: 'warning',
                    confirmButtonColor: '#b03a2e'
                });
                return; // On arrête l'exécution ici
            }

            // On ferme la modale proprement avant d'afficher le succès
            const modalElement = document.getElementById('modalUniqueCommande');
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance.hide();

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


const form = document.getElementById("formStagiaire");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const numInscription = form.numInscription.value.trim();
    const nom = form.nom.value.trim();
    const prenom = form.prenom.value.trim();
    const dateNaissance = form.dateNaissance.value;
    const groupe = form.groupe.value;
    const moyenne = form.moyenne.value;
    const adresse = form.adresse.value.trim();

    if (
        numInscription === "" ||
        nom === "" ||
        prenom === "" ||
        dateNaissance === "" ||
        groupe === "" ||
        moyenne === "" ||
        adresse === ""
    ) {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    if (Number(moyenne) < 0 || Number(moyenne) > 20) {
        alert("La moyenne doit être entre 0 et 20 !");
        return;
    }

    alert(
        "Stagiaire ajouté avec succès !\n\n" +
        "Numéro : " + numInscription + "\n" +
        "Nom : " + nom + "\n" +
        "Prénom : " + prenom + "\n" +
        "Date de naissance : " + dateNaissance + "\n" +
        "Groupe : " + groupe + "\n" +
        "Moyenne : " + moyenne + "\n" +
        "Adresse : " + adresse
    );

    form.reset();
});



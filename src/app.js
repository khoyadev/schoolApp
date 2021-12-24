
//Exemple de démarrage JavaScript pour désactiver les soumissions de formulaires s'il y a des champs non valides
(function () {
  'use strict'

  // Récupérer tous les formulaires auxquels nous voulons appliquer des styles de validation Bootstrap personnalisés

  var forms = document.querySelectorAll('.needs-validation')

  // Boucle sur eux et empêche la soumission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        //form.classList.add('was-validated')
      }, false)
    })
})()

let tableau = []
if (sessionStorage.getItem('apprenants') !== "undefined") {
  console.log();
  tableau = JSON.parse(sessionStorage.getItem('apprenants'))
}
console.log(tableau);

const inputNom = document.getElementById("validationCustom01")
const inputPrenom = document.getElementById("validationCustom02")
const inputNiveau = document.getElementById("validationCustom04")
const inputBiographie = document.getElementById("validationCustom03")
const btnAjouter = document.getElementById("btnAjouter")
const btnModifier = document.getElementById("btnModifier")

const divContainerListApp = document.getElementById("listeApp")

const creationApprenant = (nouvelleApprenant) => {
  const idNom = nouvelleApprenant.Nom
  const idPrenom = nouvelleApprenant.Prenom
  const idBio = nouvelleApprenant.Bio
  const idcardNiveau = nouvelleApprenant.Niveau
  //var idButtonModifier = [].push(tableau.indexOf(nouvelleApprenant));
  console.log(idButtonModifier);
  let idButtonSupprimer = tableau.indexOf(nouvelleApprenant);
  //On ajoute les cartes nouvelles
  divContainerListApp.insertAdjacentHTML(
    "beforeend",
    `
 <div class="card mb-3">
 <div class=" d-flex justify-content-end">
 <i class="bi bi-pencil-fill text-warning card-link btn editer" id="modifier-${idButtonModifier}" style="font-size:2rem">

 </i>
 <i class="bi bi-x-circle card-link btn supprimer" id="${idButtonSupprimer}"
     style="font-size:2rem;color:#ce0033;"></i>
</div>
  <div class="card-body">
    <h5 class="card-title" id="">${idPrenom} ${idNom} </h5>
     <p class="card-text" id="">${idBio}</p>
     <p class="card-text text-end" id=""><small class="text-muted">${idcardNiveau}</small></p>
   </div>
</div> 
    `
  );
  document
    .querySelector("i#modifier-" + idButtonModifier)
    .addEventListener("click", (event) => {

      inputNom.value = idNom
      inputPrenom.value = idPrenom
      inputBiographie.value = idBio
      inputNiveau.value = idcardNiveau
      btnAjouter.classList.add('d-none')
      btnModifier.classList.remove('d-none')
      
    })
    //console.log(idButtonModifier);
}

// const modifierApprenant = ()=>{
// for (let i = 0; i < tableau.length; i++) {
//   const element = tableau[i];
  
// }
// var idButtonModifier = tableau.indexOf(nouvelleApprenant);
// }
btnModifier.addEventListener("click",(event)=>{
  
  console.log("coucou");
  // for (let i = 0; i < idButtonModifier.length; i++) {
  //   const element = idButtonModifier[i];
  //   console.log(element);
  // }
  // for (let i = 0; i < tableau.length; i++) {
  //   //et pos = tableau[i].indexOf(nouvelleApprenant);
  //      const element = tableau[i]
  //      console.log(element);
      
  //  }
})
const textereaBiographie = document.getElementById("validationCustom03")
textereaBiographie.addEventListener("input", (event) => {
  const longueurMax = 130
  const contenuSaisi = textereaBiographie.value
  const longueurSaisi = contenuSaisi.length
  const reste = longueurMax - longueurSaisi

  //actualiser le dom pour afficher le nombre
  const paragraphCompteur = document.getElementById("limite-text")
  const compteurText = document.getElementById("text-progress")
  const restantText = document.getElementById("text-restant")

  compteurText.textContent = longueurSaisi
  restantText.textContent = " Il vous reste " + reste

  //changer couleur

  if (reste < 0) {
    textereaBiographie.setAttribute("maxlength", "130")
    paragraphCompteur.style.color = "#ce0033"
    paragraphCompteur.textContent = "Vous pouvez plus saisir"
    btnAjouter.disabled = false

  } else if (reste <= 50) {
    paragraphCompteur.style.color = "yellow"
    btnAjouter.disabled = false
  } else if (reste > 50) {
    paragraphCompteur.style.color = "#00000"
    btnAjouter.disabled = false
  }
})
const idform = document.getElementById("idformulaire")

idform.addEventListener("submit", (event) => {
  event.preventDefault()
  event.stopPropagation()
  //recuperer les valeur saisir sur le formulaire
  const nomSaisi = inputNom.value
  const prenomSaisi = inputPrenom.value
  const bioSaisi = inputBiographie.value
  const niveauSaisi = inputNiveau.value

  if (nomSaisi.trim().length < 5 || prenomSaisi.trim().length < 10) {
    alert("veillez saisir de bonne information")

    return
  } else {
    btnAjouter.click()
    // METTRE LES INFORMATION SUR FORME D'OBJET
    let nouvelleApprenant = {
      Nom: nomSaisi,
      Prenom: prenomSaisi,
      Bio: bioSaisi,
      Niveau: niveauSaisi
    }
    //console.log(nouvelleApprenant.NomPrenom);
    tableau.push(nouvelleApprenant)
    idform.reset()
    
    creationApprenant(nouvelleApprenant)
    sessionStorage.setItem('apprenants', JSON.stringify(tableau))


    //console.log(tableau);
  }

})

tableau.forEach(function (apprenant) {
  creationApprenant(apprenant)
})

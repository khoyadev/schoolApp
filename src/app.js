const API_URL = "https://iebidjtdmmvhdobnesda.supabase.co/rest/v1/schoolApp"
const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4NzU0NywiZXhwIjoxOTU1MTYzNTQ3fQ.yyW3TU7N--Z_fR0qDm-gWJ8LllGuNjFPlDz7oDi86CE"

 //LES COMPETENCES
 const inputc1f = document.getElementById("c1f")
 const inputc2f = document.getElementById("c2f")
 const inputc3f = document.getElementById("c3f")
 const inputc4f = document.getElementById("c4f")

 const inputc1b = document.getElementById("c1b")
 const inputc2b = document.getElementById("c2b")
 const inputc3b = document.getElementById("c3b")
 const inputc4b = document.getElementById("c4b")

  if(localStorage.getItem('apprenants')== null){
    var tableau = []
  }else if (localStorage.getItem('apprenants') !== "undefined") {
   
    tableau = JSON.parse(localStorage.getItem('apprenants'))
   
  }
  //console.log(tableau);
  
  const inputNom = document.getElementById("validationCustom01")
  const inputPrenom = document.getElementById("validationCustom02")
  const inputNiveau = document.getElementById("validationCustom04")
  const inputBiographie = document.getElementById("validationCustom03")
  const btnAjouter = document.getElementById("btnAjouter")
  const btnModifier = document.querySelector(".btnModifier")
  
  const divContainerListApp = document.getElementById("listeApp")
  
  const creationApprenant = (nouvelleApprenant) => {
    const idNom = nouvelleApprenant.Nom
    const idPrenom = nouvelleApprenant.Prenom
    const idBio = nouvelleApprenant.Bio
    const idcardNiveau = nouvelleApprenant.Niveau
    const idCard = tableau.indexOf(nouvelleApprenant)
    
    let idButtonModifier = tableau.indexOf(nouvelleApprenant);
 
    let idButtonSupprimer = tableau.indexOf(nouvelleApprenant);
    //On ajoute les cartes nouvelles
    divContainerListApp.insertAdjacentHTML(
      "beforeend",
      `
   <div class="card mb-3" id="numerocard-${idCard}">
   <div class=" d-flex justify-content-end">
   <i class="bi bi-pencil-fill text-warning card-link btn editer" id="${idButtonModifier}" onclick="modifier(this.id)" style="font-size:2rem">
  
   </i>
   <i class="bi bi-x-circle card-link btn supprimer" id="${idButtonSupprimer}" onclick="supprimer(this.id)"
       style="font-size:2rem;color:#ce0033;"></i>
  </div>
    <div class="card-body">
    <img src="images/undraw_profile_pic_ic5t.png" class="img img-fluid float-start w-25" alt="">
      <h5 class="card-title" id="bb">${idPrenom} ${idNom} </h5>
       <p class="card-text" id="">${idBio}</p>
       <p class="card-text text-end" id=""><small class="text-muted">${idcardNiveau}</small></p>
     </div>
  </div> 
      `
    );

  
  }
  function supprimer(index) {
    tableau.forEach(function (element) {
        if(tableau.indexOf(element) == index){
          console.log("coucou")

          tableau.splice(index,1)
          localStorage.setItem("apprenants", JSON.stringify(tableau));
          console.log(tableau);
          
              var idcard = document.getElementById("numerocard-"+index)
         
               divContainerListApp.removeChild(idcard)


        }

      })

}


const front = document.getElementById("front")
const back = document.getElementById("back")
  function modifier(index) {
    tableau.forEach(function (element) {
        const idcard = document.getElementById("numerocard-"+tableau.indexOf(element))
        idcard.style.display="block"
        if(tableau.indexOf(element) == index){
        inputNom.value = element.Nom
        inputPrenom.value = element.Prenom
        inputBiographie.value = element.Bio
        inputNiveau.value = element.Niveau
        btnAjouter.classList.add('d-none')
        front.classList.add('d-none')
        back.classList.add('d-none')
        btnModifier.classList.remove('d-none')
        const idcard = document.getElementById("numerocard-"+index)
        idcard.style.display="none"
        btnModifier.addEventListener("click", (event) => {
            event.preventDefault()
            event.stopPropagation()
            //recuperer les valeur saisir sur le formulaire
            element.Nom = inputNom.value
            element.Prenom = inputPrenom.value
            element.Bio = inputBiographie.value
            element.Niveau = inputNiveau.value
          
            if (element.Nom.trim().length < 1 || element.Prenom.trim().length < 1) {
              alert("veillez saisir de bonne information")
          
              return
            } else {

              tableau.splice(index, 1, element);
              idform.reset()
              
              creationApprenant(element)
              localStorage.setItem('apprenants', JSON.stringify(tableau))
        
              console.log(tableau);
            }
          console.log("coucou");
          })
        }
      })
  
}

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

    const c1f = inputc1f.value
    const c2f = inputc2f.value
    const c3f = inputc3f.value
    const c4f = inputc4f.value
    const c1b = inputc1b.value
    const c2b = inputc2b.value
    const c3b = inputc3b.value
    const c4b = inputc4b.value
  
    if (nomSaisi.trim().length < 1 || prenomSaisi.trim().length < 1) {
      alert("veillez saisir de bonne information")
  
      return
    } else {
      btnAjouter.click()
      // METTRE LES INFORMATION SUR FORME D'OBJET
      let nouvelleApprenant = {
        Nom: nomSaisi,
        Prenom: prenomSaisi,
        Bio: bioSaisi,
        Niveau: niveauSaisi,
        c1f:c1f,
        c2f:c2f,
        c3f:c3f,
        c4f:c4f,
        c1b:c1b,
        c2b:c2b,
        c3b:c3b,
        c4b:c4b
      }
      //console.log(nouvelleApprenant.NomPrenom);
      tableau.push(nouvelleApprenant)
      idform.reset()
      
      creationApprenant(nouvelleApprenant)
      localStorage.setItem('apprenants', JSON.stringify(tableau))
  
    }
  
  })
  
  tableau.forEach(function (apprenant) {
    creationApprenant(apprenant)
    //console.log(tableau.indexOf(apprenant))
  })


  //===================================API=======================================
  // RECUPERATION DES INFORMAIONS DU FORMULAIRE
const save = document.getElementById("save")
save.addEventListener("click", (event) => {
  console.log('coucou');
  event.preventDefault()
  event.stopPropagation()
  tableau.forEach(function (element) {
    const nouvelleIdee = {
      nom: element.Nom,
      prenom: element.Prenom,
      niveau: element.Niveau,
      biographie: element.Bio,
      c1f: element.c1f,
      c2f: element.c2f,
      c3f: element.c3f,
      c4f: element.c4f,
      c1b: element.c1b,
      c2b: element.c2b,
      c3b: element.c3b,
      c4b: element.c4b,
      
    }
  //ENVOYER LES DONNEES VERS SUPABASE
  fetch(API_URL, {
    method: "POST",
    headers: {
      apikey: API_KEY,
      "Content-Type": "application/json",
      Prefer: "return=representation"
    },
    body: JSON.stringify(nouvelleIdee),
  })
} )
localStorage.setItem("apprenants", JSON.stringify(tableau))
localStorage.removeItem("apprenants");
let cards = document.querySelectorAll(".card")
cards.forEach(function (element) {
  divContainerListApp.removeChild(element)
})
})
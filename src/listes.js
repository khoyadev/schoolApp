const API_URL = "https://iebidjtdmmvhdobnesda.supabase.co/rest/v1/schoolApp"
const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4NzU0NywiZXhwIjoxOTU1MTYzNTQ3fQ.yyW3TU7N--Z_fR0qDm-gWJ8LllGuNjFPlDz7oDi86CE"
window.addEventListener("DOMContentLoaded", (event) => {
    //RECUPERATION DES DONNEES VIA API
    fetch(API_URL, {
      method: "GET",
      headers: {
        apikey: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((schoolApp) => {
        schoolApp.forEach((liste) => {
            creationApprenant(liste)
        })
      })
  })
  const cartes = document.getElementById("cartes")
  const creationApprenant = (nouvelleApprenant) => {
    const idNom = nouvelleApprenant.nom
    const idPrenom = nouvelleApprenant.prenom
    const idBio = nouvelleApprenant.biographie
    const idcardNiveau = nouvelleApprenant.niveau
    const idCard = nouvelleApprenant.id
    
    let idButtonModifier = nouvelleApprenant.id
 
    let idButtonSupprimer = nouvelleApprenant.id
    //On ajoute les cartes nouvelles
    cartes.insertAdjacentHTML(
      "beforeend",
      `
   <div class="card mb-3 w-75 " id="numerocard-${idCard}">
   <div class=" d-flex justify-content-end">
   <i class="bi bi-pencil-fill text-warning card-link btn editer" id="${idButtonModifier}" onclick="modifier(this.id)" style="font-size:2rem">
  
   </i>
   <i class="bi bi-x-circle card-link btn supprimer" id="${idButtonSupprimer}" onclick="supprimer(this.id)"
       style="font-size:2rem;color:#ce0033;"></i>
  </div>
    <div class="card-body">
    <div class="col-6">
    <img src="images/undraw_profile_pic_ic5t.png" class="img img-fluid float-start w-25" alt="">
    </div>
      <h5 class="card-title" id="bb">${idPrenom} ${idNom} </h5>
       <p class="card-text" id="">${idBio}</p>
       <p class="card-text text-end" id=""><small class="text-muted">${idcardNiveau}</small></p>
     </div>
     <button type="button" class="btn btn-success" id="details-${nouvelleApprenant.id}">Details</button>
  </div> 
      `
    );

    let detail = document.getElementById("details-"+nouvelleApprenant.id)
    detail.addEventListener('click', function(){
      localStorage.setItem('MonId', nouvelleApprenant.id)
      window.location.href = "details.html"
    })
  }
  

  function supprimer(index) {

    fetch(API_URL+"?id=eq."+index, {
      method: "DELETE",
      headers: {
        apikey: API_KEY,
        "Content-Type": "application/json",
      Prefer: "return=representation"
      }
    }).then((response) => response.json())
    .then((data)=>{
      
      console.log("coucou");
      console.log(data);
      var idcard = document.getElementById("numerocard-"+index)
         
      cartes.removeChild(idcard)
    })

  
}
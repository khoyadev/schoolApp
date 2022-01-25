const API_URL = "https://iebidjtdmmvhdobnesda.supabase.co/rest/v1/schoolApp"
const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4NzU0NywiZXhwIjoxOTU1MTYzNTQ3fQ.yyW3TU7N--Z_fR0qDm-gWJ8LllGuNjFPlDz7oDi86CE"
const detail = document.getElementById("detail")
window.addEventListener("DOMContentLoaded", (event) => {
    //RECUPERATION DES DONNEES VIA API
    fetch(API_URL, {
      headers: {
        apikey: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((liste) => {
        liste.forEach((App) => {
            let getId = localStorage.getItem("MonId");
            if(App.id == getId){
                afficherDetail(App)
            }
                    
        })
    })
})


function afficherDetail(apprenantdetails){
    detail.insertAdjacentHTML(
        "beforeend",
        `
        <div class="row">
                    <a href="listes.html">Retour</a>
        </div>
        <div class="col-5 mt-4" style = "height: 19rem; " >
            <div class="row">
                <div class="col-10">
                    <img src="" alt="" id="img">
                </div>

            </div>
        
        </div>
        <div class="col-7 mt-4">
            <div class="row">
            <div class="col-6">
            <img src="images/undraw_profile_pic_ic5t.png" class="img img-fluid float-start w-25" alt="">
            </div>
                <h1 id="prenom">${apprenantdetails.prenom +" "+ apprenantdetails.nom}</h1>
            </div>
            <div class="row">
                <p id="niveau">Niveau : ${apprenantdetails.niveau}</p>
            </div>
            <div class="row">
                <p>Biographie: ${apprenantdetails.biographie}</p>
            </div>
        </div>
        <div class="row align-items-center justify-content-center" style="text-align:center; width: 100%;">
        <h1 style="text-decoration: underline;">Compétences</h1> 
        <h6>Front-End</h6>
        <div class="row">
            <div class="col-4">
                <p>Maquetter une application</p>
            </div>
                <div class="col-8 progress">
                <div class="progress-bar bg-success" role="progressbar" style="width: ${apprenantdetails.c1f}%" aria-valuenow="${apprenantdetails.c1f}" aria-valuemin="0" aria-valuemax="100">${apprenantdetails.c1f}%</div>
              </div>
        </div>

        <div class="row">
            <div class="col-4">
                <p>Réaliser une interface utilisateur web statique et adaptable</p>
            </div>
                <div class="col-8 progress">
                <div class="progress-bar bg-info" role="progressbar" style="width: ${apprenantdetails.c2f}%" aria-valuenow="${apprenantdetails.c2f}" aria-valuemin="0" aria-valuemax="100">${apprenantdetails.c2f}%</div>
              </div>
        </div>
        
        <div class="row">
            <div class="col-4">
                <p>Développer une interface utilisateur web dynamique</p>
            </div>
                <div class="col-8 progress">
                <div class="progress-bar bg-warning" role="progressbar" style="width: ${apprenantdetails.c3f}%" aria-valuenow="${apprenantdetails.c3f}" aria-valuemin="0" aria-valuemax="100">${apprenantdetails.c3f}%</div>
              </div>
        </div>

        <div class="row">
            <div class="col-4">
                <p>Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce</p>
            </div>
                <div class="col-8 progress">
            <div class="progress-bar bg-danger" role="progressbar" style="width: ${apprenantdetails.c4f}%" aria-valuenow="${apprenantdetails.c4f}" aria-valuemin="0" aria-valuemax="100">${apprenantdetails.c1f}%</div>
            </div> 
        </div> 
        <h6>Back-End</h6>
        <div class="row">
            <div class="col-4">
                <p>Créer une base de donnée</p>
            </div>
                <div class="col-8 progress">
                <div class="progress-bar bg-success" role="progressbar" style="width: ${apprenantdetails.c1b}%" aria-valuenow="${apprenantdetails.c1b}" aria-valuemin="0" aria-valuemax="100">${apprenantdetails.c1b}%</div>
              </div>
        </div>

        <div class="row">
            <div class="col-4">
                <p>Développer les composants d’accès aux données</p>
            </div>
                <div class="col-8 progress">
                <div class="progress-bar bg-info" role="progressbar" style="width: ${apprenantdetails.c2b}%" aria-valuenow="${apprenantdetails.c2b}" aria-valuemin="0" aria-valuemax="100">${apprenantdetails.c2b}%</div>
              </div>
        </div>
        
        <div class="row">
            <div class="col-4">
                <p>Développer la partie back-end d’une application web ou web mobile</p>
            </div>
            <div class="col-8 progress">
                <div class="progress-bar bg-warning" role="progressbar" style="width: ${apprenantdetails.c3b}%" aria-valuenow="${apprenantdetails.c3b}" aria-valuemin="0" aria-valuemax="100">${apprenantdetails.c3b}%</div>
            </div>
        </div>

        <div class="row">
            <div class="col-4">
                <p>Elaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce</p>
            </div>
                <div class="col-8 progress">
            <div class="progress-bar bg-danger" role="progressbar" style="width: ${apprenantdetails.c4b}%" aria-valuenow="${apprenantdetails.c4b}" aria-valuemin="0" aria-valuemax="100">${apprenantdetails.c4b}%</div>
            </div> 
        </div> 
    </div>
        
      `
    )
}
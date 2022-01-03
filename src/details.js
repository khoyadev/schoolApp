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
      `
    )
}
// const session = JSON.parse(localStorage.getItem("session"));
// const nom = document.querySelector(".nom");

// if (!session) {
//     alert("veuillez vous connecté");
//     window.location.href = "./connexion.html";
// }else{
//     nom.textContent = `Bonjour et Bienvenue ${session.nom.toUpperCase()} ${session.prenom}`;
// }




document.addEventListener('DOMContentLoaded',()=>{
    let getLocalSt = localStorage.getItem("session");
    let passName = location.href;
    console.log(getLocalSt,passName);
    if (getLocalSt && (passName.endsWith("connexion.html") || passName.endsWith("inscription.html"))) {
        location.href = "./dashboard.html";
    }
    else if(!getLocalSt && passName.endsWith("dashboard.html")){
        location.href = "./connexion.html";
    }
});
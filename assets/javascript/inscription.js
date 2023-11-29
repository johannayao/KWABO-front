// let formulaire = document.getElementsByTagName("form")[0];
// // // console.log(formulaire)
//  formulaire.addEventListener("submit", async (e) => {
//     e.preventDefault();
    
//    let input = document.querySelectorAll("input");
//    console.log(input);
//    let monObjet = {};
// //    console.log(monObjet);
//    input.forEach((element, indice) => {
//      console.log(element.name, element.value);
//      monObjet[element.name] = element.value

//    });

//    let message = document.querySelector(".alerte")
//    if (monObjet.password !== monObjet.passwordC) {
//      return alert("les mot de pass ne sont pas conforme")
//    }
//    console.log(monObjet);

//     fetch("http://localhost:4050/api/user/inscription", {
//      method: "POST",
//      body: JSON.stringify(monObjet),
//      headers: {"content-type": "application/json"}
//    })
//    .then(res=> res.json())
//     .then(succes =>{
//       console.log(succes);
//          if(succes.newUser){
//              alert("inscription reuisiit a reuissir")
//              setTimeout(() =>{
//                window.location.href = "./connexion.html";
//              },[2000])
//          }else{
//              alert("echoué")
//          }
//     })
  
//  });












let formulaire = document.getElementsByTagName('form')[0];
const urlApi = 'http://localhost:4050/api/';
formulaire.addEventListener('submit', e => {
    e.preventDefault();
    /**On récupère les inputs du formulaire */
   
    let input = e.target.querySelectorAll('input')
    /* On vérifie si tout les input sont remplit*/
    let option = [...input].every(item => item.value.replaceAll(' ', ''));
    /* Si tout n'est pas remplit on affiche un alerte*/
    if(!option) return alert('Tout les champs sont obligatoires');
    /* On vérifie si le mot de passe et le mot de passe de confirmation sont conforment*/
    option = e.target.password.value === e.target.cpassword.value;
    /* S'ils ne sont pas conforment on affiche un alert*/
    if(!option) return alert('Les mots de passes ne sont pas conformes.');
    /** On construit une réprésentation du formulaire en une paire clé/value qui reprensente le name des inputs et leur valeur*/
    let formaData = new FormData(e.target);
    fetch(urlApi+'user/inscription', {method: 'POST', body: new URLSearchParams(formaData)})
    .then(res => res.json())
    .then(success => {
        if(success.data){
            alert(success.message);
            setTimeout(() => window.location.href = './connexion.html', 2000);
        }else{
            alert(success.message)
        }
    })

})



const formulaire = document.getElementsByTagName("form")[0];
 console.log(formulaire);
formulaire.addEventListener("submit", (e)=>{
    let erreur = document.querySelector(".erreur")
    e.preventDefault()
    const allInput = e.target.querySelectorAll("input");
    const  formData = new FormData();
    allInput.forEach(input=>formData.append(input.name, input.value));
    fetch("http://localhost:4050/api/user/connexion",{
        method: "POST",
        body: new URLSearchParams(formData)
    })
    .then(res=> res.json())

    .then(succes =>{
        console.log(succes);
        if(succes.token){
            const data = {
                token: succes.token,
                expire: new Date().getMilliseconds()+4*3600*1000
            }
            localStorage.setItem("session", JSON.stringify(data));
            window.location.href="./index.html"
        }else{
            return (erreur.textContent="connexion echoué")
        }
    })

})
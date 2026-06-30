document.getElementById("formulaire").addEventListener("submit", function(e){

    e.preventDefault();
    
    // numéro automatique
    let numero = "LTF-" + Date.now();
    
    let apprenant = {
    numero: numero,
    nom: document.getElementById("nom").value,
    sexe: document.getElementById("sexe").value,
    naissance: document.getElementById("naissance").value,
    lieu: document.getElementById("lieu").value,
    telephone: document.getElementById("telephone").value,
    adresse: document.getElementById("adresse").value,
    niveau: document.getElementById("niveau").value,
    filiere: document.getElementById("filiere").value,
    dateInscription: new Date().toLocaleDateString()
    };
    
    let liste = JSON.parse(localStorage.getItem("apprenants")) || [];
    
    liste.push(apprenant);
    
    localStorage.setItem("apprenants", JSON.stringify(liste));
    
    document.getElementById("message").innerHTML =
    "Inscription réussie ✔ Numéro : " + numero;
    
    this.reset();
    
    });


    let urlSheet = "https://script.google.com/macros/s/AKfycbw0q3RV6YAtmvOsym4QYEnGL5bMaZNpb1VtIWoOkvafdemg3JVw58Xa6_uqWwzTbi4/exechttps://script.google.com/macros/s/AKfycbw0q3RV6YAtmvOsym4QYEnGL5bMaZNpb1VtIWoOkvafdemg3JVw58Xa6_uqWwzTbi4/execCOLLER_ICI_URL_GOOGLE_SCRIPT";



    fetch(urlSheet,{

        method:"POST",
        
        body:JSON.stringify(apprenant)
        
        })
        .then(response=>{
        
        console.log("Envoyé dans Google Sheet");
        
        });fetch(urlSheet,{

method:"POST",

body:JSON.stringify(apprenant)

})
.then(response=>{

console.log("Envoyé dans Google Sheet");

});
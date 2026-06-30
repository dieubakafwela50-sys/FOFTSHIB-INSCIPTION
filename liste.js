let apprenants = JSON.parse(localStorage.getItem("apprenants")) || [];

let tableau = document.getElementById("tableau");
let total = document.getElementById("total");

function afficher(data = apprenants){

tableau.innerHTML = "";

total.innerText = data.length;

data.forEach((a, index) => {

tableau.innerHTML += `
<tr>
<td>${a.numero}</td>
<td>${a.nom}</td>
<td>${a.sexe}</td>
<td>${a.telephone}</td>
<td>${a.filiere}</td>

<td>
<button onclick="supprimer(${index})">Supprimer</button>
</td>
</tr>
`;

});

}

function supprimer(index){

apprenants.splice(index,1);

localStorage.setItem("apprenants", JSON.stringify(apprenants));

afficher();

}

document.getElementById("recherche").addEventListener("keyup", function(){

let valeur = this.value.toLowerCase();

let filtre = apprenants.filter(a =>
a.nom.toLowerCase().includes(valeur) ||
a.filiere.toLowerCase().includes(valeur) ||
a.numero.toLowerCase().includes(valeur)
);

afficher(filtre);

});

afficher();
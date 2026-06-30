let apprenants =
JSON.parse(localStorage.getItem("apprenants"))
|| [];



let tableau =
document.getElementById("liste");



let total =
document.getElementById("total");




function afficher(){


tableau.innerHTML="";


total.innerHTML =
apprenants.length;



apprenants.forEach((a,index)=>{


tableau.innerHTML += `


<tr>


<td>${a.nom}</td>

<td>${a.sexe}</td>

<td>${a.telephone}</td>

<td>${a.filiere}</td>


<td>

<button onclick="supprimer(${index})">

Supprimer

</button>


</td>


</tr>


`;


});


}



function supprimer(index){


apprenants.splice(index,1);


localStorage.setItem(

"apprenants",

JSON.stringify(apprenants)

);


afficher();


}




document
.getElementById("recherche")
.addEventListener("keyup",function(){


let valeur =
this.value.toLowerCase();



document
.querySelectorAll("#liste tr")
.forEach(ligne=>{


ligne.style.display =
ligne.innerText
.toLowerCase()
.includes(valeur)
?
""
:
"none";


});


});



afficher();let apprenants =
JSON.parse(localStorage.getItem("apprenants"))
|| [];



let tableau =
document.getElementById("liste");



let total =
document.getElementById("total");




function afficher(){


tableau.innerHTML="";


total.innerHTML =
apprenants.length;



apprenants.forEach((a,index)=>{


tableau.innerHTML += `


<tr>


<td>${a.nom}</td>

<td>${a.sexe}</td>

<td>${a.telephone}</td>

<td>${a.filiere}</td>


<td>

<button onclick="supprimer(${index})">

Supprimer

</button>


</td>


</tr>


`;


});


}



function supprimer(index){


apprenants.splice(index,1);


localStorage.setItem(

"apprenants",

JSON.stringify(apprenants)

);


afficher();


}




document
.getElementById("recherche")
.addEventListener("keyup",function(){


let valeur =
this.value.toLowerCase();



document
.querySelectorAll("#liste tr")
.forEach(ligne=>{


ligne.style.display =
ligne.innerText
.toLowerCase()
.includes(valeur)
?
""
:
"none";


});


});



afficher();
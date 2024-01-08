let reponseSelecteur_1 = document.getElementById("selecteur_1")
let reponseSelecteur_2 = document.getElementById("selecteur_2")
let valeurInput_1 = document.getElementById("valeurInput_1")
let valeurInput_2 = document.getElementById("valeurInput_2")

const buttonAddNewUnite = document.getElementById("buttonAddNewUnite")
let addTitle = document.getElementById("addTitle")
let addValeurMetre = document.getElementById("addValeurMetre")

const removeSelecteur = document.getElementById("removeSelecteur")
const buttonRemoveUniteSelecteur = document.getElementById("buttonRemoveUniteSelecteur")

const $scrollMenu = document.querySelector('.scroll');
const $menu = document.querySelector('.menu');
const $item = document.querySelector('.item');
const $item1 = document.querySelector('.item1');
const $convertisseur = document.querySelector('#Convertisseur');
const $modification = document.querySelector('#Modification');
const $convertisseurPage = document.querySelector('.convertisseur');
const $modificationPage = document.querySelector('.modification ');
const $header = document.querySelector('.header');
const $homeIcon = document.querySelector('.homeIcon');
const $result = document.querySelector('.result');

valeurInput_1.addEventListener("input", (event) => {
    valeurInput_2.value = (valeurInput_1.value * reponseSelecteur_1.value) / reponseSelecteur_2.value;
    $result.textContent = `${valeurInput_1.value == 0 ? "0" : valeurInput_1.value} ${reponseSelecteur_1.options[reponseSelecteur_1.selectedIndex].text}${valeurInput_1.value > 1 ? "s" : ""} equals to ${Math.round(valeurInput_2.value * 100) / 100} ${reponseSelecteur_2.options[reponseSelecteur_2.selectedIndex].text}${valeurInput_2.value > 1 ? "s" : ""}.`;
})

valeurInput_2.addEventListener("input", (event) => {
    valeurInput_1.value = (valeurInput_2.value * reponseSelecteur_2.value) / reponseSelecteur_1.value;
    $result.textContent = `${valeurInput_2.value == 0 ? "0" : valeurInput_2.value} ${reponseSelecteur_2.options[reponseSelecteur_2.selectedIndex].text}${valeurInput_2.value > 1 ? "s" : ""} equals to ${Math.round(valeurInput_1.value * 100) / 100} ${reponseSelecteur_1.options[reponseSelecteur_1.selectedIndex].text}${valeurInput_1.value > 1 ? "s" : ""}.`;
})

reponseSelecteur_1.addEventListener("change", (event) => {
    valeurInput_1.value = (valeurInput_2.value * reponseSelecteur_2.value) / reponseSelecteur_1.value;
    $result.textContent = `${valeurInput_2.value == 0 ? "0" : valeurInput_2.value} ${reponseSelecteur_2.options[reponseSelecteur_2.selectedIndex].text}${valeurInput_2.value > 1 ? "s" : ""} equals to ${Math.round(valeurInput_1.value * 100) / 100} ${reponseSelecteur_1.options[reponseSelecteur_1.selectedIndex].text}${valeurInput_1.value > 1 ? "s" : ""}.`;
});

reponseSelecteur_2.addEventListener("change", (event) => {
    valeurInput_2.value = (valeurInput_1.value * reponseSelecteur_1.value) / reponseSelecteur_2.value;
    $result.textContent = `${valeurInput_1.value == 0 ? "0" : valeurInput_1.value} ${reponseSelecteur_1.options[reponseSelecteur_1.selectedIndex].text}${valeurInput_1.value > 1 ? "s" : ""} equals to ${Math.round(valeurInput_2.value * 100) / 100} ${reponseSelecteur_2.options[reponseSelecteur_2.selectedIndex].text}${valeurInput_2.value > 1 ? "s" : ""}.`;
});

//add une new valeur dans le selecteur:
buttonAddNewUnite.addEventListener("click", (event) => {

    var newOptionSelecteur1 = new Option(addTitle.value, addValeurMetre.value)
    var newOptionSelecteur2 = new Option(addTitle.value, addValeurMetre.value)
    var newOptionSelecteur3 = new Option(addTitle.value, addValeurMetre.value)


    reponseSelecteur_1.add(newOptionSelecteur1, null)
    reponseSelecteur_2.add(newOptionSelecteur2, null)
    removeSelecteur.add(newOptionSelecteur3, null)


    //test:
    var score = localStorage.getItem('score');
    console.log("okokk c'est mtn !!!" + score)
})


// fonction pour supprimer une valeur dans le selecteur:
buttonRemoveUniteSelecteur.addEventListener("click", (event) => {
    let indexSupprime = removeSelecteur.selectedIndex

    removeSelecteur.remove(indexSupprime)
    reponseSelecteur_1.remove(indexSupprime)
    reponseSelecteur_2.remove(indexSupprime)

    //test
    localStorage.setItem('score', "margot!!!");
    localStorage.setItem('score', "louis!!!");
})

$convertisseur.addEventListener('click', (event) => {
    $modificationPage.classList.add('hidden');
    $convertisseurPage.classList.remove('hidden');
});

$modification.addEventListener('click', (event) => {
    $convertisseurPage.classList.add('hidden');
    $modificationPage.classList.remove('hidden');
});
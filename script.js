const exchanger = document.getElementById("exchanger")

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

valeurInput_1.addEventListener("input", (event) => {
    valeurInput_2.value = (valeurInput_1.value * reponseSelecteur_1.value) / reponseSelecteur_2.value

})


exchanger.addEventListener("click", (event) => {
    let temp = reponseSelecteur_1.value
    reponseSelecteur_1.value = reponseSelecteur_2.value
    reponseSelecteur_2.value = temp
    temp = valeurInput_1.value
    valeurInput_1.value = valeurInput_2.value;
    valeurInput_2.value = temp;
});

exchanger.addEventListener("mouseover", (event) => {
    let marginTop = window.getComputedStyle(exchanger).getPropertyValue("margin-top")
    if (marginTop == "27px") {
        exchanger.style.marginTop = "500px";
        exchanger.style.transition = "all 0.5s ease-in-out";
    } else if (marginTop == "500px") {
        exchanger.style.marginTop = "27px";
        exchanger.style.transition = "all 0.5s ease-in-out";
    }
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

$scrollMenu.addEventListener('click', (event) => {
    if ($menu.style.width == '9%') {
        $menu.style.width = '2%';
    }
    else {
        $menu.style.width = '9%';
    }
});

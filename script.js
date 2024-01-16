let reponseSelecteur_1 = document.getElementById("selecteur_1")
let reponseSelecteur_2 = document.getElementById("selecteur_2")
let valeurInput_1 = document.getElementById("valeurInput_1")
let valeurInput_2 = document.getElementById("valeurInput_2")

const $buttonAddNewUnit = document.getElementById("buttonAddNewUnit");
let addTitle = document.getElementById("addTitle")
let addValeurMetre = document.getElementById("addValeurMetre")

const removeSelecteur = document.getElementById("removeSelecteur")
const $buttonRemoveUnit = document.getElementById("buttonRemoveUnit")

const $body = document.querySelector('body');
const $colorMode = document.querySelector('.colorMode');
const $homeIcon = document.querySelector('.homeIcon');
const $convertisseur = document.querySelector('#Convertisseur');
const $modification = document.querySelector('#Modification');
const $convertisseurPage = document.querySelector('.convertisseur');
const $modificationPage = document.querySelector('.modification');
const $menu = document.querySelector('.menu');
const $result = document.querySelector('.result');
const $selectors = document.querySelectorAll('.selector');
const $inputs = document.querySelectorAll('.value');
const $options = document.querySelectorAll('option');
const $headerItems = document.querySelectorAll('.headerItem');
const $swap = document.querySelector('.swap');
const $footerText = document.querySelector('.footerText');

let $listOptions = [];
if (document.cookie === "") {
    const $basicOptions = document.querySelectorAll('#selecteur_1 option');
    $basicOptions.forEach(option => {
        document.cookie = `${option.text}=${option.value}`
        $listOptions.push("<option value=" + option.value + ">" + option.text + "</option>");
    });
} else {
    const cookieDecode = decodeURIComponent(document.cookie);
    const cookieArray = cookieDecode.split('; ');
    cookieArray.forEach(val => {
        const name = val.split('=')[0];
        const value = val.split('=')[1];
        $listOptions.push("<option value=" + value + ">" + name + "</option>");
    })
}

reponseSelecteur_1.innerHTML = $listOptions;
reponseSelecteur_2.innerHTML = $listOptions;
removeSelecteur.innerHTML = $listOptions;

$colorMode.addEventListener('click', (event) => {
    const colorMode = getComputedStyle($colorMode).getPropertyValue('background-image');
    if (colorMode == "url(\"nightmode.png\")" || colorMode == "url(\"http://127.0.0.1:5500/nightmode.png\")") {
        $colorMode.classList.add('day');
        $colorMode.classList.remove('night');
        $body.classList.add('day');
        $body.classList.remove('night');
        $homeIcon.style.backgroundImage = "url('homeiconday.jpg')";
        $convertisseurPage.classList.add('dayText');
        $convertisseurPage.classList.remove('nightText');
        $menu.classList.add('dayText');
        $menu.classList.remove('nightText');
        $swap.style.backgroundImage = "url('swapday.png')";
        $modificationPage.classList.add('dayText');
        $modificationPage.classList.remove('nightText');
        $buttonAddNewUnit.classList.add('day');
        $buttonAddNewUnit.classList.remove('night');
        $buttonRemoveUnit.classList.add('day');
        $buttonRemoveUnit.classList.remove('night');
        $footerText.classList.add('day');
        $footerText.classList.remove('night');
        $selectors.forEach(selector => {
            selector.classList.add('day');
            selector.classList.remove('night');
        });
        $inputs.forEach(input => {
            input.classList.add('day');
            input.classList.remove('night');
        });
        $options.forEach(option => {
            option.classList.add('day');
            option.classList.remove('night');
        });
    } else {
        $colorMode.classList.add('night');
        $colorMode.classList.remove('day');
        $body.classList.add('night');
        $body.classList.remove('day');
        $homeIcon.style.backgroundImage = "url('homeiconnight.png')";
        $convertisseurPage.classList.add('nightText');
        $convertisseurPage.classList.remove('dayText');
        $menu.classList.add('nightText');
        $menu.classList.remove('dayText');
        $swap.style.backgroundImage = "url('swapnight.png')";
        $modificationPage.classList.add('nightText');
        $modificationPage.classList.remove('dayText');
        $buttonAddNewUnit.classList.add('night');
        $buttonAddNewUnit.classList.remove('day');
        $buttonRemoveUnit.classList.add('night');
        $buttonRemoveUnit.classList.remove('day');
        $footerText.classList.add('night');
        $footerText.classList.remove('day');
        $selectors.forEach(selector => {
            selector.classList.add('night');
            selector.classList.remove('day');
        });
        $inputs.forEach(input => {
            input.classList.add('night');
            input.classList.remove('day');
        });
        $options.forEach(option => {
            option.classList.add('night');
            option.classList.remove('day');
        });
    }
});

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

$swap.addEventListener('click', (event) => {
    let temp = reponseSelecteur_1.selectedIndex;
    reponseSelecteur_1.selectedIndex = reponseSelecteur_2.selectedIndex;
    reponseSelecteur_2.selectedIndex = temp;
    temp = valeurInput_1.value;
    valeurInput_1.value = valeurInput_2.value;
    valeurInput_2.value = temp;
    $result.textContent = `${valeurInput_1.value == 0 ? "0" : Math.round(valeurInput_1.value * 100) / 100} ${reponseSelecteur_1.options[reponseSelecteur_1.selectedIndex].text}${valeurInput_1.value > 1 ? "s" : ""} equals to ${Math.round(valeurInput_2.value * 100) / 100} ${reponseSelecteur_2.options[reponseSelecteur_2.selectedIndex].text}${valeurInput_2.value > 1 ? "s" : ""}.`;
});

//add une new valeur dans le selecteur:
$buttonAddNewUnit.addEventListener("click", (event) => {

    if (addTitle.value !== "" && addValeurMetre.value !== "") {

        var newOptionSelecteur1 = new Option(addTitle.value, addValeurMetre.value)
        var newOptionSelecteur2 = new Option(addTitle.value, addValeurMetre.value)
        var newOptionSelecteur3 = new Option(addTitle.value, addValeurMetre.value)


        reponseSelecteur_1.add(newOptionSelecteur1, null)
        reponseSelecteur_2.add(newOptionSelecteur2, null)
        removeSelecteur.add(newOptionSelecteur3, null)

        document.cookie = `${addTitle.value}=${addValeurMetre.value}`

        addTitle.value = "";
        addValeurMetre.value = "";
    }
})

// fonction pour supprimer une valeur dans le selecteur:
$buttonRemoveUnit.addEventListener("click", (event) => {
    let indexSupprime = removeSelecteur.selectedIndex

    document.cookie = removeSelecteur[indexSupprime].textContent + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    removeSelecteur.remove(indexSupprime)
    reponseSelecteur_1.remove(indexSupprime)
    reponseSelecteur_2.remove(indexSupprime)

})

$convertisseur.addEventListener('click', (event) => {
    $modificationPage.style.display = "none";
    $convertisseurPage.classList.remove('hidden');
});

$modification.addEventListener('click', (event) => {
    $convertisseurPage.classList.add('hidden');
    $modificationPage.style.display = "flex";
});
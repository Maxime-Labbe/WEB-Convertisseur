let $reponseSelecteur_1 = document.querySelector("#selecteur_1");
let $reponseSelecteur_2 = document.querySelector("#selecteur_2");
let $valeurInput_1 = document.querySelector("#valeurInput_1");
let $valeurInput_2 = document.querySelector("#valeurInput_2");

const $buttonAddNewUnit = document.querySelector("#buttonAddNewUnit");
let $addTitle = document.querySelector("#addTitle")
let $addValeurMetre = document.querySelector("#addValeurMetre")

const $removeSelecteur = document.querySelector("#removeSelecteur")
const $buttonRemoveUnit = document.querySelector("#buttonRemoveUnit")

const $body = document.querySelector('body');
const $colorMode = document.querySelector('.colorMode');
const $homeIcon = document.querySelector('.homeIcon');
const $convertisseur = document.querySelector('#Convertisseur');
const $modification = document.querySelector('#Modification');
const $convertisseurPage = document.querySelector('.convertisseur');
const $modificationPage = document.querySelector('.modification');
const $menu = document.querySelector('.menu');
const $title = document.querySelector('.title');
const $result = document.querySelector('p.result');
const $divImageResult = document.querySelector('div.result');
const $imageResult = document.querySelectorAll('.imageResult');
const $selectors = document.querySelectorAll('.selector');
const $inputs = document.querySelectorAll('.value');
const $options = document.querySelectorAll('option');
const $headerItems = document.querySelectorAll('.headerItem');
const $swap = document.querySelector('.swap');
const $footer = document.querySelector('.footer');
const $footerText = document.querySelector('.footerText');
const $historique = document.querySelector('div.historique');
const $historiqueList = document.querySelector('ul.historique');

let version;

$divImageResult.style.display = "none";
if (parseInt(getComputedStyle($body).getPropertyValue('width').split("p")[0]) + 16 <= 600) {
    version = "mobile";
} else {
    version = "desktop";
}

let $listUnits = [];

let $listMoney = ['<option value="" disabled selected>Please select a currency</option>',
    '<option value="4.01">United Arab Emirates Dirham (AED)</option>',
    '<option value="78.55">Afghan Afghani (AFN)</option>',
    '<option value="103.84">Albanian Lek (ALL)</option>',
    '<option value="440.36">Armenian Dram (AMD)</option>',
    '<option value="1.96">Netherlands Antillean Guilder (ANG)</option>',
    '<option value="891.88">Argentine Peso (ARS)</option>',
    '<option value="1.65">Australian Dollar (AUD)</option>',
    '<option value="1.96">Aruban Florin (AWG)</option>',
    '<option value="1.86">Azerbaijani Manat (AZN)</option>',
    '<option value="1.96">Bosnia-Herzegovina Convertible Mark (BAM)</option>',
    '<option value="119.48">Bangladeshi Taka (BDT)</option>',
    '<option value="1.96">Bulgarian Lev (BGN)</option>',
    '<option value="0.41">Bahraini Dinar (BHD)</option>',
    '<option value="1.46">Brunei Dollar (BND)</option>',
    '<option value="7.52">Bolivian Boliviano (BOB)</option>',
    '<option value="5.38">Brazilian Real (BRL)</option>',
    '<option value="90.73">Bhutanese Ngultrum (BTN)</option>',
    '<option value="14.88">Botswanan Pula (BWP)</option>',
    '<option value="3.56">Belarusian Ruble (BYN)</option>',
    '<option value="2.19">Belize Dollar (BZD)</option>',
    '<option value="1.46">Canadian Dollar (CAD)</option>',
    '<option value="0.95">Swiss Franc (CHF)</option>',
    '<option value="991.16">Chilean Peso (CLP)</option>',
    '<option value="7.77">Chinese Yuan (CNY)</option>',
    '<option value="4266.21">Colombian Peso (COP)</option>',
    '<option value="560.35">Costa Rican Colón (CRC)</option>',
    '<option value="110.25">Cape Verdean Escudo (CVE)</option>',
    '<option value="24.83">Czech Koruna (CZK)</option>',
    '<option value="193.83">Djiboutian Franc (DJF)</option>',
    '<option value="7.46">Danish Krone (DKK)</option>',
    '<option value="63.97">Dominican Peso (DOP)</option>',
    '<option value="146.62">Algerian Dinar (DZD)</option>',
    '<option value="33.64">Egyptian Pound (EGP)</option>',
    '<option value="1">Euro (EUR)</option>',
    '<option value="6.56">French franc (FRF)</option>',
    '<option value="0.86">British Pound Sterling (GBP)</option>',
    '<option value="2.9">Georgian Lari (GEL)</option>',
    '<option value="13.17">Ghanaian Cedi (GHS)</option>',
    '<option value="73.4">Gambian Dalasi (GMD)</option>',
    '<option value="9356.14">Guinean Franc (GNF)</option>',
    '<option value="8.51">Guatemalan Quetzal (GTQ)</option>',
    '<option value="227.94">Guyanaese Dollar (GYD)</option>',
    '<option value="8.53">Hong Kong Dollar (HKD)</option>',
    '<option value="26.84">Honduran Lempira (HNL)</option>',
    '<option value="143.45">Haitian Gourde (HTG)</option>',
    '<option value="382.34">Hungarian Forint (HUF)</option>',
    '<option value="17048.07">Indonesian Rupiah (IDR)</option>',
    '<option value="4.07">Israeli New Shekel (ILS)</option>',
    '<option value="90.73">Indian Rupee (INR)</option>',
    '<option value="1426.17">Iraqi Dinar (IQD)</option>',
    '<option value="45881.83">Iranian Rial (IRR)</option>',
    '<option value="149.12">Icelandic Króna (ISK)</option>',
    '<option value="169.28">Jamaican Dollar (JMD)</option>',
    '<option value="0.77">Jordanian Dinar (JOD)</option>',
    '<option value="161.7">Japanese Yen (JPY)</option>',
    '<option value="173.36">Kenyan Shilling (KES)</option>',
    '<option value="97.49">Kyrgystani Som (KGS)</option>',
    '<option value="4437.59">Cambodian Riel (KHR)</option>',
    '<option value="494.43">Comorian Franc (KMF)</option>',
    '<option value="1458.02">South Korean Won (KRW)</option>',
    '<option value="0.34">Kuwaiti Dinar (KWD)</option>',
    '<option value="0.91">Cayman Islands Dollar (KYD)</option>',
    '<option value="489.66">Kazakhstani Tenge (KZT)</option>',
    '<option value="22511.94">Laotian Kip (LAK)</option>',
    '<option value="16362.4">Lebanese Pound (LBP)</option>',
    '<option value="348.82">Sri Lankan Rupee (LKR)</option>',
    '<option value="206.56">Liberian Dollar (LRD)</option>',
    '<option value="20.64">Lesotho Loti (LSL)</option>',
    '<option value="5.24">Libyan Dinar (LYD)</option>',
    '<option value="10.83">Moroccan Dirham (MAD)</option>',
    '<option value="19.21">Moldovan Leu (MDL)</option>',
    '<option value="4964.55">Malagasy Ariary (MGA)</option>',
    '<option value="61.51">Macedonian Denar (MKD)</option>',
    '<option value="2286.19">Myanmar Kyat (MMK)</option>',
    '<option value="8.77">Macanese Pataca (MOP)</option>',
    '<option value="43.17">Mauritanian Ouguiya (MRO)</option>',
    '<option value="48.31">Mauritian Rupee (MUR)</option>',
    '<option value="16.81">Maldivian Rufiyaa (MVR)</option>',
    '<option value="1832.63">Malawian Kwacha (MWK)</option>',
    '<option value="18.65">Mexican Peso (MXN)</option>',
    '<option value="5.15">Malaysian Ringgit (MYR)</option>',
    '<option value="69.03">Mozambican Metical (MZN)</option>',
    '<option value="20.64">Namibian Dollar (NAD)</option>',
    '<option value="972.53">Nigerian Naira (NGN)</option>',
    '<option value="39.87">Nicaraguan Córdoba (NIO)</option>',
    '<option value="11.43">Norwegian Krone (NOK)</option>',
    '<option value="144.69">Nepalese Rupee (NPR)</option>',
    '<option value="1.78">New Zealand Dollar (NZD)</option>',
    '<option value="0.42">Omani Rial (OMR)</option>',
    '<option value="1.09">Panamanian Balboa (PAB)</option>',
    '<option value="4.07">Peruvian Nuevo Sol (PEN)</option>',
    '<option value="4.07">Papua New Guinean Kina (PGK)</option>',
    '<option value="61">Philippine Peso (PHP)</option>',
    '<option value="304.71">Pakistani Rupee (PKR)</option>',
    '<option value="4.36">Polish Zloty (PLN)</option>',
    '<option value="7927.27">Paraguayan Guarani (PYG)</option>',
    '<option value="3.97">Qatari Rial (QAR)</option>',
    '<option value="4.99">Romanian Leu (RON)</option>',
    '<option value="117.21">Serbian Dinar (RSD)</option>',
    '<option value="97.61">Russian Ruble (RUB)</option>',
    '<option value="1399.97">Rwandan Franc (RWF)</option>',
    '<option value="4.09">Saudi Riyal (SAR)</option>',
    '<option value="9.21">Solomon Islands Dollar (SBD)</option>',
    '<option value="14.6">Seychellois Rupee (SCR)</option>',
    '<option value="655.96">Sudanese Pound (SDG)</option>',
    '<option value="11.4">Swedish Krona (SEK)</option>',
    '<option value="1.46">Singapore Dollar (SGD)</option>',
    '<option value="21556.14">Sierra Leonean Leone (SLL)</option>',
    '<option value="623.22">Somali Shilling (SOS)</option>',
    '<option value="39.88">Surinamese Dollar (SRD)</option>',
    '<option value="9.53">Salvadoran Colón (SVC)</option>',
    '<option value="20.68">Swazi Lilangeni (SZL)</option>',
    '<option value="38.76">Thai Baht (THB)</option>',
    '<option value="11.87">Tajikistani Somoni (TJS)</option>',
    '<option value="3.82">Turkmenistani Manat (TMT)</option>',
    '<option value="3.4">Tunisian Dinar (TND)</option>',
    '<option value="2.58">Tongan Paʻanga (TOP)</option>',
    '<option value="32.96">Turkish Lira (TRY)</option>',
    '<option value="7.4">Trinidad and Tobago Dollar (TTD)</option>',
    '<option value="34.27">New Taiwan Dollar (TWD)</option>',
    '<option value="2737.95">Tanzanian Shilling (TZS)</option>',
    '<option value="40.84">Ukrainian Hryvnia (UAH)</option>',
    '<option value="4142.62">Ugandan Shilling (UGX)</option>',
    '<option value="1.09">United States Dollar (USD)</option>',
    '<option value="42.79">Uruguayan Peso (UYU)</option>',
    '<option value="13439.77">Uzbekistan Som (UZS)</option>',
    '<option value="26795.1">Vietnamese Dong (VND)</option>',
    '<option value="655.9">Central African CFA Franc (XAF)</option>',
    '<option value="2.95">East Caribbean Dollar (XCD)</option>',
    '<option value="655.9">West African CFA Franc (XOF)</option>',
    '<option value="120.11">CFP Franc (XPF)</option>',
    '<option value="273.24">Yemeni Rial (YER)</option>',
    '<option value="20.75">South African Rand (ZAR)</option>',
    '<option value="28.77">Zambian Kwacha (ZMW)</option>'];

if (document.cookie === "") {
    $listUnits = ['<option value="" disabled selected>Please select a unit</option>',
        '<option value="1">Meter</option>',
        '<option value="1000">Kilometer</option>',
        '<option value="0.01">Centimeter</option>',
        '<option value="330">Eiffel Tower</option>',
        '<option value="1.756">Man</option>',
        '<option value="0.1467">Smartphone</option>',
        '<option value="56">Ariane 5</option>',
        '<option value="1970">Golden Gate</option>'];
    $listUnits.forEach(option => {
        document.cookie = `${option.split(">")[1].split("<")[0]}=${option.split('="')[1].split('"')[0]}`;
    });
} else {
    const cookieDecode = decodeURIComponent(document.cookie);
    const cookieArray = cookieDecode.split('; ');
    cookieArray.forEach(val => {
        const name = val.split('=')[0];
        const value = val.split('=')[1];
        $listUnits.push("<option value=" + value + ">" + name + "</option>");
    })
}

$reponseSelecteur_1.innerHTML = $listUnits;
$reponseSelecteur_2.innerHTML = $listUnits;
$removeSelecteur.innerHTML = $listUnits;


let historique = [];
let change = false;
let start;

function AjouterHistorique(start) {
    setTimeout(() => {
        let end = new Date();
        if (end - start > 3000 && ($valeurInput_1.value !== "0" && $valeurInput_1.value !== "") && ($valeurInput_2.value !== "0" && $valeurInput_2.value !== "")) {
            let newHistorique = document.createElement("li");
            if ($title.value == "Units") {
                historique.push([$valeurInput_1.value == 0 ? "0" : $valeurInput_1.value, `${$reponseSelecteur_1.options[$reponseSelecteur_1.selectedIndex].text}${$valeurInput_1.value > 1 ? "s" : ""} `, Math.round($valeurInput_2.value * 100) / 100, `${$reponseSelecteur_2.options[$reponseSelecteur_2.selectedIndex].text}${$valeurInput_2.value > 1 ? "s" : ""}`]);
            } else {
                historique.push([$valeurInput_1.value == 0 ? "0" : $valeurInput_1.value, `${$reponseSelecteur_1.options[$reponseSelecteur_1.selectedIndex].text.split(" (")[0]}${$valeurInput_1.value > 1 ? "s" : ""} `, Math.round($valeurInput_2.value * 100) / 100, `${$reponseSelecteur_2.options[$reponseSelecteur_2.selectedIndex].text.split(" (")[0]}${$valeurInput_2.value > 1 ? "s" : ""}`]);
            }
            newHistorique.textContent = historique[historique.length - 1][0] + " " + historique[historique.length - 1][1] + " = " + historique[historique.length - 1][2] + " " + historique[historique.length - 1][3];
            $historiqueList.appendChild(newHistorique);
        }
    }, 3000);
};

function ImageResult(value, div, image) {
    div.style.backgroundImage = `url('${image}')`;
    const maxWidth = getComputedStyle(div).getPropertyValue('width').split("p")[0];
    if (value * 100 > maxWidth) {
        div.style.backgroundSize = `${maxWidth / value}px`;
        div.style.width = `${maxWidth}px`;
        div.style.height = `${maxWidth / value}px`;
    } else {
        div.style.backgroundSize = `${100}px`;
        div.style.width = `${value * 100}px`;
        div.style.height = `100px`;
    }
    if (value === '') {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
};

$colorMode.addEventListener('click', (event) => {
    const colorMode = getComputedStyle($colorMode).getPropertyValue('background-image').split("/")[getComputedStyle($colorMode).getPropertyValue('background-image').split("/").length - 1].split("\")")[0];
    if ((colorMode == "nightmode.png" && version == "desktop") || (colorMode == "nightmodeicon.png" && version == "mobile")) {
        $colorMode.classList.add('day');
        $colorMode.classList.remove('night');
        $body.classList.add('day');
        $body.classList.remove('night');
        $homeIcon.style.backgroundImage = "url('assets/homeiconday.jpg')";
        $convertisseurPage.classList.add('dayText');
        $convertisseurPage.classList.remove('nightText');
        $menu.classList.add('dayText');
        $menu.classList.remove('nightText');
        $title.classList.add('dayText');
        $title.classList.remove('nightText');
        $swap.style.backgroundImage = "url('assets/swapday.png')";
        $historique.classList.add('dayText');
        $historique.classList.remove('nightText');
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
        $homeIcon.style.backgroundImage = "url('assets/homeiconnight.png')";
        $convertisseurPage.classList.add('nightText');
        $convertisseurPage.classList.remove('dayText');
        $menu.classList.add('nightText');
        $menu.classList.remove('dayText');
        $title.classList.add('nightText');
        $title.classList.remove('dayText');
        $swap.style.backgroundImage = "url('assets/swapnight.png')";
        $historique.classList.add('nightText');
        $historique.classList.remove('dayText');
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

$title.addEventListener('change', (event) => {
    if ($title.value == "Money") {
        $reponseSelecteur_1.innerHTML = $listMoney;
        $reponseSelecteur_2.innerHTML = $listMoney;
    } else {
        $reponseSelecteur_1.innerHTML = $listUnits;
        $reponseSelecteur_2.innerHTML = $listUnits;
    }
    $valeurInput_1.value = "";
    $valeurInput_2.value = "";
});

$valeurInput_1.addEventListener("input", (event) => {
    if (($valeurInput_1.value !== "" || $valeurInput_2.value !== "") && $reponseSelecteur_1.value !== "" && $reponseSelecteur_2.value !== "") {
        $valeurInput_2.value = ($valeurInput_1.value * $reponseSelecteur_1.value) / $reponseSelecteur_2.value;
        $result.textContent = `${$valeurInput_1.value == 0 ? "0" : Math.round($valeurInput_1.value * 100) / 100} ${$reponseSelecteur_1.options[$reponseSelecteur_1.selectedIndex].text}${$valeurInput_1.value > 1 ? "s" : ""} equals to ${Math.round($valeurInput_2.value * 100) / 100} ${$reponseSelecteur_2.options[$reponseSelecteur_2.selectedIndex].text}${$valeurInput_2.value > 1 ? "s" : ""}.`;
        change = true;
        if (version == "desktop") {
            $divImageResult.style.display = "flex";
            ImageResult($valeurInput_1.value, $imageResult[0], `assets/${$reponseSelecteur_1.options[$reponseSelecteur_1.selectedIndex].text}.png`);
            ImageResult($valeurInput_2.value, $imageResult[1], `assets/${$reponseSelecteur_2.options[$reponseSelecteur_2.selectedIndex].text}.png`);
        }
    } else {
        $result.textContent = "";
        $valeurInput_2.value = "";
        $divImageResult.style.display = "none";
    }
});

$valeurInput_2.addEventListener("input", (event) => {
    if (($valeurInput_1.value !== "" || $valeurInput_2.value !== "") && $reponseSelecteur_1.value !== "" && $reponseSelecteur_2.value !== "") {
        $valeurInput_1.value = ($valeurInput_2.value * $reponseSelecteur_2.value) / $reponseSelecteur_1.value;
        $result.textContent = `${Math.round($valeurInput_1.value * 100) / 100} ${$reponseSelecteur_1.options[$reponseSelecteur_1.selectedIndex].text}${$valeurInput_1.value > 1 ? "s" : ""} equals to ${$valeurInput_2.value == 0 ? "0" : Math.round($valeurInput_2.value * 100) / 100} ${$reponseSelecteur_2.options[$reponseSelecteur_2.selectedIndex].text}${$valeurInput_2.value > 1 ? "s" : ""}.`;
        change = true;
        if (version == "desktop") {
            $divImageResult.style.display = "flex";
            ImageResult($valeurInput_1.value, $imageResult[0], `assets/${$reponseSelecteur_1.options[$reponseSelecteur_1.selectedIndex].text}.png`);
            ImageResult($valeurInput_2.value, $imageResult[1], `assets/${$reponseSelecteur_2.options[$reponseSelecteur_2.selectedIndex].text}.png`);
        }
    } else {
        $result.textContent = "";
        $valeurInput_1.value = "";
        $divImageResult.style.display = "none";
    }
})

$reponseSelecteur_1.addEventListener("change", (event) => {
    if (($valeurInput_1.value !== "" || $valeurInput_2.value !== "") && $reponseSelecteur_1.value !== "" && $reponseSelecteur_2.value !== "") {
        $valeurInput_1.value = ($valeurInput_2.value * $reponseSelecteur_2.value) / $reponseSelecteur_1.value;
        $result.textContent = `${Math.round($valeurInput_1.value * 100) / 100} ${$reponseSelecteur_1.options[$reponseSelecteur_1.selectedIndex].text}${$valeurInput_1.value > 1 ? "s" : ""} equals to ${$valeurInput_2.value == 0 ? "0" : Math.round($valeurInput_2.value * 100) / 100} ${$reponseSelecteur_2.options[$reponseSelecteur_2.selectedIndex].text}${$valeurInput_2.value > 1 ? "s" : ""}.`;
        change = true;
        if (version == "desktop") {
            $divImageResult.style.display = "flex";
            ImageResult($valeurInput_1.value, $imageResult[0], `assets/${$reponseSelecteur_1.options[$reponseSelecteur_1.selectedIndex].text}.png`);
            ImageResult($valeurInput_2.value, $imageResult[1], `assets/${$reponseSelecteur_2.options[$reponseSelecteur_2.selectedIndex].text}.png`);
        }
    } else {
        $result.textContent = "";
        $valeurInput_1.value = "";
        $divImageResult.style.display = "none";
    }
});

$reponseSelecteur_2.addEventListener("change", (event) => {
    if (($valeurInput_1.value !== "" || $valeurInput_2.value !== "") && $reponseSelecteur_1.value !== "" && $reponseSelecteur_2.value !== "") {
        $valeurInput_2.value = ($valeurInput_1.value * $reponseSelecteur_1.value) / $reponseSelecteur_2.value;
        $result.textContent = `${$valeurInput_1.value == 0 ? "0" : Math.round($valeurInput_1.value * 100) / 100} ${$reponseSelecteur_1.options[$reponseSelecteur_1.selectedIndex].text}${$valeurInput_1.value > 1 ? "s" : ""} equals to ${Math.round($valeurInput_2.value * 100) / 100} ${$reponseSelecteur_2.options[$reponseSelecteur_2.selectedIndex].text}${$valeurInput_2.value > 1 ? "s" : ""}.`;
        change = true;
        if (version == "desktop") {
            $divImageResult.style.display = "flex";
            ImageResult($valeurInput_1.value, $imageResult[0], `assets/${$reponseSelecteur_1.options[$reponseSelecteur_1.selectedIndex].text}.png`);
            ImageResult($valeurInput_2.value, $imageResult[1], `assets/${$reponseSelecteur_2.options[$reponseSelecteur_2.selectedIndex].text}.png`);
        }
    } else {
        $result.textContent = "";
        $valeurInput_2.value = "";
        $divImageResult.style.display = "none";
    }

});

$swap.addEventListener('click', (event) => {
    if ($reponseSelecteur_1.value !== "" && $reponseSelecteur_2.value !== "") {
        let temp = $reponseSelecteur_1.selectedIndex;
        $reponseSelecteur_1.selectedIndex = $reponseSelecteur_2.selectedIndex;
        $reponseSelecteur_2.selectedIndex = temp;
        temp = $valeurInput_1.value;
        $valeurInput_1.value = $valeurInput_2.value;
        $valeurInput_2.value = temp;
        if ($valeurInput_1.value !== "" && $valeurInput_2.value !== "") {
            $result.textContent = `${$valeurInput_1.value == 0 ? "0" : Math.round($valeurInput_1.value * 100) / 100} ${$reponseSelecteur_1.options[$reponseSelecteur_1.selectedIndex].text}${$valeurInput_1.value > 1 ? "s" : ""} equals to ${Math.round($valeurInput_2.value * 100) / 100} ${$reponseSelecteur_2.options[$reponseSelecteur_2.selectedIndex].text}${$valeurInput_2.value > 1 ? "s" : ""}.`;
        }
        change = true;
    }
});

setInterval(() => {
    if (change) {
        change = false;
        start = new Date();
        AjouterHistorique(start);
    }
}, 1000);

$historique.addEventListener('click', (event) => {
    if (!$historiqueList.classList.contains('hidden')) {
        if (version == "desktop") {
            $historique.style.width = "calc(7.45% + 8px)";
            $historique.style.height = "75px";
            $historique.style.left = "92.55%";
            $convertisseurPage.style.left = "0px";
            $modificationPage.style.left = "0px";
        } else {
            $historique.style.width = "100px";
            $historique.style.height = "75px";
            $historique.style.left = "calc(100% - 100px + 16px)";
            $convertisseurPage.style.top = "0px";
            $modificationPage.style.top = "0px";
            $footer.style.top = "0px";
        }
        $historiqueList.classList.toggle('hidden');

    } else {
        if (version == "desktop") {
            $historique.style.width = "20%";
            $historique.style.height = "300px";
            $historique.style.left = "80.4%";
            $convertisseurPage.style.left = "-10%";
            $modificationPage.style.left = "-10%";
        } else {
            $historique.style.width = "100%";
            $historique.style.height = "300px";
            $historique.style.left = "8px";
            $convertisseurPage.style.top = "300px";
            $modificationPage.style.top = "300px";
            $footer.style.top = "300px";
        }
        setTimeout(() => {
            $historiqueList.classList.toggle('hidden');
        }, 150);
    }
});

//add une new valeur dans le selecteur:
$buttonAddNewUnit.addEventListener("click", (event) => {

    if ($addTitle.value !== "" && $addValeurMetre.value !== "") {

        var newOptionSelecteur1 = new Option($addTitle.value, $addValeurMetre.value)
        var newOptionSelecteur2 = new Option($addTitle.value, $addValeurMetre.value)
        var newOptionSelecteur3 = new Option($addTitle.value, $addValeurMetre.value)


        $reponseSelecteur_1.add(newOptionSelecteur1, null)
        $reponseSelecteur_2.add(newOptionSelecteur2, null)
        $removeSelecteur.add(newOptionSelecteur3, null)

        document.cookie = `${$addTitle.value}=${$addValeurMetre.value}`

        $addTitle.value = "";
        $addValeurMetre.value = "";
    }
})

// fonction pour supprimer une valeur dans le selecteur:
$buttonRemoveUnit.addEventListener("click", (event) => {
    let indexSupprime = $removeSelecteur.selectedIndex

    document.cookie = $removeSelecteur[indexSupprime].textContent + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    $removeSelecteur.remove(indexSupprime)
    $reponseSelecteur_1.remove(indexSupprime)
    $reponseSelecteur_2.remove(indexSupprime)

})

$convertisseur.addEventListener('click', (event) => {
    $modificationPage.style.display = "none";
    $convertisseurPage.classList.remove('hidden');
});

$modification.addEventListener('click', (event) => {
    $convertisseurPage.classList.add('hidden');
    $modificationPage.style.display = "flex";
});
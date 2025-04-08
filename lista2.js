var kaverit = [];

function lisaaKaveri() {
    var nimi = prompt("Anna kaverin nimi:");
    if (nimi) {
        kaverit.push(nimi);
        naytaLista();
    }
}

function naytaLista() {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";
    for (var i = 0; i < kaverit.length; i++) {
        var li = document.createElement("li");
        li.textContent = kaverit[i];
        lista.appendChild(li);
    }
}

function lajitteleLista() {
    kaverit.sort();
    naytaLista();
}

function poistaKaveri() {
    var nimi = prompt("Anna poistettavan kaverin nimi:");
    var index = kaverit.indexOf(nimi);
    if (index !== -1) {
        kaverit.splice(index, 1);
        naytaLista();
    }
}
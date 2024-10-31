let myData = [];

function init() {

    getFromLocalStorage();
    render();
}

function saveData() {
    let inputRef = document.getElementById('data_input');

    if (inputRef.value != "") {
        myData.push(inputRef.value)
    }

    saveToLocalStorage();

    render();
    inputRef.value = "";
}



function saveToLocalStorage() {
    localStorage.setItem("myData", JSON.stringify(myData)); /*JSON.stringify(myData) ==> Array wird als string abgespeichert, da die Funktion ein String verlangt TODO: doku lesen / in Dev-Knowledge aufnehmen*/
}

function getFromLocalStorage() {
    const myLoadedData = localStorage.getItem('myData'); // wird als String geladen nicht als Array!
    let myArray = JSON.parse(myLoadedData); // Wandelt String in Array (object) um.
    /*Kürzere Schreibweise => let myArray = JSON.parse(localStorage.getItem('myData'));*/

    if (myArray != null) { // Darf nur gemacht werden, wenn die Variable im LocalStorage gefunden wird
        myData = myArray;
    }

}


function render() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let index = 0; index < myData.length; index++) {
        contentRef.innerHTML += `<p>${myData[index]}</p>`;
    }
}
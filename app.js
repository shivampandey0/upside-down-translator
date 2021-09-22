var inputArea = document.querySelector("#text-input");
var outputArea = document.querySelector("#text-output");
var translateBtn = document.querySelector("#translate-button");

translateBtn.addEventListener("click",clickHandler);

var url = "	https://api.funtranslations.com/translate/yoda.json";


function clickHandler() {

    let newUrl = constructURL(inputArea.value);
    fetch(newUrl)
    .then(response => response.json())
    .then(data => outputArea.innerText = data.contents.translated)
    .catch(errorHandler);
    
}

function constructURL(text) {
    var encodedURI = encodeURI(text);
    return `${url}?text=${encodedURI}`;
}

function errorHandler(error) {
    outputArea.innerText = "Looks like we hit and error, Try again later\n" + error;
}
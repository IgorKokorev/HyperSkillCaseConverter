let textarea = document.getElementById("textarea");

document.getElementById("lower-case").addEventListener("click", function () {
    let text = textarea.value;
    textarea.value = text.toLowerCase();
});

document.getElementById("upper-case").addEventListener("click", function () {
    let text = textarea.value;
    textarea.value = text.toUpperCase();
});

document.getElementById("proper-case").addEventListener("click", function () {
    let text = textarea.value.toLowerCase();
    let sentences = text.split(" ");
    let result = "";

    function upFirstLetter(str) {
        result = result + str.at(0).toUpperCase() + str.substring(1) + " ";
    }

    sentences.forEach(upFirstLetter);
    textarea.value = result.substring(0, result.length-1);
});

document.getElementById("sentence-case").addEventListener("click", function () {
    let text = textarea.value.toLowerCase();
    let sentences = text.split(". ");
    let result = "";

    function upFirstLetter(str) {
        result = result + str.at(0).toUpperCase() + str.substring(1) + ". ";
    }

    sentences.forEach(upFirstLetter);
    textarea.value = result.substring(0, result.length-2);
});

document.getElementById("save-text-file").addEventListener("click", function () {
    let text = textarea.value;
    let filename = "text.txt";
    download(filename, text);
}, false);

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


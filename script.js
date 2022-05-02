document.getElementById('copy').addEventListener('click', execCopy);
//copy function 
function execCopy() {
    document.querySelector('#outputText').select();
    //execCommand is deprecated but has no easy alternative for it use, so we will use him 
    document.execCommand('copy');
} 
/*A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/
function textCaption() {
    var textInput = document.getElementById("txtTextArea").value.split('');
    var img = document.getElementById("mainImage");
    var output = document.getElementById("outputText");
    var secondaryText = document.getElementById("secondaryText");
    var copyButton = document.getElementById('copy');
    console.log(textInput);
    // if i equals the desired character then the character position in the array must be replaced by x
    for (var i = 0; i < textInput.length; i++) {
        if (textInput[i] == 'e') {
            textInput[i] = "enter";
        }
        if (textInput[i] == 'i') {
            textInput[i] = "imes";
        }
        if (textInput[i] == 'a') {
            textInput[i] = "ai";
        }

        if (textInput[i] == 'o') {
            textInput[i] = "ober";
        }
        if (textInput[i] == 'u') {
            textInput[i] = "ufat";
        }
        console.log(textInput[i]);
    }
    img.style.cssText = 'display:none;';
    output.style.cssText = 'display: inherit;';
    secondaryText.style.cssText = 'display: none;';
    copyButton.style.cssText = 'display: inherit;';
    output.innerHTML = textInput.join('');
}

function decrypt() {
    var textInput = document.getElementById("txtTextArea").value.split('');
    var img = document.getElementById("mainImage");
    var output = document.getElementById("outputText");
    var secondaryText = document.getElementById("secondaryText");
    var copyButton = document.getElementById('copy');
    var size = textInput.length;
    for (var i = 0; i < size; i++) {
        //if i equals the first letter of an encrypted letter, then test the next letters, if all are equal, replace the encrypted letter in the array with the original letter
        if (textInput != ' ') {
            if (textInput[i] == 'e' && textInput[i + 1] == 'n' && textInput[i + 2] == 't' && textInput[i + 3] == 'e' && textInput[i + 4] == 'r') {
                textInput[i] = 'e';
                //it is also necessary to delete the spare letters from the array, for this we use the slice function, where slice(index + 1, number of positions ahead that will be deleted), we put index plus 1 since the first letter is the original letter
                textInput.splice(i + 1, 4);
            }
            if (textInput[i] == 'i' && textInput[i + 1] == 'm' && textInput[i + 2] == 'e' && textInput[i + 3] == 's') {
                textInput[i] = 'i';
                textInput.splice(i + 1, 3);
            }
            if (textInput[i] == 'a' && textInput[i + 1] == 'i') {
                textInput[i] = 'a';
                textInput.splice(i + 1, 1);
            }
            if (textInput[i] == 'o' && textInput[i + 1] == 'b'
                && textInput[i + 2] == 'e' && textInput[i + 3] == 'r') {
                textInput[i] = 'o';
                textInput.splice(i + 1, 3);
            }
            if (textInput[i] == 'u' && textInput[i + 1] == 'f'
                && textInput[i + 2] == 'a' && textInput[i + 3] == 't') {
                textInput[i] = 'u';
                textInput.splice(i + 1, 3);
            }
        }
    }
    console.log(textInput);
    img.style.cssText = 'display:none;';
    output.style.cssText = 'display: inherit;';
    secondaryText.style.cssText = 'display: none;';
    copyButton.style.cssText = 'display: inherit;';
    output.innerHTML = textInput.join('');
}
function convertCharacter() {
    var charToSearch = document.getElementById("textSearchField").value;
    var charToReplace = document.getElementById("textReplaceField").value;
    var text = document.getElementById("inputTextArea").value;
    document.getElementById("outputTextArea").value = text.replace(new RegExp(charToSearch, 'g'), charToReplace);
}
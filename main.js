function validateForm() {
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
    
    if (campoB > campoA) {
    alert("Formulário válido!");
    return true;
    } else {
    alert("Formulário inválido!");
    return false;
    }
}
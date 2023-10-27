function validateForm() {
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = document.getElementById("campoB").value;
    
    if (campoB > campoA) {
    alert("Formulário válido!");
    return true;
    } else {
    alert("Formulário inválido!");
    return false;
    }
}
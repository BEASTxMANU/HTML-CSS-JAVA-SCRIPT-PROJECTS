
function hello() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const opr = document.getElementById("operators").value;


    // if (opr == '+') {
    //     document.getElemenById("result").value = n1 + n2;
    // }
    if (opr == '+') {
        document.getElementById("result").value = n1 + n2;
    }
    if (opr == '-') {
        document.getElementById("result").value = n1 - n2;
    }
    if (opr == '*') {
        document.getElementById("result").value = n1 * n2;
    }
    if (opr == '/') {
        document.getElementById("result").value = n1 / n2;
    }
}

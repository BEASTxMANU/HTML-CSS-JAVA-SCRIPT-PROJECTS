document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const content = document.getElementById("content");
    const mode = document.getElementById("mode");
    let darkMode = false;
    mode.addEventListener('click', function () {
        darkMode = !darkMode;
        if (darkMode) {
            body.classList.add('dark-mode');
            content.style.color = '#fff'
        }
        else {
            body.classList.remove('dark-mode');
            content.style.color = '#333';
        }
    })

})
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

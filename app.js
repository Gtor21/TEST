document.addEventListener('DOMContentLoaded', (e) => {
    text();
});

function text() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('#btnSend')) {
            let input = document.getElementById("txtInput");
            let textarea = document.getElementById("Textarea");
            let numeros = [];
            let letras = [];
            let value = input.value.split("")
            value.forEach(item => {
                if (!isNaN(item)) {
                    numeros.push(item);
                } else {
                    letras.push(item);
                }
            });
            if (letras.length < 10) {
                alert("El texto ingresado contiene menos de 15 caracteres");
                textarea.value = "";
            }else if(numeros.length < 5){
                alert("Debe ingresar almenos 5 umeros");
            } else {
                Array.prototype.sortNumbers = function () {
                    return this.sort(
                        function (a, b) {
                            return a - b
                        }
                    );
                }
                textarea.value = letras.reverse().toString().replaceAll(",", "")+numeros.sortNumbers().reverse().toString().replaceAll(",", "");
            }
        }
    });
}
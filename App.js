const insert = document.getElementById('input');
const letters = document.getElementById('letter');
const button = document.getElementById('bot');
const comentario = document.getElementById('parraf');
const comment = document.getElementById('contador');

insert.addEventListener('keypress', captureEvent);
button.addEventListener('click', captureEvent2);

function captureEvent(event){
    if(event.keyCode == 13){
        console.log(event);
        letters.textContent = event.target.value.charAt(0).toUpperCase();
    }
}

function captureEvent2(){
    comentario.textContent = comment.value;
}

function contador(){
    var total = 200;
    setTimeout(function(){
        var valor = document.getElementById('contador');
        var resultado = document.getElementById('resultado');
        var cantidad = valor.value.length;

        document.getElementById('resultado').innerHTML = "Caracteres: " + (total - cantidad);

        if(cantidad < total){
            resultado.style.color = "white";
        }
        else{
            resultado.style.color = "red";
        }
    });
}  
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
//relogio
const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})
//dia
let dia = document.getElementById('dia');

let date = new Date();
let day = date.getDate();

dia.innerHTML = day;
//-------------------------------------//

//mes
let mes = document.getElementById('mes');

mezx = ['Jan','Fev','Mar','Abr','Maio','Jun','Jul','Ago','Set','Out','Nov','Dez'];

let month = new Date();
let mon = mezx [date.getMonth()] ;

mes.innerHTML = mon;
//-------------------------------------//

//ano
let ano = document.getElementById('ano');

let year = new Date();
let yea = date.getFullYear();

ano.innerHTML = yea;
//-------------------------------------//
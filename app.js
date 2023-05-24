const elementHour = document.getElementById('hour');
const elementMinutes = document.getElementById('minutes');
const elementSeconds = document.getElementById('seconds');
const elementDate = document.getElementById('date');

const options = { dateStyle: 'full' };

const relogio = setInterval(function time() {
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    elementHour.textContent = addZero( hour );
    elementMinutes.textContent = addZero( minutes );
    elementSeconds.textContent = addZero( seconds );
})

const calendar = setInterval(function date(){
    const date = new Date();

    let monthDate = new Intl.DateTimeFormat( 'pt-BR', options ).format(date);
    
    elementDate.textContent = firstLetterUpperCase(monthDate);
})

function firstLetterUpperCase(string) {
    string = string.replace(string[0], (letter) => letter.toUpperCase())
    string = string.replace(string[20], (letter) => letter.toUpperCase())
    return string; 
}

function addZero( number ) {
    return number < 10 ? '0' + number : number;
}
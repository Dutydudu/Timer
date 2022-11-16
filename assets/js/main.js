const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const finalizar = document.querySelector('.finalizar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = mudarHoraSegundos(segundos);
    }, 1000);
}

function mudarHoraSegundos(segundos) {
    let data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'GMT'
    })
}

document.addEventListener('click', function(e) {
    const el = e.target;
    
    if(el.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
    if(el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
    if(el.classList.contains('finalizar')) {
        relogio.classList.add('pausado')
        clearInterval(timer);
    }
})
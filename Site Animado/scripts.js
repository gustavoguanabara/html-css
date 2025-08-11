let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.conteiner')
let items = container.querySelectorAll('.list .item')
let indicadores = document.querySelector('.indicadores')
let dots = indicadores.querySelectorAll('ul li')
let list = container.querySelector('.list')

let ativo = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider(){
    let itemOld = container.querySelector('.list .item.ativo')
    itemOld.classList.remove('ativo')

    let dtsOld = indicator.querySelector('ul li.ativo')
    dotsOld.classList.remove('ativo')
    dots[ativo].class.add('ativo')

    indicadores.querySelector('.number').innerHTML = '0' + (ativo + 1)
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    ativo = ativo + 1 > lastPosition ? 0 : ativo + 1
    items[ativo].classList.add('ativo')

}

prevButton.onclink = () => {
    list.style.setProperty('--calculation', -1)
    ativo = ativo - 1 > firstPosition ? lastPosition : ativo - 1
    items[ativo].classList.add('ativo')

}


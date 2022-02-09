const direct = document.getElementById('arrow-direct')
const popup = document.getElementById('popup')

const resumenban = document.getElementById('resumen-ban')

const mediaQuery = window.matchMedia('(max-width: 620px)')


function verDiv() {

    if (popup.classList.contains('invisible')) {
        popup.classList.remove('invisible')
        popup.classList.add('visible')
        
    } else {
        popup.classList.remove('visible')
        popup.classList.add('invisible')
        
    }

    if (mediaQuery.matches && popup.classList.contains('visible')) {
        resumenban.classList.remove('visible1')
        resumenban.classList.add('invisible1')
    } else if (mediaQuery.matches && popup.classList.contains('invisible')) {
        resumenban.classList.remove('invisible1')
        resumenban.classList.add('visible1')
    }

    
}

document.addEventListener('click', verDiv)
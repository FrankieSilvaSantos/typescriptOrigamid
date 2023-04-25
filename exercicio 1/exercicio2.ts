const input = document.querySelector('input')

const total = localStorage.getItem('total')
if (input && total) {
    input.value = total
    calcularGanho(Number(input.value))

}

function calcularGanho(value: number) {

    const p = document.querySelector('p')
    if (p) {
        p.innerText = `Ganho o total de ${value + 100 - (value * 0.2)} `
    }
}


function totalMudou() {


    if (input) {
       

        localStorage.setItem('total', input.value)
        calcularGanho(Number(input.value))
    }



}


input?.addEventListener('keyup', totalMudou)
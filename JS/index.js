function mostrarPrecio() {
    let elegirPrenda= parseInt(prompt('ingrese el numero de la prenda que desee: '))
    while ((elegirPrenda >= 5) && (elegirPrenda <= 0)){
        elegirPrenda = parseInt(prompt('Ingrese una opcion valida'))}
    switch (elegirPrenda) {
        case 1:
            confirm('El vestido cuesta $10000')
            break
        case 2:
            confirm('La remera cuesta $9000')
            break
        case 3:
            confirm('El pantalon cuesta $18000')
            break
        case 4:
            confirm('La campera cuesta $25000')
            break
    }
}

function elegirTalle(){
    let talle= prompt('Ingrese el talle que desea: ')
    if (talle === 'S'){
        confirm(' Usted eligio el talle S')
    }
    else if (talle ===  'M'){
        confirm('Usted eligio el talle M')
    }
    else if (talle === 'L'){
        confirm('Usted eligio el talle L')
    }    
    else if (talle === 'XL'){
        confirm('Usted eligio el talle XL')
    }    
    else {
        alert('No trabajamos con ese talle')
        }
}

function formasDePago(){
    let pagar= prompt('Introduzca metodo de pago💸: ')
    if (pagar === 'tarjeta'){
        let cuotas = prompt('Introducir inicial de la prenda que desea pagar: ')
        if(cuotas === 'v'){
            let totalVestido = v/3
            console.log(totalVestido)
        }
        else if(cuotas === 'r'){
            let totalRemera = r/3
            console.log(totalRemera)
        }
        else if(cuotas === 'p'){
            let totalPantalon = p/3
            console.log(totalPantalon)
        }
        else if(cuotas === 'c'){
            let totalCampera = c/3
            console.log(totalCampera)
        }
        else {
            alert('Elija una opcion valida')
        }
    }
    else if (pagar === 'transferencia'){
        confirm('Ya fue realizado el pago')
    }
    else {
        alert('Lo sentimos, no tenemos otras formas de pago')
    }
    

}


mostrarPrecio()
elegirTalle()
formasDePago()

const v = 10000
const r = 9000
const p = 18000
const c = 25000
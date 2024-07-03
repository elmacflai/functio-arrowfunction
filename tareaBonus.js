
function edad (años){
    console.log("hola")
    if (años < 18) {
        console.log("Eres un kindergardianos, regresa al kinder")
    }

    else if (años >= 18 && años <= 24 ) {
        console.log("Eres un centennial, te tocó crecer con un smartphone en la mano")
    }

    else if (años >= 25 && años <= 38 ) {
        console.log("Eres un millennial, te tocó crecer en la mejor época, los 90")
    }

    else if (años >= 39 && años <= 60 ) {
        console.log("Eres parte de la generación x, te toco la mejor época del rock")
    }

    else if (años > 60 ) {
        console.log("Eres un baby boomer, ocupas que tus nietos te ayudan a instalar whatsapp")
    }

    else {
        console.log("El valor ingresado no es un numero")
    }
}

edad("al")

const edad2 = (años) => {
    if (años < 18) {
        console.log("Eres un kindergardianos, regresa al kinder")
    }

    else if (años >= 18 && años <= 24 ) {
        console.log("Eres un centennial, te tocó crecer con un smartphone en la mano")
    }

    else if (años >= 25 && años <= 38 ) {
        console.log("Eres un millennial, te tocó crecer en la mejor época, los 90")
    }

    else if (años >= 39 && años <= 60 ) {
        console.log("Eres parte de la generación x, te toco la mejor época del rock")
    }

    else if (años > 60 ) {
        console.log("Eres un baby boomer, ocupas que tus nietos te ayudan a instalar whatsapp")
    }

    else {
        console.log("El valor ingresado no es un numero")
    }

}

edad2(25)
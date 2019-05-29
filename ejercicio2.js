
    let pesoActual = 80
    let pesoIdeal = 75
    let decremento = 1
    let numSemanas = 0
   

    while (pesoActual>pesoIdeal){
        pesoActual = pesoActual - decremento
        numSemanas = numSemanas + 1
    }
    console.log("te faltan: " + numSemanas + " semanas")

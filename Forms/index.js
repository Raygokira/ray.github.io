function cadastro() {
    var name = document.getElementById('name').value
    var email = document.getElementById('e-mail').value
    var adress = document.getElementById('adress').value
    var adress_2 = document.getElementById('adress-2').value
    var city = document.getElementById('city').value
    var states = document.getElementById('states').value
    var phone = document.getElementById('phone').value

    if (name === false) {
        console.log()
    } else {
        // console.log(name)
        localStorage.setItem("Nome", name)
    }

    if (email === false) {
        console.log()
    } else {
        // console.log("email")
        localStorage.setItem("E-mail", email)
    }

    if (adress === false) {
        console.log()
    } else {
        // console.log(adress)
        localStorage.setItem("Endereço", adress)
    }

    if (adress_2 === false) {
        console.log()
    } else {
        // console.log("adress_2")
        localStorage.setItem("Complemento", adress_2)
    }
    if (city === false) {
        console.log()
    } else {
        // console.log(city)
        localStorage.setItem("Cidade", city)
    }

    if (states === false) {
        console.log()
    } else {
        // console.log(states)
        localStorage.setItem("Estado", states)
    }

    if (phone === false) {
        console.log()
    } else {
        // console.log(phone)
        localStorage.setItem("Telefone", phone)
    }
}
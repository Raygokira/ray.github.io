function feedback() {
    var ts_site = document.getElementById('ts_site').checked;
    var s_site = document.getElementById('s_site').checked;
    var n_site = document.getElementById('n_site').checked;
    var i_site = document.getElementById('i_site').checked;
    var mi_site = document.getElementById('mi_site').checked;

    if (ts_site === false) {
        console.log()
    } else {
        // console.log("Totalmente Satisfeito")
        localStorage.setItem("Pergunta 1", "Totalmente Satisfeito")
    }

    if (s_site === false) {
        console.log()
    } else {
        // console.log("Satisfeito")
        localStorage.setItem("Pergunta 1", "Satisfeito")
    }

    if (n_site === false) {
        console.log()
    } else {
        // console.log("Neutro")
        localStorage.setItem("Pergunta 1", "Neutro")
    }

    if (i_site === false) {
        console.log()
    } else {
        // console.log("Insatisfeito")
        localStorage.setItem("Pergunta 1", "Insatisfeito")
    }

    if (mi_site === false) {
        console.log()
    } else {
        localStorage.setItem("Pergunta 1", "Muito Insatisfeito")
    }

    var ts_le = document.getElementById('ts_le').checked
    var s_le = document.getElementById('s_le').checked
    var n_le = document.getElementById('n_le').checked
    var i_le = document.getElementById('i_le').checked
    var mi_le = document.getElementById('mi_le').checked

    if (ts_le === false) {
        console.log()
    } else {
        // console.log("Totalmente Satisfeito")
        localStorage.setItem("Pergunta 2", "Totalmente Satisfeito")
    }

    if (s_le === false) {
        console.log()
    } else {
        // console.log("Satisfeito")
        localStorage.setItem("Pergunta 2", "Satisfeito")
    }

    if (n_le === false) {
        console.log()
    } else {
        // console.log("Neutro")
        localStorage.setItem("Pergunta 2", "Neutro")
    }

    if (i_le === false) {
        console.log()
    } else {
        // console.log("Insatisfeito")
        localStorage.setItem("Pergunta 2", "Insatisfeito")
    }

    if (mi_le === false) {
        console.log()
    } else {
        // console.log("Muito Insatisfeito")
        localStorage.setItem("Pergunta 2", "Muito Insatisfeito")
    }

    var ts_as = document.getElementById('ts_as').checked
    var s_as = document.getElementById('s_as').checked
    var n_as = document.getElementById('n_as').checked
    var i_as = document.getElementById('i_as').checked
    var mi_as = document.getElementById('mi_as').checked

    if (ts_as === false) {
        console.log()
    } else {
        // console.log("Totalmente Satisfeito")
        localStorage.setItem("Pergunta 2", "Totalmente Satisfeito")
    }

    if (s_as === false) {
        console.log()
    } else {
        // console.log("Satisfeito")
        localStorage.setItem("Pergunta 2", "Satisfeito")
    }

    if (n_as === false) {
        console.log()
    } else {
        // console.log("Neutro")
        localStorage.setItem("Pergunta 2", "Neutro")
    }

    if (i_as === false) {
        console.log()
    } else {
        // console.log("Insatisfeito")
        localStorage.setItem("Pergunta 2", "Insatisfeito")
    }

    if (mi_as === false) {
        console.log()
    } else {
        // console.log("Muito Insatisfeito")
        localStorage.setItem("Pergunta 2", "Muito Insatisfeito")
    }
    
    var ts_m = document.getElementById('ts_m').checked
    var s_m = document.getElementById('s_m').checked
    var n_m = document.getElementById('n_m').checked
    var i_m = document.getElementById('i_m').checked
    var mi_m = document.getElementById('mi_m').checked

    if (ts_m === false) {
        console.log()
    } else {
        // console.log("Totalmente Satisfeito")
        localStorage.setItem("Pergunta 3", "Totalmente Satisfeito")
    }

    if (s_m === false) {
        console.log()
    } else {
        // console.log("Satisfeito")
        localStorage.setItem("Pergunta 3", "Satisfeito")
    }

    if (n_m === false) {
        console.log()
    } else {
        // console.log("Neutro")
        localStorage.setItem("Pergunta 3", "Neutro")
    }

    if (i_m === false) {
        console.log()
    } else {
        // console.log("Insatisfeito")
        localStorage.setItem("Pergunta 3", "Insatisfeito")
    }

    if (mi_m === false) {
        console.log()
    } else {
        // console.log("Muito Insatisfeito")
        localStorage.setItem("Pergunta 3", "Muito Insatisfeito")
    }

    var ts_e = document.getElementById('ts_e').checked
    var s_e = document.getElementById('s_e').checked
    var n_e = document.getElementById('n_e').checked
    var i_e = document.getElementById('i_e').checked
    var mi_e = document.getElementById('mi_e').checked

    if (ts_e === false) {
        console.log()
    } else {
        // console.log("Totalmente Satisfeito")
        localStorage.setItem("Pergunta 4", "Totalmente Satisfeito")
    }

    if (s_e === false) {
        console.log()
    } else {
        // console.log("Satisfeito")
        localStorage.setItem("Pergunta 4", "Satisfeito")
    }

    if (n_e === false) {
        console.log()
    } else {
        // console.log("Neutro")
        localStorage.setItem("Pergunta 4", "Neutro")
    }

    if (i_e === false) {
        console.log()
    } else {
        // console.log("Insatisfeito")
        localStorage.setItem("Pergunta 4", "Insatisfeito")
    }

    if (mi_e === false) {
        console.log()
    } else {
        // console.log("Muito Insatisfeito")
        localStorage.setItem("Pergunta 4", "Muito Insatisfeito")
    }

    var sugestao = document.getElementById('sugestao').value

    if (sugestao === false) {
        console.log()
    } else {
        // console.log(sugestao)
        localStorage.setItem("Pergunta 5", sugestao)
    }

}
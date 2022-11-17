function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 9
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 5 && hora < 12){
        //BOM DIA
        imagem.src = "fotomanha.png"
        document.body.style.background = '#ecd29b'
    }else if(hora >=12 && hora <18){
        imagem.src = "fototarde.png"
        document.body.style.background = '#d97748'
    }else{
        imagem.src = "fotonoite.png"
        document.body.style.background = '#6d425d'
    }
}

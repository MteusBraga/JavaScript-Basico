function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO: Verifique os valores e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //criar elemento imagem
        img.setAttribute('id', 'foto') // <img id ='foto'>
        if(fsex[0].checked){
            genero ='Homem'
            if(idade >=21 && idade < 65){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')//<img id ='foto' src = 'foto-adulto-m.png'>
            }else if(idade < 21 && idade >= 14){
                //adolecente 
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade < 14){
                //criança
                img.setAttribute('src', 'foto-crianca-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if(fsex[1].checked){
            genero ='Mulher'
            if(idade >=21 && idade < 65){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else if(idade < 21 && idade >= 14){
                //adolecente 
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if(idade < 14){
                //criança
                img.setAttribute('src', 'foto-crianca-f.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//adicionar a imagem ao res (<div id = 'res'>)
    }
    
}

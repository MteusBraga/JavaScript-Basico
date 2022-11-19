function contar(){
    var fini = document.getElementById('txtini')
    var ffim = document.getElementById('txtfim')
    var fstp = document.getElementById('txtstp')
    var fres = document.getElementById('res')
    var texto = ``
    ini = Number(fini.value)
    fim = Number(ffim.value)
    stp = Number(fstp.value)
    for(var i = ini; i < fim; i+=stp){
        texto = texto + `${i} --> `
        if(i+1 >= fim){
            texto = texto + `${i+1} FIM`
      }
        
    }
    res.innerHTML = `${texto}`
}
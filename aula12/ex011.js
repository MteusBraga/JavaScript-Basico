var idade =64
console.log(`Sua idade: ${idade}`)
if(idade < 16){
    console.log(`Nao vota`)
}else if(idade < 18 || idade >= 65){
    console.log(`Voto opcional`)
}else{
    console.log('Voto obrigatorio')
}
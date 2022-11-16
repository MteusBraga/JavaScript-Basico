let num = [5, 8, 2, 9, 3]
num[5] = 6
// push() & pop()
num.push(7)
//returna o tamanho
num.length
console.log(`Nosso vetor é ${num}. tamanho: ${num.length}`)
console.log(`Ordenado: ${num.sort()}`)
//retorna o valor do index
let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor nao foi encontrado')
}else{
    console.log(`O valor 8 está na posicao ${pos}`)
}

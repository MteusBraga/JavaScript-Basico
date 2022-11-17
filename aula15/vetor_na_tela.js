var valores = [8, 1, 7, 4, 2, 9]

/*
for(var i = 0; i < valores.length;i ++){
    console.log(`A posicao ${i} tem o valor ${valores[i]}`)
}
*/

for(var i in valores){
    console.log(`A posicao ${i} tem o valor ${valores[i]}`)
}
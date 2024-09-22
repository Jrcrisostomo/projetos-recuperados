/*
Estrutura de Repetição - LOOP
 - FOR
    1) INICIALIZAÇÂO - Criar uma variável e colocar um valor inicial pra ela
    2) CONDIÇÂO - Enquanto for treu, o laço continuará iterando.
            Ele irá vereficar antes de cada interação
    3) EXPRESSÂO FINAL - O que irá ocorrer a cada vez que o nosso laço der uma volta

    for ([inicialização]; [condição]; expressão final]){
        Seu codigo aqui
    }
*/

const users = ['Maria', 'Aline', 'João']  //lenght(tamanho do array) = 3

for(let i = 0; i < users.length; i++) {
    console.log(users[i])   
}
alert('Seja bem-vindo a calculadora de notas!');

qtdNotas = parseInt(prompt('Digite a quantidade de Notas que compóem a média'));

do {
    let media = 0;
    for (let i = 0; i < qtdNotas; i++) {
        media = media + parseInt(prompt(`Digite ${i+1}º nota`));
    }
    media = media/qtdNotas;
    if(media >=6){
        alert(`Aluno foi aprovado com media final ${media}`);
    }
    else{
        alert(`Aluno foi reprovado com media final ${media}`);
    }
} while (condition);


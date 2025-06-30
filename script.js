alert('Seja bem-vindo a calculadora de notas!');

qtdNotas = parseInt(prompt('Digite a quantidade de Notas que compóem a média'));
if(qtdNotas>0){
    do{
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
    }while(confirm("Do you want to proceed?"));
    alert("Até a proxima :)");
}
else{
    alert("Até a proxima :)");
}



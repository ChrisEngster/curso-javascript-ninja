(function(){
// Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

/*
Crie uma variável chamada `once`, que recebe `false` como seu valor.
Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
loop, mostre no console a mensagem:
'Entrou ao menos uma vez!'
Qual loop você deve usar para que essa mensagem seja mostrada no console?
*/
// ?
do{
    console.log('Entrou ao menos uma vez')
} while (once)
// do while foi usado

/*
Crie um objeto chamado `person`, que receba as seguintes propriedades:
- 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
para o nome, idade, peso e data de nascimento dessa pessoa.
*/
// 
person = {
    name:'Chris',
    age: 20,
    weight: 1.73,
    birthday: '18/11'}
/*
Use um loop para percorrer o objeto criado acima, mostrando no console
a frase:
'The [PROPERTY] of person is [VALUE]'
Aproveite e crie uma variável `counter` que vai contar quantas propriedades
esse objeto tem.
Após o loop, mostre a frase:
'The person has [COUNTER] properties'
*/
// 
person = {
    name:'Chris',
    age: 20,
    weight: 1.73,
    birthday: '18/11/2002'}

    for(var prop in person){
        console.log('The ' + prop  + ' of person is ' + person[prop])
    }

    var counter = prop.length
    console.log('The person has ' + counter + ' properties')

/*
Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
criado acima) é mais velha que a idade passada por parâmetro.
Se verdadeiro, retornar `true`. Senão, retornar false.
Após a função, mostrar a mensagem no console:
'The person has more than 25 years old? [TRUE/FALSE]'
*/
//    
  function moreThan(idade){
        idade = 25

        if(person.age > idade){
            return true
        } else {
            return false
        }
    }

    console.log('The person has more than 25 years old? ' + moreThan())

/*
Faça um loop de 0 a 20, que adicione cada número como um item de um
array chamado `numbers`. Se o contador for maior que 10, saia do loop.
Mostre no console os números no array.
*/
console.log( 'De 0 a 10:' );
// ?
 numbers = []
    for(let i = 0; i <= 20; i++){
        numbers += i
        if(i === 10){
            break
        }
    }
    console.log(numbers)
/*
Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
esses. Se o número for ímpar, pular para o próximo número.
Mostrar no console os números do array.
*/
console.log( 'Pares de 0 a 20:' );
//   
  number1 = []
    for(let i = 0; i <= 20; i++){
        if(i % 2 === 0){
            number1 += i
        }
    }
    console.log(number1)
})()

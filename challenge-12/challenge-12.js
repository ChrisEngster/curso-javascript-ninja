(function() {
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
//  person = {
        name: 'Chris', 
        lastName: 'Engster',
        age: 20
    }
console.log( 'Propriedades de "person":'  + Object.keys(person));

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// 
   console.log(Object.keys(person))
/*
Crie um array vazio chamado `books`.
*/
// books = []

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
    books.push(livro1 = {name: 'A', pages: 15})
    books.push(livro2 = {name:'B', pages: 20})
    books.push(livro3 = {name:'C', pages: 25})
    console.log( '\nLista de livros:' + books)
/*
Mostre no console todos os livros.
*/
// 
    console.log(books)

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
// ?
  console.log(books.pop())
{ name: 'C', pages: 25 }

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
//     console.log(books)
[ { name: 'A', pages: 15 }, { name: 'B', pages: 20 } ]
/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );
  books = JSON.stringify(books)
/*
Mostre os livros nesse formato no console:
*/
// ?
console.log(books)
/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );
  books = JSON.parse(books)

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// 
    for(var i = 0; i < books.length; i++){
        for(var prop in books[i]){
            console.log(prop + ':' + books[i][prop])
        }
    }

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
//     myName = ['C','h','r','i','s']
console.log( '\nMeu nome é:' );
/*
Juntando todos os itens do array, mostre no console seu nome.
*/
//  MyName = myName.join('')
    console.log(myName)

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
//   console.log(myName.reverse().join(''))

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
//   console.log(myName.sort())
})()

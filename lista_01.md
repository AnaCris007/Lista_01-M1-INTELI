
# Questões objetivas
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
**a) A saída será undefined seguido de erro**

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

**Justificativa:** A saída será **undefined seguido de erro**, pois, quando o primeiro console.log acessa a variável x no começo do código, ela existe, mas um valor ainda não foi atribuído a ela, ou seja, seu valor é indefinido. Isso ocorre porque toda variável declarada com var é chamada no começo do código, mas só recebe um valor na linha em que um valor foi atribuído a ela. Depois, a saída será um erro, já que a variável let, por não ser global, não é chamada no começo do código. Assim, o console.log(y) gera um erro, pois o código é lido de cima para baixo e, como y foi declarado usando let na linha seguinte à do console.log, esse comando não consegue acessar essa variável.

**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

**a) Substituir if (a || b === 0) por if (a === 0 || b === 0)**

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

**Justificativa:** O código if (a || b === 0) não faz sentido lógico, pois ele não avalia se a ou b é igual a 0. Ela é interpretada assim if (a || (b === 0)), ou seja, como o operador de igualdade (===) tem prioridade ele é avaliado primeiro. Desse modo, o código verifica se b é igual a 0 e retorna true ou false, dependendo do valor atribuido a b, e só depois ele verifica com o valor de a. Se a não for uma string vazia, 0, null ou undefined, ele será considerado como true e se for alguma das opções citadas ele será considerado como false. Assim as verificações que esse código faz de fato são: if (true || true), if (true|| false) e if (false || false). Se for if (true || true) ou if (true|| false) o código retorna o que está dentro do if, no caso "Erro: número inválido", se for if (false || false) o código retorna o que está dentro do else if, ou seja, a + b. Para verificar corretamente se o valor de a é igual a 0 ou se o valor de b é igual a 0 o correto seria **if (a === 0 || b === 0)**.
______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

**b) O código imprime 200.**

c) O código imprime 50.

d) O código gera um erro.

**Justificativa:** O código imprime **200**, pois, embora o argumento passado para a função tenha sido "eletrônico", que inicialmente define a variável preco como 1000, não há um comando break nesse case. Sem o break, a execução continua até o próximo case, que no caso é o "vestuário", em que a variável preco é redefinida para 200. Depois disso há um break que interrompe a execução do switch e retorna o valor atualizado da variável de preco, que agora é 200.
__
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
a) 0

b) 6

c) 18

**d) 24**

**Justificativa:** A saída no console será **24** pois a função map() mapeia toda a array números e multiplica cada elemento por 2, assim a array números passa a ser [2, 4, 6, 8, 10]. Depois a função filter() filtra dentre os elementos da array números todos aqueles maiores do que 5, assim a lista se transforma em [6, 8, 10]. Por fim, a função reduce() soma todos os elementos da array números e retorna um valor único como resultado, ou seja, ela faz (6+8+10) que é igual a **24**.
______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

**c) ["banana", "abacaxi", "manga", "laranja"]**

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

**Justificativa:** O conteúdo do array lista após a execução do código será  **["banana", "abacaxi", "manga", "laranja"]**, pois o método splice() permite modificar uma lista com a remoção e adição de novos itens. O primeiro parâmetro, no caso o número 1, determina o índice inicial em que se iniciará a remoção de itens da lista. O segundo parâmetro, no caso o número 2, determina quantos itens serão  removidos da lista a partir do índice 2. Por fim, "abacaxi" e "manga" representam os novos itens da lista que serão adicionados no lugar de "maça" e "uva".
______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.

a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.

**b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.**

c) A primeira afirmação é verdadeira, e a, segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

**Justificativa:** Ambas as afirmações estão corretas, pois a herança é utilizada para compartilhar métodos e propriedades entre classes, evitando a repetição de código, e pode ser implementada através da palavra-chave extends. No entanto, a segunda afirmação não justifica a primeira, pois ela apenas menciona um dos mecanismo para implementação de herança em JavaScript, sem explicar por que a herança funciona ou como ela ajuda a eliminar redundâncias no código.

______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```

I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

**a) I e II são verdadeiras.**

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

**Justificativa:** A afirmativa I é verdadeira porque a classe Funcionario foi declarada com extends, o que indica que ela herda os atributos e métodos da classe Pessoa. Além disso, como nome e idade não foram declarados como atributos privados (com #), eles são públicos e podem ser acessados diretamente. A afirmativa II também é verdadeira, pois o método apresentar() da classe Funcionario sobrepõe o método apresentar() da classe Pessoa, já que ambos têm o mesmo nome. No entanto, Funcionario ainda chama o método da classe pai usando super.apresentar(), garantindo que as informações herdadas sejam mantidas. Por fim, a última afirmativa é falsa, pois o JavaScript suporta a herança de classes já que se trata de uma linguagem de programação orientada à objetos.
______

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

**b) A asserção é verdadeira e a razão é falsa.**

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

______

**Justificativa:** A asserção é verdadeira e a razão é falsa, pois o polimorfismo significa que diferentes classes podem ter o mesmo método. Assim, caso haja mais de um método com o mesmo nome em classes diferentes, dependendo do tipo do objeto que chamar o método a resposta obtida será diferente. Segue um exemplo abaixo:
````javascript
class Carro {
  tamanho() {
    console.log("Carros são pequenos");
  }
}

class Onibus {
  tamanho() {
    console.log("Ônibus são grandes");
  }
}

const carro = new Carro();
const onibus = new Onibus();

carro.tamanho();  // Saída: "Carros são pequenos"
onibus.tamanho(); // Saída: "Ônibus são grandes"

````
No exemplo anexado, a classe Onibus e Carro possuem o mesmo método, mas o objeto pertencente a cada classe chama o seu método correspondente. Por outro lado, a razão é falsa, pois o JavaScript não suporta sobrecarga de métodos da mesma forma que outras linguagens. Em JavaScript, se um método com o mesmo nome for definido mais de uma vez dentro da mesma classe, apenas a última definição será considerada. O que o JavaScript suporta é a sobrescrita de métodos (quando uma classe filho redefine um método da classe pai), como ocorre no exemplo.

# Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicando sua solução para cada problema.

```javascript
function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) {
        soma = 2*numeros[i];
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```
**Código corrigido:**
```javascript
let total = 0; // Declaramos uma variável que irá armazenar a soma do dobro de todos os números, pois antes o código não armazenava essa soma corretamente. Iniciamos a variável com o valor 0.
function somaArray(numeros) {

    for (i = 0; i < numeros.length; i++) { //Array não tem a propriedade size em JavaScript então o código não estava comparando corretamente i com o tamahho da lista numeros, para isso, o correto é usar o length que fornece o tamanho de uma lista.
        soma = 2*numeros[i];
        total += soma // Adicionamos o valor do multiplicação de cada item da array numeros para a nossa variável que armazena a soma total
    }
    return total; // Agora, ao invés de retornamos a variável soma que não havia sido declarada fora do escopo da função e por isso dava erro de indefinição no código, nós retornamos a variável total que pode ser acessada pelo return e armazena a soma total do dobro de cada item da array.
}
console.log(somaArray([1, 2, 3, 4])); //A saída agora está correta e será 20 nesse caso (2 + 4 + 6 + 8 = 20).
```
______
10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

**Exemplo prático:**
``` javascript
class Produto {
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    calcularDesconto(){
        console.log(`Esse produto tem um desconto de 10%, o novo preço é: R$${(this.preco*0.9)
        .toFixed(2)}`) // O .toFixed(2) determina que o valor exibido tenha exatamente duas casas decimais após a vírgula, garantindo que o preço seja formatado corretamente.
    }
}

//Nesse contexto, a herança funciona porque a classe Livro é uma extensão da classe Produto que herda dela seus atributos (nome e preco) e seus métodos(calcularDesconto()).
class Livro extends Produto{
    constructor(nome, preco){
        super(nome, preco); // O super serve para chamar o construtor da classe pai, no caso a classe Produto. Isso faz com que a classe Livro tenha acesso as variáveis nome e preco declaradas anteriormente na classe Produto.
        this.preco = preco * 0.8 //Seria possível calcular esse desconto diretamente no console.log, como foi feito na classe Produto, mas aqui eu optei por fazer esse cálculo antes, reatribuindo um novo valor a variável preco que depois será chamada no método calcularDesconto().
    }

    calcularDesconto() { //Aqui nós sobreescrevemos o método calcularDesconto da classe Produto para mostrar o desconto de 20% aplicado, ao invés do de 10%.
        console.log(`Livros têm um desconto de 20%, o novo preço é: R$${this.preco.toFixed(2)}`)
    }
}

// Criando instâncias de teste
const produto1 = new Produto('Cadeira', 100); //A variável produto1 é um novo objeto da classe Produto
produto1.calcularDesconto(); // Saída: Esse produto tem um desconto de 10%, o novo preço é: R$90.00

const livro1 = new Livro('E Não Sobrou Nenhum', 100); //A variável livro1 é um novo objeto da classe Livro
livro1.calcularDesconto(); // Saída: Livros têm um desconto de 20%, o novo preço é: R$80.00
```
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
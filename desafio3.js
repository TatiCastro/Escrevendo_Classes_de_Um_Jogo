const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar que exibe uma mensagem específica conforme o tipo do herói
    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'realizou um ataque básico';
                break;
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Função para capturar dados do usuário e criar uma instância de Heroi
function criarHeroi() {
    readline.question("Digite o nome do herói: ", nome => {
        readline.question("Digite a idade do herói: ", idadeInput => {
            const idade = parseInt(idadeInput, 10);

            readline.question("Digite o tipo do herói (ex: mago, guerreiro, monge, ninja): ", tipo => {
                // Cria uma nova instância de Heroi com os dados fornecidos
                const heroi = new Heroi(nome, idade, tipo);

                // Chama o método atacar para exibir a mensagem de ataque
                heroi.atacar();

                // Fecha o readline
                readline.close();
            });
        });
    });
}

// Executa o programa
criarHeroi();


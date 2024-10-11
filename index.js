class Cliente {
    nome;
    cpf;
    rg;
}


class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            console.log("valor sacado");
        }
    }
}

const contaCorrenteHugo = new ContaCorrente();
contaCorrenteHugo.saldo = 100;

contaCorrenteHugo.sacar(10);

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "hugo";
cliente1.cpf = 12345678911;
cliente1.rg = 98765432111;

cliente2.nome = "ricar";
cliente2.cpf = 11122233344;

console.log(cliente1,"\n",cliente2);
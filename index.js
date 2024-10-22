class Cliente {
    nome;
    cpf;
    rg;
}


class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return this._saldo;
        }
    }
    depositar(valor){
        if(this._saldo < 0) {
            return;
        }
        this._saldo += valor;
    }
}

const contaCorrenteHugo = new ContaCorrente();
contaCorrenteHugo.agencia = 1001;


valorDepositado = contaCorrenteHugo.depositar(150);
valorSacado = contaCorrenteHugo.sacar(10);

console.log(valorSacado);
console.log(contaCorrenteHugo);
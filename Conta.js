import { Cliente } from "./Cliente.js";

export class Conta{
    constructor(saldoinicial, cliente, agencia){
        this._saldo = saldoinicial;
        this._cliente = cliente;
        this._agencia = agencia;
     }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        } 
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        let taxa = 1;
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }
    depositar(valor){
        if(this._saldo < 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    teste(){
        console.log("teste na classe conta");
    }
}
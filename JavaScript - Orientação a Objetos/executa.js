import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Contas/ContaCorrente.js"
import {ContaPoupanca} from "./Contas/ContaPoupanca.js"
import {Conta} from "./Contas/Conta.js";
import { ContaSalario } from "./Contas/ContaSalario.js";




const cliente1 = new ContaCorrente("Ricardo", 12312312309);
const cliente2 = new ContaCorrente("Alice", 42442442409 );
 
const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(100, cliente1,1001);

const contaSalario = new ContaSalario (cliente2);
contaSalario.depositar(100);

console.log(contaSalario);
// const conta = new Conta(100, cliente1,1001)

// console.log(conta);
// console.log(ContaCorrente);














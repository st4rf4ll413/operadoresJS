/* ==========================================================================
   EXERCÍCIO 1: FECHAMENTO DE VENDAS
   
   Uma cafeteria precisa apurar os números do dia.
   
   Dados:
   - Preço do café: 8.50 | Quantidade vendida: 42
   - Preço do bolo: 12.00 | Quantidade vendida: 18
   - Taxa operacional: 15.00
   - Clientes atendidos: 30
   - Total de cookies produzidos: 125 | Capacidade da caixa: 6 unidades

   Fórmulas para os cálculos:
   1. Faturamento Bruto = (preço café * quantidade) + (preço bolo * quantidade)
   2. Faturamento Líquido = faturamento bruto - taxa operacional
   3. Ticket Médio = faturamento bruto / total de clientes atendidos
   4. Sobra de Cookies = resto da divisão entre total de cookies e a capacidade da caixa

   Calcule e exiba os 4 resultados no console.
   ========================================================================== */

   console.log("FECHAMENTO DE VENDAS");

let precoCafe = 8.50;
let vendasCafe = 42;

let precoBolo = 12.00;
let vendasBolo = 18;

const taxaOperacional = 15.00;
let clientesAtendidos = 30;

let totalCookies = 125;
const capacidadeCaixaCookies = 6;

const faturamentoBruto = (precoCafe * vendasCafe) + (precoBolo * vendasBolo);
console.log("Faturamento Bruto: R$",faturamentoBruto);

const faturamentoLiquido = faturamentoBruto - taxaOperacional;
console.log("Faturamento Liquido: R$",faturamentoLiquido);

const ticketMedio = faturamentoBruto / clientesAtendidos;
console.log("Ticket Médio: R$",ticketMedio);

const sobraCookies = totalCookies % capacidadeCaixaCookies;
console.log("Sobra de Cookies:", sobraCookies);

/* ==========================================================================
   EXERCÍCIO 2: VALIDAÇÃO DE CADASTRO E COMPRA
   
   Um sistema precisa validar os dados de um pedido gerando apenas true ou false.
   (Não utilize if/else).

   Dados:
   - Idade informada: 17
   - Código digitado no formulário: "100" (texto)
   - Código registrado no banco: 100 (número)
   - Saldo disponível: 250.00
   - Valor da compra: 250.00

   Regras a verificar e exibir no console:
   1. O cliente atingiu a maioridade civil (18 anos)?
   2. O código digitado confere com o banco considerando apenas o valor?
   3. O código digitado confere com o banco considerando valor e tipo de dado?
   4. O tipo do dado digitado difere do tipo esperado no banco?
   5. O saldo do cliente cobre o valor da compra?
   ========================================================================== */

console.log("VALIDAÇÃO DE CADASTRO E COMPRA");

let idadeInformada = 17;
let codigoFormulario = "100";
let codigoBanco = 100;
let saldoDisponivel = 250.00;
let valorCompra = 250.00;

const maioridadeCivil = idadeInformada >= 18;
console.log("Atingiu Maioridade?",maioridadeCivil);

const codigoValor = codigoFormulario == codigoBanco;
console.log("Confere o valor?",codigoValor);

const codigoValorTipo = codigoFormulario === codigoBanco;
console.log("Confere o valor e tipo?",codigoValorTipo);

console.log("Difere do banco?",!codigoValorTipo);

const saldoCobreValor = saldoDisponivel >= valorCompra;
console.log("Saldo cobre a compra?",saldoCobreValor)

/* ==========================================================================
   EXERCÍCIO 3: CONCESSÃO DE BENEFÍCIOS
   
   Avalie a liberação de benefícios para o cliente gerando apenas true ou false.
   (Não utilize if/else).

   Dados:
   - Valor da compra: 220
   - Cliente é assinante premium: falso
   - Possui cupom promocional: verdadeiro
   - Endereço possui restrição de entrega: falso
   - Cliente é estudante: verdadeiro
   - Idade: 22

   Regras a verificar e exibir no console:
   1. Frete grátis: concedido para compras a partir de 200 reais ou para
      assinantes premium, desde que o endereço não tenha restrição de entrega.
   2. Desconto universitário: concedido para estudantes com até 29 anos de idade.
   3. Acesso à área VIP: liberado para assinantes premium, ou para compras a
      partir de 300 reais que possuam cupom promocional.
   ========================================================================== */

console.log("CONCESSÃO DE BENEFÍCIOS");

let valorDeCompra = 220;
let clientePremium = false;
let possuiCupom = true;
let enderecoComRestricao = false;
let clienteEstudante = true;
let idade = 22;

const freteGratis = (valorDeCompra > 200 || clientePremium) && !enderecoComRestricao;
console.log("Tem frete grátis?",freteGratis);

const descontoUniversitario = clienteEstudante && idade <= 29;
console.log("Tem desconto universitário?", descontoUniversitario);

const acessoVip = clientePremium === true || (valorDeCompra > 300 && possuiCupom);
console.log("Tem acesso VIP?",acessoVip);
import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";
import { EstoqueVeiculos } from "./classes/EstoqueVeiculos";
import { Veiculo } from "./interface/Veiculo";
import {
  filtrarPorAno,
  filtrarPorMarca,
  filtrarPorModelo,
} from "./utils/FiltroVeiculos";
import { gerarRelatorio } from "./utils/RelatorioVeiculos";
const meuCarro: Carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  quantidadePortas: 4,
  acelerar: () => "O carro está acelerando!",
};
const minhaMoto: Moto = {
  marca: "Honda",
  modelo: "CB 500",
  ano: 2021,
  cilindradas: 500,
  acelerar: () => "A moto está acelerando!",
};
console.log("Carro:", meuCarro);
console.log(meuCarro.acelerar());
console.log("Moto:", minhaMoto);
console.log(minhaMoto.acelerar());

// Criando instâncias do GerenciadorVeiculos para carros e motos
const gerenciadorCarros = new GerenciadorVeiculos<Carro>();
const gerenciadorMotos = new GerenciadorVeiculos<Moto>();
// Adicionando um carro e uma moto ao gerenciador
gerenciadorCarros.adicionar({
  modelo: "Civic",
  ano: 2020,
  marca: "Honda",
  quantidadePortas: 4,
  acelerar: () => "O carro está acelerando!",
});
gerenciadorMotos.adicionar({
  modelo: "CB 500",
  ano: 2021,
  marca: "Honda",
  cilindradas: 500,
  acelerar: () => "A moto está acelerando!",
});
// Listando os veículos cadastrados
console.log("Lista de Carros:", gerenciadorCarros.listarVeiculos());
console.log("Lista de Motos:", gerenciadorMotos.listarVeiculos());
// Removendo um carro da lista
gerenciadorCarros.remover("Civic");
// Exibindo a lista após remoção
console.log("Após remoção:", gerenciadorCarros.listarVeiculos());

const estoque = new EstoqueVeiculos();
// Adicionando veículos ao estoque
estoque.adicionarEstoque("Civic", 5);
estoque.adicionarEstoque("CB 500", 2);
// Consultando estoque de "Civic"
console.log("Estoque após adição:", estoque.consultarEstoque("Civic"));
// Removendo 3 unidades de "Civic"
estoque.removerEstoque("Civic", 3);
// Consultando estoque de "Civic" novamente
console.log("Estoque após remoção:", estoque.consultarEstoque("Civic"));

// Criando uma lista de veículos, que são objetos com propriedades como modelo, ano e marca
const veiculos: Veiculo[] = [
  { modelo: "Civic", ano: 2020, marca: "Honda", acelerar: () => "" },
  { modelo: "Corolla", ano: 2021, marca: "Toyota", acelerar: () => "" },
  { modelo: "CB 500", ano: 2022, marca: "Honda", acelerar: () => "" },
];
// Filtrando os veículos do ano de 2021 e exibindo o resultado
console.log("Veículos de 2021:", filtrarPorAno(veiculos, 2021));
// Filtrando os veículos da marca "Honda" e exibindo o resultado
console.log("Veículos da marca Honda:", filtrarPorMarca(veiculos, "Honda"));
// Filtrando os veículos pelo modelo "Civic" e exibindo o resultado
console.log("Veículo modelo Civic:", filtrarPorModelo(veiculos, "Civic"));

// Importando a função de gerar relatório para utilizá-la no código

// Criando uma lista de veículos, com informações de modelo, ano e marca
const veiculo: Veiculo[] = [
  { modelo: "Civic", ano: 2020, marca: "Honda", acelerar: () => "" },
  { modelo: "Corolla", ano: 2021, marca: "Toyota", acelerar: () => "" },
  { modelo: "CB 500", ano: 2022, marca: "Honda", acelerar: () => "" },
];
// Gerando e exibindo o relatório de veículos
console.log("Relatório de Veículos:\n", gerarRelatorio(veiculo));

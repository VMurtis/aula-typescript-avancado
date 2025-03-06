
import { Veiculo } from "../interface/Veiculo";

export function gerarRelatorio(veiculos: Veiculo[]): string {

    if (veiculos.length === 0) {
        return "Nenhum veículo cadastrado."; 
    }

    return veiculos
        .map(v => `Modelo: ${v.modelo} | Ano: ${v.ano} | Marca: ${v.marca}`) 
        .join("\n"); 
}
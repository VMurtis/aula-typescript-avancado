import { Veiculo } from "../interface/Veiculo";
export class GerenciadorVeiculos<T extends Veiculo> {
  veiculo: T[] = [];

  adicionar(veiculo: T): void {
    this.veiculo.push(veiculo);
  }

  remover(index: number, item: T): boolean {
    if (index >= 0 && index < this.veiculo.length) {
      this.veiculo[index] = item;
      return true;
    }
    return false;
  }

  listarVeiculos(): T[] {
    return this.veiculo;
  }
}

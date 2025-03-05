export class EstoqueVeiculos {
  private estoque: { modelo: string; quantidade: number }[] = [];

  adicionarEstoque(modelo: string, quantidade: number): void {
    const item = this.estoque.find((v) => v.modelo === modelo);
    if (item) {
      item.quantidade += quantidade;
    } else {
      this.estoque.push({ modelo, quantidade });
    }
  }

  removerEstoque(modelo: string, quantidade: number): void {
    const item = this.estoque.find((v) => v.modelo === modelo);
    if (item) {
      item.quantidade -= quantidade;
      if (item.quantidade <= 0) {
        this.estoque = this.estoque.filter((v) => v.modelo !== modelo);
      }
    }
  }
  consultarEstoque(modelo: string): number {
    const item = this.estoque.find((v) => v.modelo === modelo);
    return item ? item.quantidade : 0;
  }
}

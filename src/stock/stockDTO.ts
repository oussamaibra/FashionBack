export class StockByColor {
  quantiteInitiale: number;
  quantiteVendue: number;
  quantitePerdue: number;
  sizes: string;
  color: string;
  images: string;
}
export class StockDTO {
  nom: string;
  reference: string;
  prixAchat: number;
  prixVente: number;
  options: StockByColor[];
}

export interface Article {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  rating: number;
  categoria: Category;
  fav?: boolean;
}

export type Category = 'Computadoras' | 'Accesorios' | 'Electrónica';

export interface CartItem {
  id: number;
  titulo: string;
  imagen: string;
  precio: number;
  cantidad: number;
}

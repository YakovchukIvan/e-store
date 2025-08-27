export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

export interface RouteParams extends Record<string, string | undefined> {
  categoryId: string;
}

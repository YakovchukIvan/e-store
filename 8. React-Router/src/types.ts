export interface Category {
  id: string;
  name: string;
  img: string;
}

export interface Product {
  id: number;
  categoryId: Category['id']; // посилання на id з Category
  name: string;
  price: number;
  img: string;
}

export interface RouteParams extends Record<string, string | undefined> {
  categoryId: string;
}

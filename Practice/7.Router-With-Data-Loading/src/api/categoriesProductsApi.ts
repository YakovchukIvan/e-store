import { LoaderFunctionArgs } from 'react-router-dom';
import { Category, Product } from '../types/types';

const API_CATEGORIES = 'http://localhost:9000/categories';
const API_PRODUCTS = 'http://localhost:9000/products';

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch(API_CATEGORIES);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json() as Promise<Category[]>;
};

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(API_PRODUCTS);
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();
  return data;
};

export const productDetailsLoader = async ({ params }: LoaderFunctionArgs): Promise<Product> => {
  const { productId } = params;
  const res = await fetch(`${API_PRODUCTS}/${productId}`);

  if (!res.ok) throw new Error('Failed to fetch product');

  return res.json();
};

import axios from 'axios';
import { CategoriesResponseSchema, type Category } from '~/schemas/category';

const api = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

export async function getCategories(): Promise<Category[]> {
  const response = await api.get('/categories');

  const validated = CategoriesResponseSchema.parse(response.data);
  return validated.data;
}

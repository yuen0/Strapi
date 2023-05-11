import { Mobile } from '@interfaces/mobiles.interface';
import api from '@/utils/api';
import { AxiosResponse } from 'axios';

const collection = '/mobiles';

export const getAll = async (): Promise<Mobile[]> => {
  const response: AxiosResponse<Mobile[]> = await api.get(`${collection}`);
  console.log('Getting all', response.data);
  return response.data;
};

export const getById = async (id: number): Promise<Mobile> => {
  const response: AxiosResponse<Mobile> = await api.get(`${collection}/${id}`);
  console.log('Getting By Id', response.data);
  return response.data;
};

export const postProduct = async (data: Mobile): Promise<Mobile> => {
  const response: AxiosResponse<Mobile> = await api.post(`${collection}`, data);
  console.log('Post Product', response.data);
  return response.data;
};

export const updateProduct = async (id: number, data: Mobile): Promise<Mobile> => {
  const response: AxiosResponse<Mobile> = await api.put(`${collection}/${id}`, data);
  console.log('Update Product', response.data);
  return response.data;
};

export const deleteProduct = async (id: number): Promise<Mobile> => {
  const response: AxiosResponse<Mobile> = await api.delete(`${collection}/${id}`);
  console.log('Deleting By Id', response.data);
  return response.data;
};

// const mobileModel: Mobile[] = [
//   { id: 1, name: '6 inch Iphone 1', description: 'This product is from Apple', manufacturer: 'Apple', price: 300.5, screen_type: 'MD' },
//   { id: 2, name: '6 inch Iphone 2', description: 'This product is from Apple', manufacturer: 'Apple', price: 300.5, screen_type: 'MD' },
//   { id: 3, name: '6 inch Iphone 3', description: 'This product is from Apple', manufacturer: 'Apple', price: 300.5, screen_type: 'MD' },
//   { id: 4, name: '6 inch Iphone 4', description: 'This product is from Apple', manufacturer: 'Apple', price: 300.5, screen_type: 'MD' },
// ];

// export default mobileModel;

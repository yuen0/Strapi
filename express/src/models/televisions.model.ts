import { Television } from '@interfaces/televisions.interface';
import api from '@/utils/api';
import { AxiosResponse } from 'axios';

const collection = '/televisions';

export const getAll = async (): Promise<Television[]> => {
  const response: AxiosResponse<Television[]> = await api.get(`${collection}`);
  console.log('Getting all', response.data);
  return response.data;
};

export const getById = async (id: number): Promise<Television> => {
  const response: AxiosResponse<Television> = await api.get(`${collection}/${id}`);
  console.log('Getting By Id', response.data);
  return response.data;
};

export const postProduct = async (data: Television): Promise<Television> => {
  const response: AxiosResponse<Television> = await api.post(`${collection}`, data);
  console.log('Post Product', response.data);
  return response.data;
};

export const updateProduct = async (id: number, data: Television): Promise<Television> => {
  const response: AxiosResponse<Television> = await api.put(`${collection}/${id}`, data);
  console.log('Update Product', response.data);
  return response.data;
};

export const deleteProduct = async (id: number): Promise<Television> => {
  const response: AxiosResponse<Television> = await api.delete(`${collection}/${id}`);
  console.log('Deleting By Id', response.data);
  return response.data;
};

// const televisionModel: Television[] = [
//   { id: 1, name: '32 inch TV 1', description: 'This product is from Apple', manufacturer: 'Apple', price: 300.5, screen_size: 13.5 },
//   { id: 2, name: '32 inch TV 2', description: 'This product is from Apple', manufacturer: 'Apple', price: 300.5, screen_size: 13.5 },
//   { id: 3, name: '32 inch TV 3', description: 'This product is from Apple', manufacturer: 'Apple', price: 300.5, screen_size: 13.5 },
//   { id: 4, name: '32 inch TV 4', description: 'This product is from Apple', manufacturer: 'Apple', price: 300.5, screen_size: 13.5 },
// ];

// export default televisionModel;

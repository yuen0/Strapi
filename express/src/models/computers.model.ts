import { Computer } from '@interfaces/computers.interface';
import api from '@/utils/api';
import { AxiosResponse } from 'axios';

const collection = '/computers';

export const getAll = async (): Promise<Computer[]> => {
  const response: AxiosResponse<Computer[]> = await api.get(`${collection}`);
  console.log('Getting all', response.data);
  return response.data;
};

export const getById = async (id: number): Promise<Computer> => {
  const response: AxiosResponse<Computer> = await api.get(`${collection}/${id}`);
  console.log('Getting By Id', response.data);
  return response.data;
};

export const postProduct = async (data: Computer): Promise<Computer> => {
  const response: AxiosResponse<Computer> = await api.post(`${collection}`, data);
  console.log('Post Product', response.data);
  return response.data;
};

export const updateProduct = async (id: number, data: Computer): Promise<Computer> => {
  const response: AxiosResponse<Computer> = await api.put(`${collection}/${id}`, data);
  console.log('Update Product', response.data);
  return response.data;
};

export const deleteProduct = async (id: number): Promise<Computer> => {
  const response: AxiosResponse<Computer> = await api.delete(`${collection}/${id}`);
  console.log('Deleting By Id', response.data);
  return response.data;
};

// const computerModel: Computer[] = [
//   { id: 1, name: '12 inch Macbook 1', description: 'This product is from Apple', manufacturer: 'Apple', price: 300.5, processor: 'MD' },
//   { id: 2, name: '12 inch Macbook 2', description: 'This product is from Apple', manufacturer: 'Apple', price: 300.5, processor: 'MD' },
//   { id: 3, name: '12 inch Macbook 3', description: 'This product is from Apple', manufacturer: 'Apple', price: 300.5, processor: 'MD' },
//   { id: 4, name: '12 inch Macbook 4', description: 'This product is from Apple', manufacturer: 'Apple', price: 300.5, processor: 'MD' },
// ];

// export default computerModel;

import { AudioSystem } from '@interfaces/audioSystems.interface';
import api from '@/utils/api';
import { AxiosResponse } from 'axios';

const collection = '/audio-systems';

export const getAll = async (): Promise<AudioSystem[]> => {
  const response: AxiosResponse<AudioSystem[]> = await api.get(`${collection}`);
  console.log('Getting all', response.data);
  return response.data;
};

export const getById = async (id: number): Promise<AudioSystem> => {
  const response: AxiosResponse<AudioSystem> = await api.get(`${collection}/${id}`);
  console.log('Getting By Id', response.data);
  return response.data;
};

export const postProduct = async (data: AudioSystem): Promise<AudioSystem> => {
  const response: AxiosResponse<AudioSystem> = await api.post(`${collection}`, data);
  console.log('Post Product', response.data);
  return response.data;
};

export const updateProduct = async (id: number, data: AudioSystem): Promise<AudioSystem> => {
  const response: AxiosResponse<AudioSystem> = await api.put(`${collection}/${id}`, data);
  console.log('Update Product', response.data);
  return response.data;
};

export const deleteProduct = async (id: number): Promise<AudioSystem> => {
  const response: AxiosResponse<AudioSystem> = await api.delete(`${collection}/${id}`);
  console.log('Deleting By Id', response.data);
  return response.data;
};

// const audioSystemModel: AudioSystem[] = [
//   { id: 1, name: 'HeadPhone 1', description: 'This product is from Apple', manufacturer: 'Apple', price: 300.5, effect: 3000 },
//   { id: 2, name: 'HeadPhone 2', description: 'This product is from Apple', manufacturer: 'Apple', price: 300.5, effect: 3000 },
//   { id: 3, name: 'HeadPhone 3', description: 'This product is from Apple', manufacturer: 'Apple', price: 300.5, effect: 3000 },
//   { id: 4, name: 'HeadPhone 4', description: 'This product is from Apple', manufacturer: 'Apple', price: 300.5, effect: 3000 },
// ];

// export default audioSystemModel;

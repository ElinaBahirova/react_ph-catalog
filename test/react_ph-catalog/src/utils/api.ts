import { Product } from "../types/Product";

const BASE_URL = 'https://mate-academy.github.io/react_phone-catalog/api';

const request = (url: string) => {
  return fetch(BASE_URL + url)
    .then(response => {
      return response.ok
        ? response.json()
        : Promise.reject(new Error('error'));
    });
};

export const getAllDevice = () => request('/products.json');

export const getAllPhones = () => {
  return request('/products.json')
    .then(result => (
      result.filter((device: Product) => device.type === 'phone')
    ));
};

export const getAllTablets = () => {
  return request('/products.json')
    .then(result => (
      result.filter((device: Product) => device.type === 'tablet')
    ));
};

export const getDevice = (deviceId: string) => request(`/products/${deviceId}.json`);
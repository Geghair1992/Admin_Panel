import api from './index'

export const getProducts = () => api('products','GET',null)
export const addProduct = (product:Object) => api ('products','POST',product)
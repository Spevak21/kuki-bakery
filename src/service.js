import axios from 'axios';

export const getAllUsers = () => axios.get(`https://my-kuki-server.herokuapp.com/users`);
export const getUserById = (id) => axios.get(`https://my-kuki-server.herokuapp.com/users/${id}`);
export const postUser = (user) => axios.post(`https://my-kuki-server.herokuapp.com/users`, user);

export const getAllPackagings = () => axios.get(`https://my-kuki-server.herokuapp.com/packagings`);

export const postMessage = (name, email, message) => axios.post(`https://my-kuki-server.herokuapp.com/messages`, {name, email, message});

export const getAllProducts = () => axios.get(`https://my-kuki-server.herokuapp.com/products`);

export const updateUser = (userId, user) => axios.put(`https://my-kuki-server.herokuapp.com/users/${userId}`, user);
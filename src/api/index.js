import axios from 'axios';


const API = axios.create({ baseURL: 'http://localhost:5000'});

export const fetchRooms = () => API.get('/rooms');

export const googlelogin = (idToken) => API.post('/googlelogin', { idToken});

export const login = (tockenid) => API.post('/login');
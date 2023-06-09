import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact({ name, number }) {
  const { data } = await axios.post('/contacts', { name, number });
  return data;
}

export async function deleteContact(contactId) {
  const { data } = axios.delete(`/contacts/${contactId}`);
  return data;
}

export async function updateContact(contactId) {
  const { data } = axios.patch(`/contacts/${contactId}`);
  return data;
}

export async function signUp(credentials) {
  const { data } = await axios.post('/users/register', credentials);
  setAuthHeader(data.token);
  return data;
}

export async function signIn(credentials) {
  const { data } = await axios.post('/users/login', credentials);
  setAuthHeader(data.token);
  return data;
}

export async function signOut() {
  await axios.post('/users/logout');
  clearAuthHeader();
}

export async function refreshUser(token) {
  setAuthHeader(token);
  const { data } = await axios.get('/users/current');
  return data;
}

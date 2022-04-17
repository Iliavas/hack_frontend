import axios from 'axios';

const ORIGIN = "";

export async function get(path: string) {
  return (await axios.get(ORIGIN+path)).data;
}

export async function post(path: string, data: any) {
  return (await axios.post(ORIGIN+path, data)).data;
}

export async function put(path: string, data: any) {
  return (await axios.put(ORIGIN+path, data)).data;
}
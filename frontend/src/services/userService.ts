import api from "./api";

interface User {
  email: string;
  username: string;
  password: string;
}

interface Error {
  response: {
    data: {
      message: string
    }
  }
}

const create = async ({ email, username, password }: User): Promise<any> => {
  try {
    const { data } = await api.post('/user/create', { email, username, password });
    return data;
    
  } catch (error) {
    return new Error((error as Error).response.data.message || 'teste');
  }
};

export const UserServices = { create }
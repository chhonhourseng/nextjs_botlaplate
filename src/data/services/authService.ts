import { IAuthLogin } from '@/data/types/auth';
import { AxiosInstance } from '@/utils/servies/Axios';
import { ApiResponse } from '@/data/types/types';
import IToken from '@/data/types/token';
import { IUser } from '@/data/types/user';

export default class AuthService {
  async login(d: IAuthLogin): Promise<ApiResponse<IToken>> {
    return AxiosInstance.post('/system-user/auth/login', d);
  }

  async getProfile(): Promise<ApiResponse<IUser>> {
    return AxiosInstance.get('/system-user/auth/profile');
  }
}
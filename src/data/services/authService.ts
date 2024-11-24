import { IAuth, IAuthLogin } from '@/data/types/auth';
import { AxiosInstance } from '@/utils/servies/Axios';
import { ApiResponse } from '@/data/types/types';

export default class AuthService {
  async login(d: IAuthLogin): Promise<ApiResponse<IAuth>> {
    return AxiosInstance.post('/auth/login', d);
  }
}
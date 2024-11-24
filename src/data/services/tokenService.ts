import { AxiosInstance } from '@/utils/servies/Axios';
import { AxiosResponse } from 'axios';
import { getCookie } from 'cookies-next';
import IToken from '@/data/types/token';
import { ApiResponse } from '@/data/types/types';

export default class TokenService {
  async refreshToken(): Promise<ApiResponse<IToken>> {
    return AxiosInstance.post('/api/v1/auth/refresh-token', {
      'refreshToken': getCookie('refreshToken'),
    });
  }
}
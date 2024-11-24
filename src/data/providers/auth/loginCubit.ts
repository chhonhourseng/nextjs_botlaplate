import BaseRequestCubit from '@/utils/helper/cubit/baseRequestCubit';
import { IAuth, IAuthLogin } from '@/data/types/auth';
import AuthService from '@/data/services/authService';
import { ApiResponse } from '@/data/types/types';

export default class LoginCubit extends BaseRequestCubit<IAuth, IAuthLogin> {
  private service: AuthService = new AuthService();

  response(d?: IAuthLogin | undefined): Promise<ApiResponse<IAuth>> {
    return this.service.login(d!);
  }
}


import BaseRequestCubit from '@/utils/helper/cubit/baseRequestCubit';
import { IAuthLogin } from '@/data/types/auth';
import AuthService from '@/data/services/authService';
import { ApiResponse } from '@/data/types/types';
import IToken from '@/data/types/token';
import { app } from '@/constant/general';
import T from '@/translate';

export default class LoginCubit extends BaseRequestCubit<IToken, IAuthLogin> {
  private service: AuthService = new AuthService();

  async response(d?: IAuthLogin | undefined): Promise<ApiResponse<IToken>> {
    try {
      const v = await this.service.login(d!);
      app.setToken = v.data;
      app.setting.change({isLogin: true});
      const user = await this.service.getProfile();
      app.setUser = user.data;
      return v;
    } catch (_) {
      app.deleteCookie();
      throw _;
    }
  }
}


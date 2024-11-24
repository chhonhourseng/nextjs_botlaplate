import BaseRequestCubit from '@/utils/helper/cubit/baseRequestCubit';
import { ApiResponse } from '@/data/types/types';
import UserService from '@/data/services/userService';
import { IUser } from '@/data/types/user';

export default class UserCubit extends BaseRequestCubit<any, IUser> {
  private service: UserService = new UserService();

  response(d?: any | undefined): Promise<ApiResponse<IUser>> {
    return this.service.method(d!);
  }
}


import { AxiosInstance } from '@/utils/servies/Axios';
import { ApiResponse, IFilter } from '@/data/types/types';
import { IUser } from '@/data/types/user';

export default class UserService {
  async method(d: IFilter): Promise<ApiResponse<IUser>> {
    return AxiosInstance.get('', {
      params: d,
    });
  }
}
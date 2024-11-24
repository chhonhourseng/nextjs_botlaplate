import { AxiosInstance } from '@/utils/servies/Axios';
import { ApiResponse } from '@/data/types/types';
import { I{{name.pascalCase()}}, I{{name.pascalCase()}}Request } from '@/data/types/{{name.camelCase()}}';

export default class {{name.pascalCase()}}Service {
  async method(d: I{{name.pascalCase()}}Request): Promise<ApiResponse<I{{name.pascalCase()}}>> {
    return AxiosInstance.post('', d);
  }
}
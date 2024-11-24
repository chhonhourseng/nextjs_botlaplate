import BaseRequestCubit from '@/utils/helper/cubit/baseRequestCubit';
import { ApiResponse } from '@/data/types/types';
import {{feature.pascalCase()}}Service from '@/data/services/{{feature.camelCase()}}Service';

export interface I{{name.pascalCase()}} {
  id: string;
}

export interface I{{name.pascalCase()}}Request {
  id: string;
}

export default class {{name.pascalCase()}}Cubit extends BaseRequestCubit<I{{name.pascalCase()}}Request, I{{name.pascalCase()}}> {
  private service: {{feature.pascalCase()}}Service = new {{feature.pascalCase()}}Service();

  response(d?: I{{name.pascalCase()}}Request | undefined): Promise<ApiResponse<I{{name.pascalCase()}}>> {
    return this.service.method(d!);
  }
}


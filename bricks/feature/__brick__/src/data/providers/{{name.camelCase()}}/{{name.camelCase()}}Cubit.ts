import BaseRequestCubit from '@/utils/helper/cubit/baseRequestCubit';
import { ApiResponse } from '@/data/types/types';
import {{name.pascalCase()}}Service from '@/data/services/{{name.camelCase()}}Service';
import { I{{name.pascalCase()}}, I{{name.pascalCase()}}Request } from '@/data/types/{{name.camelCase()}}';

export default class {{name.pascalCase()}}Cubit extends BaseRequestCubit<I{{name.pascalCase()}}Request, I{{name.pascalCase()}}> {
  private service: {{name.pascalCase()}}Service = new {{name.pascalCase()}}Service();

  response(d?: I{{name.pascalCase()}}Request | undefined): Promise<ApiResponse<I{{name.pascalCase()}}>> {
    return this.service.method(d!);
  }
}


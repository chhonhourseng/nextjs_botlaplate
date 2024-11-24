import BaseRequestCubit from '@/utils/helper/cubit/baseRequestCubit';
import { ApiResponse } from '@/data/types/types';

export default class {{name.pascalCase()}}Cubit extends BaseRequestCubit<{}, {}> {
  private service: {{name.pascalCase()}}Service = new {{name.pascalCase()}}Service();

  response(d?: {} | undefined): Promise<ApiResponse<{}>> {
    return this.service.method(d!);
  }
}


import { AxiosError, AxiosResponse } from 'axios';
import T from '@/translate';
import { kDebugMode } from '@/constant/general';

export default class AxiosHelper {
  static response(v?: AxiosResponse): AxiosResponse {
    if (v === undefined || v === null) {
      throw T.somethingWentWrong.s;
    }
    if (v.status >= 200 && v.status < 300) {
      return v.data;
    } else {
      let message: string;
      try {
        message = v.data.data.message;
      } catch (e) {
        message = T.somethingWentWrong.s;
      }
      throw message;
    }
  }

  static error(v: any): string {
    if (v instanceof AxiosError) {
      if(kDebugMode){}
      if (v.code === 'ECONNABORTED') {
        return T.websiteIsUnderMaintenance.s;
      }
/*      let message: string;
      try {
        message = v.message;
      } catch (e) {
        message = T.somethingWentWrong.s;
      }
      return message;*/
    }
    return T.somethingWentWrong.s;
  }
}
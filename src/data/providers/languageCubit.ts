import { Cubit } from 'blac';
import { getCookie, setCookie } from 'cookies-next';
import SettingSingleton from '@/constant/settingSingleton';
import { app } from '@/constant/general';
import Constant from '@/constant/constant';

export default class LanguageCubit extends Cubit<string> {
  static keepAlive = true;

  constructor() {
    super(app.defaultLang);
  }

  change = (v: string) => {
    setCookie(Constant.lang, v);
    app.setting.change(
      { lang: v },
    );
    this.emit(v);
  };

  init = (): void => {
    let v = app.getLang;
    this.change(v ?? Constant.lang);
  };

}
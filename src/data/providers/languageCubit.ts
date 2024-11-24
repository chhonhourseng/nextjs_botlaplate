import { Cubit } from 'blac';
import { getCookie, setCookie } from 'cookies-next';
import SettingSingleton from '@/constant/settingSingleton';

export default class LanguageCubit extends Cubit<string> {
  static keepAlive = true;

  constructor() {
    super('en-US');
  }


  change = (v: string) => {
    setCookie('lang', v);
    const s: SettingSingleton = SettingSingleton.getInstance();
    s.change(
      { lang: v },
    );
    this.emit(v);
  };

  init = (): void => {
    let v = getCookie('lang');
    this.change(v ?? 'en-US');
  };

}
import { app } from '@/constant/general';

interface ISettingSingleton {
  lang?: string;
  isLogin: boolean;
  isRefreshToken?: boolean;
}

class SettingSingleton {
  private static instance: SettingSingleton;
  public i: ISettingSingleton;

  private constructor(v: ISettingSingleton) {
    this.i = v;
  }

  public static getInstance(): SettingSingleton {
    if (!SettingSingleton.instance) {
      SettingSingleton.instance = new SettingSingleton({
        lang: app.defaultLang,
        isRefreshToken: false,
        isLogin: false,
      });
    }
    return SettingSingleton.instance;
  }

  public change(v: Partial<ISettingSingleton>): void {
    this.i = Object.assign({}, this.i, v);
  }

}

export default SettingSingleton;
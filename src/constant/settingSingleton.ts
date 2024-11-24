interface ISettingSingleton {
  lang?: string;
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
        lang: 'en-US',
        isRefreshToken: false,
      });
    }
    return SettingSingleton.instance;
  }

  public change(v: ISettingSingleton): void {
    this.i = Object.assign({}, this.i, v);
  }

}

export default SettingSingleton;
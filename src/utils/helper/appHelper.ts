import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import Constant from '@/constant/constant';
import IToken from '@/data/types/token';
import { IUser } from '@/data/types/user';
import moment from 'moment/moment';
import { formatNumber } from 'number-format-helper';
import SettingSingleton from '@/constant/settingSingleton';

export default class AppHelper {

  limit: number = 30;
  defaultLang: string = 'en-US';
  defaultCurrency: string = '$';
  sampleList: string[]= ['1', '2', '3', '4', '4', '5', '5', '6', '7', '8', '9', '10']

  dateFilter(dateString?: Date): string | null {
    if (!dateString) return null;
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  dateTime(v?: Date): string | null {
    if (!v) return null;
    const d = moment(v, true);
    return d.format('DD.MM.YYYY hh:mm:ss');
  }


  number(v?: number): string | null | number {
    if (!v) return null;
    return formatNumber(v);
  }

  get setting(): SettingSingleton {
    return SettingSingleton.getInstance();
  }

  get isLogin(): boolean {
    return this.getAccessToken != null;
  }

  get getAccessToken(): string | undefined {
    return getCookie(Constant.accessToken);
  }

  get getLang(): string | undefined {
    return getCookie(Constant.lang);
  }

  get getLangApi(): string | undefined {
    if (this.getLang) {
      const v = this.getLang.split('-');
      return v[0];
    }
    return undefined;
  }


  get getRefreshToken(): string | undefined {
    return getCookie(Constant.refreshToken);
  }

  get getUser(): IUser {
    const data = getCookie(Constant.profile);
    return JSON.parse(data!) as IUser;
  }

  set setUser(d: IUser) {
    setCookie(Constant.profile, JSON.stringify(d), {
      maxAge: 7 * 60 * 60 * 24,
    });
  }

  set setToken(d: IToken) {
    setCookie(Constant.accessToken, d.access_token, {
      maxAge: 7 * 60 * 60 * 24,
    });
    setCookie(Constant.refreshToken, d.refresh_token, {
      maxAge: 7 * 60 * 60 * 24,
    });
  }

  deleteCookie(): void {
    deleteCookie(Constant.accessToken);
    deleteCookie(Constant.refreshToken);
    deleteCookie(Constant.data);
  }

  logOut(): void {
    this.deleteCookie();
    window.location.href = '/login';
  }

  toPascalCase(input: string): string {
    // Split the input string by non-alphanumeric characters
    const words = input.split(/[^a-zA-Z0-9]/);

    // Capitalize the first letter of each word and join them together
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
  }

   snakeCaseToWords(str: string): string {
    return str
      .split('_')
      .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }


  toCamelCase(input: string, v?: {
    isNoLowerCase: boolean,
  }): string {
    input = this.snakeCaseToWords(input);
    let maxLength: number = 30;
    // Remove all symbols except letters and numbers
    const cleanString = input.replace(/[^a-zA-Z0-9 ]/g, '');

    // Split the cleaned string by spaces
    const words = cleanString.split(/\s+/);
    // Capitalize each word except the first one
    const text: string = words.map((word, index) => {
      if (index === 0) {
        return v?.isNoLowerCase ? word : word.toLowerCase(); // Lowercase the first word
      } else {
        return word.charAt(0).toUpperCase() + (v?.isNoLowerCase ? word.slice(1) : word.slice(1).toLowerCase());
      }
    }).join('');

    // Remove leading and trailing whitespaces and convert to camel case
    const trimmedCamelCase = text.trim().replace(/\s+(.)/g, ($0, $1) => $1.toUpperCase());

    // Ensure the final string does not exceed the maximum length
    return trimmedCamelCase.length > maxLength ? trimmedCamelCase.slice(0, maxLength) : trimmedCamelCase;
  }
}
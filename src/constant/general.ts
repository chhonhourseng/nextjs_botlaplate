import AppHelper from '@/utils/helper/appHelper';

export const app = new AppHelper();

export const kDebugMode: boolean = process.env.NODE_ENV !== 'production';

'use client';

import axios from 'axios';
import AxiosHelper from '@/utils/helper/axiosHelper';
import SettingSingleton from '@/constant/settingSingleton';
import TokenService from '@/data/services/tokenService';
import IToken from '@/data/types/token';
import { app } from '@/constant/general';
import { ApiResponse } from '@/data/types/types';
import Constant from '@/constant/constant';

export const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + '/api/v1',
  timeout: 15000, // Default request timeout in milliseconds (15 seconds)
  headers: {
    //'Content-Type': 'application/json',
  },
});

AxiosInstance.interceptors.request.use(function(config) {
  //config.headers['Content-Type'] = 'application/json';
  if(app.isLogin) config.headers['Authorization'] = 'Bearer ' + app.getAccessToken;
  if(app.getLang) config.headers[Constant.lang] = app.getLangApi;
  //config.headers['lang'] = 'en';
  return config;
}, function(error) {
  // Do something with request error
  throw AxiosHelper.error(error);
});


AxiosInstance.interceptors.response.use(function(response) {
  return AxiosHelper.response(response);
}, async function(error) {
  const originalRequest = error.config;
  const settingSingleton: SettingSingleton = SettingSingleton.getInstance();

  if ((error?.config?.url + '').includes('login')) {
    throw AxiosHelper.error(error);
  }

  if (app.isLogin && !settingSingleton.i.isRefreshToken && error.response && error.response.status === 401 && !originalRequest._retry && (!(error.config.url + '').includes('refresh-token'))) {
    originalRequest._retry = true;
    settingSingleton.change({
      isRefreshToken: true,
    });
    try {
      const service: TokenService = new TokenService();
      const token: ApiResponse<IToken> = await service.refreshToken();

      AxiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token.data.access_token;
      app.setToken = token.data;

      settingSingleton.change({
        isRefreshToken: false,
      });
      return AxiosInstance(originalRequest);
    } catch (e) {
      app.logOut();
      settingSingleton.change({
        isRefreshToken: false,
      });
      throw AxiosHelper.error(error);
    }
  }

  throw AxiosHelper.error(error);
});
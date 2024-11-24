import { AxiosResponse } from 'axios';
import { IPaginationMetaData } from '@/data/types/pagination';

export type ApiResponse<K> = BaseResponse<K>;

export default interface BaseResponse<K> extends IPaginationMetaData {
  status_code: number;
  data: K;
  message: string;
}

export interface IFilter {
  page: number,
  q?: string,
  date?: Date,
  status?: string,
  sortBy?: string
}

export interface IOptionDefault {
  title: string,
  value?: string,
}
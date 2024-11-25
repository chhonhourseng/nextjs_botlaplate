import { Cubit } from 'blac';
import { StateStatus } from '@/data/enums/enum';

import T from '@/translate';
import { kDebugMode } from '@/constant/general';
import { ApiResponse, IFilter } from '@/data/types/types';
import { IPaginationMetaData } from '@/data/types/pagination';

export interface BaseRequestState<K, L> extends IPaginationMetaData {
  message?: string;
  status: StateStatus;
  data?: K;
  request?: L;
}


export default abstract class BaseRequestCubit<K, L> extends Cubit<BaseRequestState<K, L>> {

  constructor() {
    super({
      status: StateStatus.initial,
      has_next: true,
      has_prev: false,
    });
  }

  page: number = 1;
  keyword?: string;
  date?: Date;

  abstract response(d?: L): Promise<ApiResponse<K>>;

  request = async (d?: L) => {
    if (this.state.status === StateStatus.loading) return;
    this.patch({
      status: StateStatus.loading,
      request: d,
    });
    try {
      const result = await this.response(d);
      if (kDebugMode) {

      }
      this.patch({
        ...result,
        status: StateStatus.success,
        data: result.data,
      });
    } catch (e: any) {
      if (kDebugMode) {
        console.log(e);
      }
      try {
        this.patch({
          message: e ?? T.somethingWentWrong.s,
          status: StateStatus.failure,
        });
      } catch (e: any) {
        this.patch({
          message: T.somethingWentWrong.s,
          status: StateStatus.failure,
        });
      }
    }
  };

  reset = (): void => {
    this.emit({
      status: StateStatus.initial,
    });
  };

  onPageChange = (v: number): void => {
    this.page = v;
    this.request(this.state.request).then();
  };

  onSearch = (v: string): void => {
    this.keyword = v;
    this.refresh();
  };

  onFilterDate = (v: Date): void => {
    this.date = v;
    this.refresh();
  };


  refresh = (): void => {
    this.page = 1;
    this.request(this.state.request).then();
    if (kDebugMode) {
      console.log(kDebugMode);
    }
  };

  get getFilter(): IFilter {
    return {
      page: this.page,
      q: this.keyword,
      date: this.date,
    };
  }

  get isLoading(): boolean {
    return this.state.status == StateStatus.loading || this.state.status == StateStatus.initial;
  }
}
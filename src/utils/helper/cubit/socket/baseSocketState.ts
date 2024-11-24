import { StateStatus } from '@/data/enums/enum';

export interface BaseSocketState {
  status: StateStatus;
  eventData?: Map<string, IBaseSocketEventState<any>>;
}

export interface IBaseSocketEventState<K> {
  message?: string;
  status: StateStatus;
  data?: K;
}
import { Cubit } from 'blac';
import { StateStatus } from '@/data/enums/enum';
import SocketInterface from '@/utils/servies/SocketInterface';
import {
  BaseSocketState,
  IBaseSocketEventState,
} from '@/utils/helper/cubit/socket/baseSocketState';
import { kDebugMode } from '@/constant/general';

export default abstract class BaseSocketCubit extends Cubit<BaseSocketState> {
  constructor() {
    super({
      status: StateStatus.initial,
    });
  }

  abstract instance: SocketInterface;

  onListener<L>(v: {
    event: string;
    onChanged?: (s: L) => void;
  }) {
    this._emit({
      ...v,
      isEmit: false,
    });
  }

  onEmit<L>(v: {
    event: string;
    data: any,
    onChanged?: (s: L) => void;
  }) {
    this._emit({
      ...v,
      isEmit: true,
    });
  }

  private _emit<L>(v: {
    event: string,
    data?: any,
    isEmit: boolean,
    onChanged?: (s: L) => void;
  }) {
    if (kDebugMode) {
    }
    let eventData: Map<string, IBaseSocketEventState<L>> = this.state.eventData ?? new Map();

    if (eventData.has(v.event)) {
      try {
        const d: IBaseSocketEventState<L> = eventData.get(v.event) as IBaseSocketEventState<L>;
        if (kDebugMode) {
        }
        eventData.set(v.event, { ...d, status: StateStatus.loading });
        if (kDebugMode) {
        }
      } catch (_) {
        if (kDebugMode) {
        }
      }
    } else {
      eventData.set(v.event, {
        status: StateStatus.loading,
      });
    }

    this.patch({
      eventData: eventData,
    });
    try {
      if (v.isEmit) {
        if (kDebugMode) {
        }
        this.instance?.socket?.emit(
          v.event,
          v.data,
          (d: any) => {
            if (kDebugMode) {
            }
            v.onChanged?.(d);
            this._emitData({
              event: v.event,
              data: d,
            });
          },
        );
      } else {
        this.instance?.socket?.on(
          v.event,
          (d) => {
            if (kDebugMode) {
            }
            v.onChanged?.(d);
            this._emitData({
              event: v.event,
              data: d,
            });
          },
        );
      }
    } catch (_) {
      if (kDebugMode) {
      }
      eventData.set(v.event, {
        status: StateStatus.loading,
      });
      this.patch({
        eventData: eventData,
      });
    }
  }

  private _emitData<L>(v: {
    event: string,
    data: L;
  }) {
    let eventData = this.state.eventData ?? new Map;
    eventData.set(v.event, {
      status: StateStatus.success,
      data: {
        i: v.data,
      },
    });
    this.patch({
      eventData: eventData,
    });
  }

  init = () => {
    if (this.state.status == StateStatus.loading) return;
    this.patch({
      status: StateStatus.loading,
    });
    if (kDebugMode) {
    }
    try {
      this.instance.init(
        {
          onConnect: () => {
            this.patch({
              status: StateStatus.connected,
            });
          },
          onDisconnect: () => {
            this.patch({
              status: StateStatus.disConnected,
            });
          },
        },
      );

    } catch (e: any) {
      if (kDebugMode) {
      }
      this.patch({
        status: StateStatus.disConnected,
      });
    }
  };


  disconnect = () => {
    if (kDebugMode) {
    }
    this.instance.disconnect({
      onChange: () => {
        this.patch({
          status: StateStatus.disConnected,
        });
      },
    });
  };

  dispose = () => {
    this.instance.dispose({
      onChange: () => {
        this.patch({
          status: StateStatus.disConnected,
        });
      },
    });
  };
}
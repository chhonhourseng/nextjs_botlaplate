import { io, Socket } from 'socket.io-client';
import { kDebugMode } from '@/constant/general';

export default abstract class SocketInterface {

  public socket?: Socket;

  abstract get url(): string;

  get participant(): string | undefined {
    return undefined;
  };

  get auth(): string | undefined {
    return undefined;
  };

  init(v?: {
    onConnect?: () => void, onDisconnect?: () => void,
  }) {
    if (kDebugMode) {
    }
    let headers = {};

    if (this.auth) {
      headers = { ...headers, ...{ 'auth': this.auth } };
    }

    if (this.participant) {
      headers = { ...headers, ...{ 'participant': this.participant } };
    }

    this.socket = io(this.url, {
      autoConnect: true,
      extraHeaders: headers,
    });
    this.socket?.connect();

    this.socket.on('connect', () => {
      v?.onConnect?.();
    });

    this.socket.on('disconnect', () => {
      v?.onDisconnect?.();
    });
  }

  dispose(v: { onChange?: () => void }) {
    try {
      this.socket?.disconnect();
      this.socket?.close();
    } catch (_) {
    }
    v?.onChange?.();
  }

  disconnect(v: { onChange?: () => void }) {
    try {
      this.socket?.disconnect();
    } catch (_) {
    }
    v?.onChange?.();
  }
}
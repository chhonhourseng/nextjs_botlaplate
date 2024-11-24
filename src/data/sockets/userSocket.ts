import SocketInterface from '@/utils/servies/SocketInterface';
import { getCookie } from 'cookies-next';

export default class UserSocket extends SocketInterface {

  get url(): string {
    return process.env.NEXT_PUBLIC_SOCKET_URL + '/room';
  };

  get participant(): string {
    return 'user';
  }

  get auth(): string | undefined {
    return getCookie('accessToken');
  }

}
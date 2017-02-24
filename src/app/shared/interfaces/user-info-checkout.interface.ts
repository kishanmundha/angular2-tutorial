import { UserInfo } from './user-info.interface';

export interface UserInfoCheckout extends UserInfo {
  address: string;
  address2: string;
  city: string;
  state: string;
  pincode: string;
}

import { UserInfoBasic } from './user-info-basic.interface';

export interface UserInfo extends UserInfoBasic {
  address: string;
  address2: string;
  city: string;
  state: string;
  pincode: string;
}
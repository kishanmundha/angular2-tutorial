import { UserInfo } from './user-info.interface';

export interface UserInfoFeedback extends UserInfo {
  feedback: string;
}

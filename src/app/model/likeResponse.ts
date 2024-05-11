import {UserResponse} from "./userResponse";

export interface LikeResponse {
  id:string;
  localDateTime:Date;
  userResponse:UserResponse;
}

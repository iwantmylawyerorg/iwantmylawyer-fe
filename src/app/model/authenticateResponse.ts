import {UserResponse} from "./userResponse";

export interface AuthenticateResponse{
  userResponse: UserResponse;
  access_token: string;
  refresh_token: string;
}

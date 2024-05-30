import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticateRequest} from "../model/authenticateRequest";
import {Constant} from "../constant/constant";
import {AuthenticateResponse} from "../model/authenticateResponse";
import {firstValueFrom} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAuthenticate(authenticateRequest: AuthenticateRequest) {
    return this.http.post<AuthenticateResponse>(Constant.AUTH,authenticateRequest);
  }
  getLogout(){
    return this.http.get<void>(Constant.GET_LOGOUT);
  }

  getRefreshToken(refreshToken:string) {
    return this.http.post<void>(Constant.GET_REFRESH_TOKEN,{},{headers: new HttpHeaders(
      { 'Authorization': `Bearer ${refreshToken}` })});
  }

  public async getJwtTokenByRefreshToken(refreshToken: string) {
    let promise = await firstValueFrom(this.getRefreshToken(refreshToken));
    console.log(promise)

    localStorage.setItem("acces_token", promise["access_token"]);
    localStorage.setItem("refresh_token", promise["refresh_token"]);
    localStorage.setItem("id", promise["userResponse"].id);
    return {accessToken: localStorage.getItem("acces_token"), refreshToken: localStorage.getItem("refresh_token")}
  }
}

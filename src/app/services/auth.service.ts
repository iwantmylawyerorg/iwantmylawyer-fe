import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticateRequest} from "../model/authenticateRequest";
import {Constant} from "../constant/constant";
import {AuthenticateResponse} from "../model/authenticateResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAuthenticate(authenticateRequest: AuthenticateRequest) {
    return this.http.post<AuthenticateResponse>(Constant.AUTH,authenticateRequest);
  }
}

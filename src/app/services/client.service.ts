import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticateRequest} from "../model/authenticateRequest";
import {ClientRequest} from "../model/clientRequest";
import {Constant} from "../constant/constant";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  registerClient(clientRequest: ClientRequest) {
     return this.http.post<void>(Constant.REGISTER_CLIENT,clientRequest);
  }
}

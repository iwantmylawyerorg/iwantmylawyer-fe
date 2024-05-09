import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateAddressRequest} from "../model/createAddressRequest";
import {Constant} from "../constant/constant";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  createAddress(createAddressRequest:CreateAddressRequest) {
     return this.http.post<void>(Constant.CREATE_ADDRESS, createAddressRequest);
  }
}

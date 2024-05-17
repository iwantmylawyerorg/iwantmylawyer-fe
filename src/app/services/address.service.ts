import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateAddressRequest} from "../model/createAddressRequest";
import {Constant} from "../constant/constant";
import {UpdateAddressRequest} from "../model/updateAddressRequest";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  createAddress(createAddressRequest:CreateAddressRequest) {
     return this.http.post<void>(Constant.CREATE_ADDRESS, createAddressRequest);
  }
  updateAddress(updateAddressRequest:UpdateAddressRequest) {
    return this.http.put<void>(Constant.UPDATE_ADDRESS, updateAddressRequest);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Constant} from "../constant/constant";

@Injectable({
  providedIn: 'root'
})
export class ActivateAccountService {

  constructor(private http: HttpClient) { }

  addAvukatKartPhoto(id: string, value:File) {
    let formData = new FormData();
    formData.append("file",value);
    return this.http.put(Constant.UPDATE_LAWYER_CARD_PHOTO + `${id}`, formData);
  }
  addTcPhoto(id: string, value: File) {
    let formData = new FormData();
    formData.append("file",value);
    return this.http.put(Constant.UPDATE_TC_PHOTO + `${id}`, formData);
  }
  addLawyerPhoto(id:string, value:File) {
    let formData = new FormData();
    formData.append("file",value);
    return this.http.put(Constant.UPDATE_LAWYER_PHOTO + `${id}`, formData);
  }
}

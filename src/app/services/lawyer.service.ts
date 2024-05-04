import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LawyerRequest} from "../model/lawyerRequest";
import {Constant} from "../constant/constant";

@Injectable({
  providedIn: 'root'
})
export class LawyerService {

  constructor(private http: HttpClient) {
  }
  registerLawyer(lawyerRequest: LawyerRequest) {
    return this.http.post<void>(Constant.REGISTER_LAWYER,lawyerRequest);
  }
}

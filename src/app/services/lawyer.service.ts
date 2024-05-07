import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LawyerRequest} from "../model/lawyerRequest";
import {Constant} from "../constant/constant";
import {LawyerResponse} from "../model/laywerResponse";
import {LawyerGetAllResponse} from "../model/lawyerGetAllResponse";

@Injectable({
  providedIn: 'root'
})
export class LawyerService {

  constructor(private http: HttpClient) {
  }
  registerLawyer(lawyerRequest: LawyerRequest) {
    return this.http.post<void>(Constant.REGISTER_LAWYER,lawyerRequest);
  }

  getLawyer(id: string) {
    return this.http.get<LawyerResponse>(Constant.GET_LAWYER+`${id}`)
  }
  getAllLawyers(page:number,size:number,firstName:string,lastName:string,city:string) {
    return this.http.get<LawyerGetAllResponse>(Constant.GET_ALL_LAWYER +
      `${page}`+"/"
      +`${size}`+"/"
      +`${firstName}`+"/"
      +`${lastName}`+"/"
      +`${city}`)
  }
}

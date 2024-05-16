import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LawyerRequest} from "../model/lawyerRequest";
import {Constant} from "../constant/constant";
import {LawyerResponse} from "../model/laywerResponse";
import {LawyerGetAllResponse} from "../model/lawyerGetAllResponse";
import {UpdateSocialContactInfoRequest} from "../model/updateSocialContactInfoRequest";
import {AddExpertiseFieldRequest} from "../model/addExpertiseFieldRequest";
import {UnconfirmedLawyerResponse} from "../model/unconfirmedLawyerResponse";

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
  getUnconfirmedLawyer(id: string) {
    return this.http.get<UnconfirmedLawyerResponse>(Constant.GET_UNCONFIRMED_LAWYER+id);
  }
  getAllLawyers(page:number,size:number,firstName:string,lastName:string,city:string) {
    return this.http.get<LawyerGetAllResponse>(Constant.GET_ALL_LAWYER +
      `${page}`+"/"
      +`${size}`+"/"
      +`${firstName}`+"/"
      +`${lastName}`+"/"
      +`${city}`)
  }
  getAllUnconfirmedLawyers(page:number,size:number) {
    return this.http.get<LawyerGetAllResponse>(Constant.GET_ALL_UNCONFIRMED_LAWYER+page+"/"+size);
  }
  updateSocialContactInfo(updateSocialContactInfoRequest: UpdateSocialContactInfoRequest) {
    return this.http.put<void>(Constant.UPDATE_SOCIAL_CONTACT_INFO,updateSocialContactInfoRequest);
  }
  addExpertiseField(addExpertiseFieldRequest: AddExpertiseFieldRequest){
    return this.http.put<void>(Constant.ADD_EXPERTISE_FIELD,addExpertiseFieldRequest);
  }
  removeExpertiseField(addExpertiseFieldRequest: AddExpertiseFieldRequest){
    return this.http.put<void>(Constant.REMOVE_EXPERTISE_FIELD,addExpertiseFieldRequest);
  }
  addRoleToLawyer(id: string) {
    let formData = new FormData();
    return this.http.put<void>(Constant.ADD_ROLE_TO_LAWYER+id,formData);
  }
}

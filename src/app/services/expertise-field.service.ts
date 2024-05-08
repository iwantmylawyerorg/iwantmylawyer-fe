import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constant} from "../constant/constant";
import {ExpertiseFieldResponse} from "../model/expertiseFieldResponse";
import {AddExpertiseFieldRequest} from "../model/addExpertiseFieldRequest";

@Injectable({
  providedIn: 'root'
})
export class ExpertiseFieldService {

  constructor(private http: HttpClient) { }


  getAllExpertiseField() {
    return this.http.get<ExpertiseFieldResponse[]>(Constant.GET_EXPERTISE_FIELDS);
  }
}

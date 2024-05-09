import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateCommonQuestionRequest} from "../model/createCommonQuestionRequest";
import {Constant} from "../constant/constant";

@Injectable({
  providedIn: 'root'
})
export class CommonquestionsService {

  constructor(private http: HttpClient) { }


  createCommonQuestion(createCommonQuestionRequest: CreateCommonQuestionRequest) {
    return this.http.post<void>(Constant.CREATE_CommonQuestion, createCommonQuestionRequest);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constant} from "../constant/constant";
import {ChatbotResponse} from "../model/chatbotResponse";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor(private http: HttpClient) { }


  chat(userInput: string): Observable<ChatbotResponse> {
    return this.http.get<ChatbotResponse>(Constant.CHAT_AI + `${userInput}`);
  }
  deleteChat() {
    return this.http.delete<void>(Constant.CHAT_AI);
  }
}


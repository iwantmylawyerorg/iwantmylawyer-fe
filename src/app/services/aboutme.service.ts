import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constant} from "../constant/constant";

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  constructor(private http: HttpClient) { }

  updateAboutMe(id: string, aboutMe:string) {
    return this.http.put<void>(Constant.UPDATE_ABOUT_ME +`${id}`,aboutMe);
  }
}

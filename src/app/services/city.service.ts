import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Constant} from "../constant/constant";
import {City} from "../model/city";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) {
  }

  getAllCities() {
    return this.http.get<City[]>(Constant.CITY);
  }
}

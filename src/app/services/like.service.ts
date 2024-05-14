import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constant} from "../constant/constant";
import {LikeRequest} from "../model/likeRequest";

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) {

  }

  createLike(likeRequest:LikeRequest){
    return this.http.post(Constant.CREATE_LIKE , likeRequest);
  }
  deleteLike(likeId:string){
    return this.http.delete(Constant.DELETE_LIKE+likeId);
  }
}

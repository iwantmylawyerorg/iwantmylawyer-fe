import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreatePostRequest} from "../model/createPostRequest";
import {Constant} from "../constant/constant";
import {PostIdResponse} from "../model/postIdResponse";
import {PostResponse} from "../model/postResponse";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  createPost(createPostRequest:CreatePostRequest) {
    return this.http.post<PostIdResponse>(Constant.CREATE_POST,createPostRequest);
  }
  addPhoto(id:string,value:File ) {
    let formData = new FormData();
    formData.append("file",value);
    return this.http.put(Constant.ADD_POST_PHOTO + `${id}`, formData);
  }

  getAllPosts(page:number,size:number){
    return this.http.get<PostResponse>(Constant.GET_ALL_POSTS+
      `${page}`+"/"
      +`${size}`);
  }
}

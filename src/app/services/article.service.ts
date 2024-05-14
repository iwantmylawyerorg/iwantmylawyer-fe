import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreatePostRequest} from "../model/createPostRequest";
import {PostIdResponse} from "../model/postIdResponse";
import {Constant} from "../constant/constant";
import {CreateArticleRequest} from "../model/createArticleRequest";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  createArticle(createArticleRequest:CreateArticleRequest) {
    return this.http.post<PostIdResponse>(Constant.CREATE_ARTICLE,createArticleRequest);
  }
  addPhoto(id:string,value:File ) {
    let formData = new FormData();
    formData.append("file",value);
    return this.http.put(Constant.ADD_ARTICLE_PHOTO + `${id}`, formData);
  }
  deleteArticle(id:string) {
    return this.http.delete(Constant.DELETE_ARTICLE + id);
  }
}

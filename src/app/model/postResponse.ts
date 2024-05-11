import {LikeResponse} from "./likeResponse";
import {LawyerResponseWithPost} from "./lawyerResponseWithPost";


export interface PostResponse {
  content: {
    id:string;
    text:string;
    postPhoto:string;
    localDateTime:Date;
    likeResponseList:LikeResponse[];
    lawyerResponseWithPost:LawyerResponseWithPost;
  }[],
  totalElements:number;

}

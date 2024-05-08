import {City} from "./city";

export interface LawyerGetAllResponse {
  content: {
    id: string;
    firstName: string;
    lastName: string;
    telephoneNo: string;
    lawyerPhoto: string;
    baroKayitIl: City;
  }[];

}

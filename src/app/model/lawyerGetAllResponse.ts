import {City} from "./city";

export interface LawyerGetAllResponse {
  content: {
    id: string;
    firstName: string;
    lastName: string;
    contactTelephoneNo: string;
    lawyerPhoto: string;
    baroKayitIl: City;
  }[];
  totalElements:number
}

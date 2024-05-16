import {AddressResponse} from "./addressResponse";

export interface UnconfirmedLawyerResponse{
  firstName:string;
  lastName:string;
  baroSicilNo:string;
  tcNo:string;
  lawyerPhoto:string;
  avukatKartPhoto:string;
  tcPhoto:string;
  addressResponse: AddressResponse

}

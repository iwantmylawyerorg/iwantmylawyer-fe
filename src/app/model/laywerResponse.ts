import {City} from "./city";
import {AddressResponse} from "./addressResponse";
import {ExpertiseFieldResponse} from "./expertiseFieldResponse";
import {ArticleResponse} from "./articleResponse";
import {CommonQuestionResponse} from "./commonQuestionResponse";

export interface LawyerResponse {
  email: string;
  firstName: string;
  lastName: string;
  telephoneNo: string;
  baroSicilNo: string;
  lawyerPhoto: string;
  aboutMe: string;
  contactEmail: string;
  contactTelNo: string;
  contactTwitterUrl: string;
  contactInstagramUrl: string;
  contactFaceBookUrl: string;
  cityResponse: City;
  addressResponse: AddressResponse;
  expertiseFieldResponseList: ExpertiseFieldResponse[];
  articleResponseList: ArticleResponse[];
  commonQuestionResponseList: CommonQuestionResponse[];

}

import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {SignupPageComponent} from "./pages/signup-page/signup-page.component";
import {LawyersPageComponent} from "./pages/lawyers-page/lawyers-page.component";
import {SidebarComponent} from "./headers/sidebar/sidebar.component";
import {LawyerEditProfilePageComponent} from "./pages/lawyer-edit-profile-page/lawyer-edit-profile-page.component";
import {PostPageComponent} from "./pages/post-page/post-page.component";
import {LawyerProfilePageComponent} from "./pages/lawyer-profile-page/lawyer-profile-page.component";
import {
  LawyerCredentialsStepperComponent
} from "./forms/lawyer-credentials-stepper/lawyer-credentials-stepper.component";
import {AboutMeFormComponent} from "./forms/about-me-form/about-me-form.component";
import {ContactInfoFormComponent} from "./forms/contact-info-form/contact-info-form.component";
import {ExpertiseFieldFormComponent} from "./forms/expertise-field-form/expertise-field-form.component";
import {CommonQuestionsFormComponent} from "./forms/common-questions-form/common-questions-form.component";
import {ArticlesFormComponent} from "./forms/articles-form/articles-form.component";
import {AddressFormComponent} from "./forms/address-form/address-form.component";




export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path:'signup',component: SignupPageComponent},
  {path:'posts', component: PostPageComponent},
  {path:'lawyers',component: LawyersPageComponent},
  {path:'lawyer-profile/:id',component: LawyerProfilePageComponent},
  {path:'lawyer-edit-profile',component: LawyerEditProfilePageComponent,

  children:[
    {path:'activate-account',component:LawyerCredentialsStepperComponent},
    {path:'about-me',component:AboutMeFormComponent},
    {path:'contact-info',component:ContactInfoFormComponent},
    {path:'address',component:AddressFormComponent},
    {path:'expertise-fields',component:ExpertiseFieldFormComponent},
    {path:'common-questions',component:CommonQuestionsFormComponent},
    {path:'articles',component:ArticlesFormComponent}
  ]},
];

import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {SignupPageComponent} from "./pages/signup-page/signup-page.component";
import {LawyersPageComponent} from "./pages/lawyers-page/lawyers-page.component";
import {SidebarComponent} from "./headers/sidebar/sidebar.component";
import {LawyerEditProfilePageComponent} from "./pages/lawyer-edit-profile-page/lawyer-edit-profile-page.component";
import {PostPageComponent} from "./pages/post-page/post-page.component";




export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path:'signup',component: SignupPageComponent},
  {path:'posts', component: PostPageComponent},
  {path:'lawyers',component: LawyersPageComponent},
  {path:'lawyer-edit-profile',component: LawyerEditProfilePageComponent},
];

import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {SignupPageComponent} from "./pages/signup-page/signup-page.component";
import {PostsPageComponent} from "./pages/posts-page/posts-page.component";
import {LawyersPageComponent} from "./pages/lawyers-page/lawyers-page.component";




export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path:'signup',component: SignupPageComponent},
  {path:'posts', component: PostsPageComponent},
  {path:'lawyers',component: LawyersPageComponent},
];

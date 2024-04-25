import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {SignupPageComponent} from "./pages/signup-page/signup-page.component";
import {LawyersPageComponent} from "./pages/lawyers-page/lawyers-page.component";
import {SidebarComponent} from "./headers/sidebar/sidebar.component";
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { CreateArticleComponent } from './pages/article-page/create-article/create-article.component';




export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path:'signup',component: SignupPageComponent},
  {path:'posts', component: SidebarComponent},
  {path:'lawyers',component: LawyersPageComponent},
  {path: 'article',component: ArticlePageComponent},
  {path: 'create-article', component: CreateArticleComponent},
];

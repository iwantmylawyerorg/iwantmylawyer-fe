import { Component } from '@angular/core';

import {NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MainHeaderComponent} from "../../headers/main-header/main-header.component";
import {ResponsiveHeaderComponent} from "../../headers/responsive-header/responsive-header.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    NgStyle,
    RouterLink,
    MainHeaderComponent,
    ResponsiveHeaderComponent,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}

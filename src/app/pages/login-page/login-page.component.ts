import { Component } from '@angular/core';

import {NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MinimalHeaderComponent} from "../../headers/minimal-header/minimal-header.component";
import {MainHeaderComponent} from "../../headers/main-header/main-header.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MinimalHeaderComponent,
    NgStyle,
    RouterLink,
    MainHeaderComponent,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}

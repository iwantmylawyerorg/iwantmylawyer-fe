import { Component } from '@angular/core';
import {MinimalHeaderComponent} from "../../headers/minimal-header/minimal-header.component";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MinimalHeaderComponent,
    NgStyle
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}

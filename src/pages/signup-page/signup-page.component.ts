import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";
import {ClientSignUpFormComponent} from "../../forms/client-sign-up-form/client-sign-up-form.component";
import {LawyerSignUpFormComponent} from "../../forms/lawyer-sign-up-form/lawyer-sign-up-form.component";

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    ClientSignUpFormComponent,
    LawyerSignUpFormComponent
  ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  signUpType:String = "Client";

  clientSignUpClicked() {
    this.signUpType = "Client";
  }
  lawyerSignUpClicked() {
    this.signUpType = "Lawyer";
  }
}

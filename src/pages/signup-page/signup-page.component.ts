import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";
import {ClientSignUpFormComponent} from "../../forms/client-sign-up-form/client-sign-up-form.component";
import {LawyerSignUpFormComponent} from "../../forms/lawyer-sign-up-form/lawyer-sign-up-form.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    ClientSignUpFormComponent,
    LawyerSignUpFormComponent,
  ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css',
  animations: [
    trigger('slideIn', [
      transition('client => lawyer', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.3s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition('lawyer => client', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.3s ease-in-out', style({ transform: 'translateX(0%)' }))
      ])
    ])
  ]
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

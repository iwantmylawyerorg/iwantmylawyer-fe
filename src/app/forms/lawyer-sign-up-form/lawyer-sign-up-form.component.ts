import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-lawyer-sign-up-form',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './lawyer-sign-up-form.component.html',
  styleUrl: './lawyer-sign-up-form.component.css'
})
export class LawyerSignUpFormComponent {
  agreedToTerms: boolean = false;


  handleButtonStatus(){
    this.agreedToTerms = !this.agreedToTerms;
  }
}

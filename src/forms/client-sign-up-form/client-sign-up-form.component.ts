import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-client-sign-up-form',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './client-sign-up-form.component.html',
  styleUrl: './client-sign-up-form.component.css'
})
export class ClientSignUpFormComponent {
  agreedToTerms: boolean = false;


 handleButtonStatus(){
  this.agreedToTerms = !this.agreedToTerms;
 }
}

import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-contact-info-form',
  standalone: true,
    imports: [
        FormsModule,
        MatFormField,
        MatLabel,
        MatOption,
        MatSelect,
        ReactiveFormsModule
    ],
  templateUrl: './contact-info-form.component.html',
  styleUrl: './contact-info-form.component.css'
})
export class ContactInfoFormComponent {

}

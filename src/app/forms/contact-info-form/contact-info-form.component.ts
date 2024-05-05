import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {ToastrService} from "ngx-toastr";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-contact-info-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    MatError,
    MatInput,
    MatIcon,
    MatPrefix,
    MatSuffix
  ],
  templateUrl: './contact-info-form.component.html',
  styleUrl: './contact-info-form.component.css'
})
export class ContactInfoFormComponent implements OnInit{
  hide = true;
  updateLawyerForm!: FormGroup;

  constructor(private fb: FormBuilder,private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.updateLawyerForm = this.fb.group({
      email: ['',Validators.email],
      telNo: [''],
      facebookUrl: [''],
      instagramUrl: [''],
      twitterUrl: [''],
    })
  }

}

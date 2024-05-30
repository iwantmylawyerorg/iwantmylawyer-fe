import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {ToastrService} from "ngx-toastr";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {LawyerService} from "../../services/lawyer.service";
import {LawyerResponse} from "../../model/laywerResponse";

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
  lawyer : LawyerResponse;
  lawyerId = "";
  updateLawyerForm!: FormGroup;

  constructor(private lawyerService:LawyerService, private fb: FormBuilder,private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.lawyerId = localStorage.getItem('id')
    this.getLawyer();
    this.updateLawyerForm = this.fb.group({
      id:[this.lawyerId],
      contactEmail: [this.lawyer?.contactEmail || ' ', [Validators.email]],
      contactTelNo: [' '],
      contactFaceBookUrl: [' '],
      contactInstagramUrl: [' '],
      contactTwitterUrl: [' '],
    })

  }

  getLawyer(){
    this.lawyerService.getLawyer(this.lawyerId).subscribe(
      {
        next: value => {
          this.lawyer= value;
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }
  updateSocialContact(){
    if(this.updateLawyerForm.valid){
      let request = Object.assign({},this.updateLawyerForm.value);
      request.id = this.lawyerId
      this.lawyerService.updateSocialContactInfo(request).subscribe({
        next: value => {
          this.toastr.success("Your contact info have been successfully updated!");
          this.updateLawyerForm.reset();
        },
        error: err => {
          this.toastr.error("Something went wrong!");
        }
      })
    }
  }

}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";
import {ClientService} from "../../services/client.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {MatError, MatFormField, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {createPasswordStrengthValidator} from "../../validators/passwordValidator";

@Component({
  selector: 'app-client-sign-up-form',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatError,
    MatIcon,
    MatIconButton,
    MatSuffix,
    MatPrefix
  ],
  templateUrl: './client-sign-up-form.component.html',
  styleUrl: './client-sign-up-form.component.css'
})
export class ClientSignUpFormComponent implements OnInit{
  hide = true;
  agreedToTerms: boolean = false;
  clientForm!: FormGroup;


  constructor(private fb: FormBuilder,private clientService: ClientService,
              private toastr: ToastrService, private router: Router) {
  }

 handleButtonStatus(){
  this.agreedToTerms = !this.agreedToTerms;
 }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.maxLength(30),Validators.minLength(8),createPasswordStrengthValidator()]],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      telephoneNo: ['',Validators.required],
    })
  }

  register() {
    if(this.clientForm.valid){
      let registerRequest = Object.assign({}, this.clientForm.value);
      this.clientService.registerClient(registerRequest).subscribe({
        next:(value) =>{
          this.toastr.success("You have successfully registered!");
          this.router.navigate(['login']);
        },
        error: (error) => {
          console.log(error);
          if(error.error.email){
            this.toastr.error(error.error.email);
          }
          if(error.error.password){
            this.toastr.error(error.error.password);
          }
          if(error.status === 409){
            this.toastr.error(error.error);
          }
        }
      })
    }
  }
}

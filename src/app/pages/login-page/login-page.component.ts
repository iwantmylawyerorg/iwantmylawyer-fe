import {Component, OnInit} from '@angular/core';

import {NgStyle} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {MainHeaderComponent} from "../../headers/main-header/main-header.component";
import {ResponsiveHeaderComponent} from "../../headers/responsive-header/responsive-header.component";
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    NgStyle,
    RouterLink,
    MainHeaderComponent,
    ResponsiveHeaderComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  authenticationForm!: FormGroup;


  constructor(private authService: AuthService,private fb: FormBuilder,
              private router: Router,private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.authenticationForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
    })
  }


  getAuthenticate(){
    if(this.authenticationForm.valid){
      let authenticateRequest = Object.assign({}, this.authenticationForm.value);
      this.authService.getAuthenticate(authenticateRequest).subscribe({
        next: (value) => {
          localStorage.setItem("acces_token",value.access_token);
          localStorage.setItem("refresh_token",value.refresh_token);
          localStorage.setItem("role",value.userResponse.role);
          localStorage.setItem("id",value.userResponse.id);
          this.toastr.success("WELCOME")
          this.router.navigate(['']);
        },
        error: (error) => {
          if(error.status === 403){
          this.toastr.error("CHECK YOUR CREDENTIALS","COULD NOT LOGIN",{
            timeOut: 1500,
            progressBar: true,
            positionClass: "toast-bottom-center",
          })
          }
        }
      })
    }

  }


}

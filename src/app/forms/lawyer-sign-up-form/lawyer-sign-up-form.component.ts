import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup, FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {CityService} from "../../services/city.service";
import {City} from "../../model/city";
import {ToastrService} from "ngx-toastr";
import {JsonPipe} from "@angular/common";
import {LawyerService} from "../../services/lawyer.service";
import {Router} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";


@Component({
  selector: 'app-lawyer-sign-up-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    JsonPipe,
    MatIconModule,
    MatIconButton
  ],
  templateUrl: './lawyer-sign-up-form.component.html',
  styleUrl: './lawyer-sign-up-form.component.css'
})
export class LawyerSignUpFormComponent implements OnInit{
  hide = true;
  agreedToTerms: boolean = false;
  cities: City[] = [];
  lawyerForm!: FormGroup;


  constructor(private cityService: CityService, private fb: FormBuilder,
              private toastr: ToastrService,
              private lawyerService: LawyerService,
              private router: Router){
  }
  handleButtonStatus(){
    this.agreedToTerms = !this.agreedToTerms;
  }

  ngOnInit(): void {
    this.getAllCities();
    this.lawyerForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['', Validators.required],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      telephoneNo: ['',Validators.required],
      tcNo: ['',Validators.required],
      baroSicilNo: ['',Validators.required],
      cityId: ['',Validators.required],
    })
  }

  getAllCities(){
    this.cityService.getAllCities().subscribe({
      next: value => {
        value.map(value1 => this.cities.push(value1));
        console.log(value);
      },
      error: error => {
        console.log(error);
      }
    })
  }

  lawyerRegister(){
    if(this.lawyerForm.valid){
      let request = Object.assign({},this.lawyerForm.value);
        this.lawyerService.registerLawyer(request).subscribe({
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

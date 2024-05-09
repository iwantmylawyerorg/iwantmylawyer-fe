import {Component, inject, OnInit} from '@angular/core';
import {
  MatStep,
  MatStepLabel,
  MatStepper, MatStepperModule,
  MatStepperNext,
  MatStepperPrevious,
  StepperOrientation
} from "@angular/material/stepper";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {AsyncPipe} from "@angular/common";
import {ActivateAccountService} from "../../services/activate-account.service";
import {AddressService} from "../../services/address.service";

@Component({
  selector: 'app-lawyer-credentials-stepper',
  standalone: true,
  imports: [
    MatStep,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AsyncPipe,
  ],
  templateUrl: './lawyer-credentials-stepper.component.html',
  styleUrl: './lawyer-credentials-stepper.component.css'
})
export class LawyerCredentialsStepperComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  addressFormGroup!:FormGroup;
  lawyerId = "";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
    private activateAccountService: ActivateAccountService,
    private addressService: AddressService,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  protected readonly localStorage = localStorage;


  ngOnInit(): void {
    this.lawyerId=localStorage.getItem('id');
    this.addressFormGroup = this._formBuilder.group({
      street:['',Validators.required],
      alley:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      postalCode:['',Validators.required],
      country:['',Validators.required],
      lawyerId:[this.lawyerId,Validators.required],
    });
  }

  imageFile?: File;

  onChange(event: any) {
    this.imageFile = event.target.files[0];
  }

  addCardPhoto() {
      let value = this.imageFile;
      let id = localStorage.getItem("id");
      this.activateAccountService.addAvukatKartPhoto(id, value).subscribe({
        next: value => {

        },
        error: error => {
          console.log(error);
        }
      })

  }
  addTcPhoto() {
      let value = this.imageFile;
      let id = localStorage.getItem("id");
      this.activateAccountService.addTcPhoto(id, value).subscribe({
        next: value => {

        },
        error: error => {
          console.log(error);
        }
      })
  }
  addLawyerPhoto(){
    let value = this.imageFile;
    let id = localStorage.getItem("id");
    this.activateAccountService.addLawyerPhoto(id, value).subscribe({
      next: value => {

      },
      error: error => {
        console.log(error);
      }
    })
  }
  createAddress(){
    if(this.addressFormGroup.valid){
      let addressRequest = Object.assign({},this.addressFormGroup.value)
      console.log(addressRequest);
      this.addressService.createAddress(addressRequest).subscribe(
        {
          next: value => {

          },
          error: error => {
            console.log(error);
          }
        }
      )
    }
  }
}

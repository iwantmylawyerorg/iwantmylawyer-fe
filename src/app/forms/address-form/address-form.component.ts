import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AddressService} from "../../services/address.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatHint,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css'
})
export class AddressFormComponent {
  addressForm!: FormGroup;
  lawyerId: string;

  constructor(private fb: FormBuilder, private addressService: AddressService, private toastr: ToastrService) {
    this.lawyerId = localStorage.getItem('id');
    this.addressForm = this.fb.group({
      lawyerId: [this.lawyerId, Validators.required],
      street: ['', Validators.required],
      alley: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required]
    });
  }


  updateAddress() {
    let updateAddressRequest = Object.assign({}, this.addressForm.value);
    updateAddressRequest.lawyerId = this.lawyerId
    this.addressService.updateAddress(updateAddressRequest).subscribe(
      {
        next: value => {
          this.toastr.success("You have successfully updated address!");
          this.addressForm.reset();
        },
        error: err => {
          this.toastr.error("Something went wrong!");
        }
      }
    )
  }

}

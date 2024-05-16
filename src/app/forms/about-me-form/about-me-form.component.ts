import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AboutmeService} from "../../services/aboutme.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-about-me-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './about-me-form.component.html',
  styleUrl: './about-me-form.component.css'
})
export class AboutMeFormComponent implements OnInit {
  aboutMeForm!: FormGroup;

  constructor(private aboutmeService: AboutmeService,private fb: FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.aboutMeForm = this.fb.group({
      aboutMe: ['',Validators.required]
    })
  }

  updateAboutMe(){
    if (this.aboutMeForm.valid){
      let aboutMe = this.aboutMeForm.get('aboutMe')?.value;
      let id = localStorage.getItem("id");
      this.aboutmeService.updateAboutMe(id,aboutMe).subscribe({
        next: value => {
          this.toastr.success("Your about me has been successfully updated!");
          this.aboutMeForm.reset();
        },
        error: (error) => {
          this.toastr.error("Something went wrong! Please try again.");
        }
      })

    }
  }

}

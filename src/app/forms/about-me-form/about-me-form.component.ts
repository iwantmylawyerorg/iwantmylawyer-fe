import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AboutmeService} from "../../services/aboutme.service";

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

  constructor(private aboutmeService: AboutmeService,private fb: FormBuilder) { }

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
          console.log(value);
        },
        error: (error) => {
          console.log(error);
        }
      })

    }
  }

}

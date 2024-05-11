import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {PostService} from "../services/post.service";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-post-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInput, ReactiveFormsModule],
  templateUrl: './create-post-dialog.component.html',
  styleUrl: './create-post-dialog.component.css'
})
export class CreatePostDialogComponent implements OnInit{

  lawyerId:string;
  imageFile?: File;
  postFormGroup: FormGroup;

  ngOnInit(): void {
    this.lawyerId=localStorage.getItem('id');
    this.postFormGroup = this.fb.group({
      lawyerId:[this.lawyerId],
      text:[''],
    })
  }
  constructor(private postService: PostService, private fb: FormBuilder) {

  }
  onChange(event: any) {
    this.imageFile = event.target.files[0];
  }

  createPost(){
    if(this.postFormGroup.valid){
      let postRequest = Object.assign({},this.postFormGroup.value)
      this.postService.createPost(postRequest).subscribe(
        {
          next: value => {
            if(this.imageFile){
              let result = this.imageFile;
              this.postService.addPhoto(value.id,result).subscribe(
                {
                  next: value => {

                  },
                  error: error => {
                    console.log(error);
                  }
                }
              )
            }
          },error:err => {
            console.log(err);
          }
        }
      )
    }
  }
}

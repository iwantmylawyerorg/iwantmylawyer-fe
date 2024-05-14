import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {LawyerService} from "../../services/lawyer.service";
import {LawyerResponse} from "../../model/laywerResponse";
import {ArticleService} from "../../services/article.service";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-articles-form',
  standalone: true,
    imports: [
      ReactiveFormsModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatExpansionModule,
      MatIconModule,
      MatButtonModule
    ],
  templateUrl: './articles-form.component.html',
  styleUrl: './articles-form.component.css'
})
export class ArticlesFormComponent implements OnInit{
  panelOpenState = false;
  lawyer:LawyerResponse;
  lawyerId = "";
  articleFormGroup:FormGroup;
  imageFile?: File

  ngOnInit(): void {
    this.lawyerId = localStorage.getItem("id");
    this.getLawyerById();
    this.articleFormGroup = this.fb.group({
      lawyerId:[this.lawyerId],
      header:[''],
      text:['']
    })
  }

  constructor(private lawyerService:LawyerService, private fb: FormBuilder, private articleService:ArticleService) {
  }
  onChange(event: any) {
    this.imageFile = event.target.files[0];
  }

  createArticle(){
    if(this.articleFormGroup.valid){
      let articleRequest = Object.assign({},this.articleFormGroup.value)
      this.articleService.createArticle(articleRequest).subscribe({
        next: value => {
          console.log(value);
          if (this.imageFile !=null){
            this.articleService.addPhoto(value.id,this.imageFile).subscribe({
              next: value => {
                console.log(value)

              },
              error: error => {
                console.log(error);
              }
            })
          }
          else{
            this.getLawyerById()
          }
        },
        error: error => {
          console.log(error)
        }
      })
    }
  }

  getLawyerById() {
    this.lawyerService.getLawyer(this.lawyerId).subscribe({
      next: value => {
        this.lawyer = value;
      },
      error: err => {

      }
    })
  }

  deleteArticle(id:string) {
    this.articleService.deleteArticle(id).subscribe({
      next:value => {
        this.getLawyerById()
      },
      error:err => {
        console.log(err)
      }
    })
  }
}

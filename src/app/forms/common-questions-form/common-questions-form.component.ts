import {Component, OnInit, ViewChild} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {LawyerService} from "../../services/lawyer.service";
import {CommonquestionsService} from "../../services/commonquestions.service";
import {CommonQuestionResponse} from "../../model/commonQuestionResponse";
import {LawyerResponse} from "../../model/laywerResponse";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";



@Component({
  selector: 'app-common-questions-form',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatExpansionModule,],
  templateUrl: './common-questions-form.component.html',
  styleUrl: './common-questions-form.component.css'
})
export class CommonQuestionsFormComponent implements OnInit{
  commonQuestionsForm!: FormGroup;
  lawyer:LawyerResponse;
  lawyerId = "";

  ngOnInit(): void {
    this.lawyerId = localStorage.getItem('id')
    this.getLawyer();
    this.commonQuestionsForm = this.fb.group(
      {
        questionLine : ['',Validators.required],
        answerLine :['',Validators.required],
        lawyerId:[this.lawyerId],
      })
  }

  constructor(private fb: FormBuilder, private lawyerService: LawyerService, private commonquestionsService:CommonquestionsService) {

  }

  deleteCommonQuestion(id:string): void {
    this.commonquestionsService.deleteCommonQuestion(id).subscribe(
      {
        next: value => {
          this.getLawyer();
        },
        error: error => {
          console.log(error);
        }
      }
    )

  }

  createCommonQuestion(){
    if(this.commonQuestionsForm.valid){
      let createQuestionRequest = Object.assign({}, this.commonQuestionsForm.value);
      console.log(createQuestionRequest)
      this.commonquestionsService.createCommonQuestion(createQuestionRequest).subscribe(
        {
          next: value => {
            this.getLawyer();
          },
          error: err => {
            console.log(err);
          }
        }
      )
    }

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

}




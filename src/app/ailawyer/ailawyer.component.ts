import {Component, OnInit} from '@angular/core';
import {AiService} from "../services/ai.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Chat} from "../model/chat";

@Component({
  selector: 'app-ailawyer',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './ailawyer.component.html',
  styleUrl: './ailawyer.component.css'
})
export class AILawyerComponent implements OnInit{

  aiForm!: FormGroup;
  chat: Chat[] = [];

  constructor(private aiService: AiService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.aiForm = this.fb.group({
      userInput: ['',Validators.required]
    })
  }

  getChat(){
    if(this.aiForm.valid){
      let userInput = this.aiForm.get('userInput')?.value;
      this.chat.push({name: "You", message: userInput})
      this.aiService.chat(userInput).subscribe({
        next: value => {
          console.log(value)
          this.chat.push({name: "AI Lawyer", message: value.message});
        },
        error: err => {
          console.log(err);
        }
      })
    }
  }


}

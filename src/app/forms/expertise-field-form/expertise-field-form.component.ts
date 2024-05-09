import {Component, OnInit} from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {ExpertiseFieldService} from "../../services/expertise-field.service";
import {ExpertiseFieldResponse} from "../../model/expertiseFieldResponse";
import {JsonPipe} from "@angular/common";
import {LawyerService} from "../../services/lawyer.service";
import {LawyerResponse} from "../../model/laywerResponse";
import {AddExpertiseFieldRequest} from "../../model/addExpertiseFieldRequest";

@Component({
  selector: 'app-expertise-field-form',
  standalone: true,
  imports: [MatListModule, JsonPipe],
  templateUrl: './expertise-field-form.component.html',
  styleUrl: './expertise-field-form.component.css'
})
export class ExpertiseFieldFormComponent implements OnInit {
  expertiseFields: ExpertiseFieldResponse[] = [];
  selected:string[]= []
  lawyer:LawyerResponse;
  lawyerId = "";

  constructor(private expertiseFieldService: ExpertiseFieldService,private lawyerService: LawyerService) {
  }

  onSelectionChange(expertiseField: ExpertiseFieldResponse) {
    const index = this.selected.indexOf(expertiseField.name);
    if (index === -1) {
      this.selected.push(expertiseField.name);
      let addExpertiseFieldRequest: AddExpertiseFieldRequest = {
        id: this.lawyerId,
        expertiseFieldIdList: [expertiseField.id]
      }
      this.addExpertiseField(addExpertiseFieldRequest);

    } else {
        this.selected.splice(index, 1);
        let addExpertiseFieldRequest: AddExpertiseFieldRequest = {
          id: this.lawyerId,
          expertiseFieldIdList: [expertiseField.id]
        }
      this.removeExpertiseField(addExpertiseFieldRequest);
      }
    console.log("selected arrayı:",this.selected)
  }

  ngOnInit(): void {
    this.lawyerId = localStorage.getItem('id');
    this.getAllExpertiseFields();
    this.getLawyer();
  }

  getAllExpertiseFields() {
    this.expertiseFieldService.getAllExpertiseField().subscribe({
      next: value => {
        this.expertiseFields = [...value];
      }
    })
  }
  getLawyer(){
    this.lawyerService.getLawyer(this.lawyerId).subscribe(
      {
        next: value => {
         value.expertiseFieldResponseList.map(expertiseField => this.selected.push(expertiseField.name))
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }

  addExpertiseField(addExptertiseFieldRequest: AddExpertiseFieldRequest){
    this.lawyerService.addExpertiseField(addExptertiseFieldRequest).subscribe({
      next: value => {

      },
      error: err => {
        console.log(err);
      }
    })
  }
  removeExpertiseField(addExptertiseFieldRequest: AddExpertiseFieldRequest){
    this.lawyerService.removeExpertiseField(addExptertiseFieldRequest).subscribe({
      next: value => {
      },
      error: err => {
        console.log(err);
      }
    })
  }


}

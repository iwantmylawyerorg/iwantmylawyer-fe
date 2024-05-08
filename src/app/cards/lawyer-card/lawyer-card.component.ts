import {Component, OnInit} from '@angular/core';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {MatExpansionModule, MatExpansionPanel} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule} from "@angular/forms";
import {LawyerService} from "../../services/lawyer.service";
import {LawyerGetAllResponse} from "../../model/lawyerGetAllResponse";

@Component({
  selector: 'app-lawyer-card',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    FaIconComponent,
    MatPaginatorModule,
    FormsModule
  ],
  templateUrl: './lawyer-card.component.html',
  styleUrl: './lawyer-card.component.css'
})
export class LawyerCardComponent implements OnInit{
  lawyerGetAll: LawyerGetAllResponse = {content:[]};
  step = 0;
  pageIndex = 0;
  pageSize = 10;
  lawyerName = "";
  lawyerLastName = "";
  city = "";

  searchIcon = faMagnifyingGlass
  protected readonly faHeart = faBars;

  constructor(private lawyerService: LawyerService) {
  }

  setStep(index: number) {
    this.step = index;
  }

  ngOnInit(): void {
    this.getAllLawyers();
  }

  getAllLawyers(){
    this.lawyerService.getAllLawyers(this.pageIndex,this.pageSize,"%20"+this.lawyerName,"%20"+this.lawyerLastName,"%20"+this.city)
      .subscribe({
        next: value => {
          this.lawyerGetAll.content = [...value.content]
        },
        error: err => {
          console.log(err);
        }
      })
  }

}

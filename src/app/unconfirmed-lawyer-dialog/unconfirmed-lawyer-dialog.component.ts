import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {DialogData} from "../pages/manage-users-section/manage-users-section.component";
import {LawyerService} from "../services/lawyer.service";
import {UnconfirmedLawyerResponse} from "../model/unconfirmedLawyerResponse";


@Component({
  selector: 'app-unconfirmed-lawyer-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './unconfirmed-lawyer-dialog.component.html',
  styleUrl: './unconfirmed-lawyer-dialog.component.css'
})
export class UnconfirmedLawyerDialogComponent implements OnInit{
  unconfirmedLawyer:UnconfirmedLawyerResponse;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,private lawyerService: LawyerService) {
  }

  ngOnInit(): void {
    this.getLawyer();
  }

  approveLawyer(){
    this.lawyerService.addRoleToLawyer(this.data.lawyerId).subscribe(
      {
        next: value => {

        },
        error: err => {
          console.log(err);
        }
      }
    )
  }

  getLawyer(){
    this.lawyerService.getUnconfirmedLawyer(this.data.lawyerId).subscribe({
      next: value => {
          this.unconfirmedLawyer = value;
      },error: error => {
        console.log(error);
      }
    })
  }
}






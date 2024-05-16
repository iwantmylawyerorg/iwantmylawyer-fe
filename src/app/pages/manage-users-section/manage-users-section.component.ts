import {Component, OnInit} from '@angular/core';
import {LawyerService} from "../../services/lawyer.service";
import {MatListModule} from "@angular/material/list";
import {LawyerGetAllResponse} from "../../model/lawyerGetAllResponse";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatDividerModule} from "@angular/material/divider";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {UnconfirmedLawyerDialogComponent} from "../../unconfirmed-lawyer-dialog/unconfirmed-lawyer-dialog.component";

export interface DialogData {
  lawyerId: '';
}

@Component({
  selector: 'app-manage-users-section',
  standalone: true,
  imports: [MatListModule, MatPaginator,MatDividerModule,MatButtonModule, MatDialogModule],
  templateUrl: './manage-users-section.component.html',
  styleUrl: './manage-users-section.component.css'
})
export class ManageUsersSectionComponent implements OnInit{
  lawyerGetAll: LawyerGetAllResponse = {content:[],totalElements:0};
  page = 0;
  size = 10;
  ngOnInit(): void {
  }

  constructor(private lawyerService: LawyerService,public dialog: MatDialog) {
    this.getAllUnconfrimedLawyers();
  }

  openDialog(lawyerId: string) {
    const dialogRef = this.dialog.open(UnconfirmedLawyerDialogComponent,{
      data:{
        lawyerId: lawyerId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllUnconfrimedLawyers();
    });
  }


  onPageChange(event: PageEvent) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.getAllUnconfrimedLawyers();
  }

  getAllUnconfrimedLawyers(){
    this.lawyerService.getAllUnconfirmedLawyers(this.page,this.size).subscribe({
      next: value => {
        this.lawyerGetAll.content = [...value.content]
        this.lawyerGetAll.totalElements = value.totalElements;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}

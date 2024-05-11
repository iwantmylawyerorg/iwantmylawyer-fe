import {Component, inject, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {AsyncPipe} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {MatMenuModule} from "@angular/material/menu";
import {Router, RouterLink} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {AILawyerComponent} from "../../ailawyer/ailawyer.component";
import {LawyerResponse} from "../../model/laywerResponse";
import {LawyerService} from "../../services/lawyer.service";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {CreatePostDialogComponent} from "../../create-post-dialog/create-post-dialog.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    FaIconComponent,
    MatMenuModule,
    RouterLink,
    AILawyerComponent,
    MatDialogModule,
  ]
})
export class SidebarComponent implements OnInit {
  faHeart = faBars;
  lawyer: LawyerResponse;
  lawyerId: string;
  role = "";

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private router: Router, private lawyerService: LawyerService,public dialog:MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreatePostDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getLawyerId() {
    if (localStorage.getItem("acces_token")) {
      // @ts-ignore
      this.lawyerId = localStorage.getItem("id")

      return true;
    } else {
      return false
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

  ngOnInit(): void {
    this.getLawyerId()
    this.getLawyerById();
    this.role = localStorage.getItem('role');
  }

  protected readonly localStorage = localStorage;
}

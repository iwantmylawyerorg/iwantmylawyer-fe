import {Component, inject, OnInit} from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {AsyncPipe} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {PostPageComponent} from "../../pages/post-page/post-page.component";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {MatInput} from "@angular/material/input";
import {RouterLink, RouterOutlet} from "@angular/router";
import {ContactInfoFormComponent} from "../../forms/contact-info-form/contact-info-form.component";
import {MatMenuModule} from "@angular/material/menu";
import {
  LawyerCredentialsStepperComponent
} from "../../forms/lawyer-credentials-stepper/lawyer-credentials-stepper.component";
import {AboutMeFormComponent} from "../../forms/about-me-form/about-me-form.component";
import {ExpertiseFieldFormComponent} from "../../forms/expertise-field-form/expertise-field-form.component";
import {LawyerService} from "../../services/lawyer.service";
import {LawyerResponse} from "../../model/laywerResponse";

@Component({
  selector: 'app-settings-sidebar',
  standalone: true,
  imports: [
    AsyncPipe,
    FaIconComponent,
    MatIcon,
    MatIconButton,
    MatListItem,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar,
    PostPageComponent,
    MatInput,
    RouterLink,
    ContactInfoFormComponent,
    MatButtonModule,
    MatMenuModule,
    LawyerCredentialsStepperComponent,
    AboutMeFormComponent,
    ExpertiseFieldFormComponent,
    RouterOutlet
  ],
  templateUrl: './settings-sidebar.component.html',
  styleUrl: './settings-sidebar.component.css'
})
export class SettingsSidebarComponent implements OnInit {
  faHeart = faBars;
  lawyerId = "";
  lawyer:LawyerResponse;

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.lawyerId = localStorage.getItem('id');
    this.getLawyerById();
  }

  constructor(private lawyerService: LawyerService) {
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


  protected readonly localStorage = localStorage;
}

import {Component, inject} from '@angular/core';
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
import {RouterLink} from "@angular/router";
import {ContactInfoFormComponent} from "../../forms/contact-info-form/contact-info-form.component";
import {MatMenuModule} from "@angular/material/menu";
import {
  LawyerCredentialsStepperComponent
} from "../../forms/lawyer-credentials-stepper/lawyer-credentials-stepper.component";
import {AboutMeFormComponent} from "../../forms/about-me-form/about-me-form.component";
import {ExpertiseFieldFormComponent} from "../../forms/expertise-field-form/expertise-field-form.component";

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
    ExpertiseFieldFormComponent
  ],
  templateUrl: './settings-sidebar.component.html',
  styleUrl: './settings-sidebar.component.css'
})
export class SettingsSidebarComponent {
  faHeart = faBars;
  chosenForm = "ActivateAccount";

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  chooseForm(formName:string) {
    this.chosenForm = formName;
  }

}

import {Component, inject} from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {AsyncPipe} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {PostPageComponent} from "../../pages/post-page/post-page.component";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {
  MatStep,
  MatStepLabel,
  MatStepper,
  MatStepperNext,
  MatStepperPrevious,
  StepperOrientation
} from "@angular/material/stepper";
import {RouterLink} from "@angular/router";
import {ContactInfoFormComponent} from "../../forms/contact-info-form/contact-info-form.component";
import {MatMenuModule} from "@angular/material/menu";

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
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatStep,
    MatStepLabel,
    MatStepper,
    MatStepperNext,
    MatStepperPrevious,
    ReactiveFormsModule,
    RouterLink,
    ContactInfoFormComponent,
    MatButtonModule,
    MatMenuModule
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
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  chooseForm(formName:string) {
    this.chosenForm = formName;
  }

}

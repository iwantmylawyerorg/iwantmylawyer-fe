import { Component } from '@angular/core';
import {ResponsiveHeaderComponent} from "../../headers/responsive-header/responsive-header.component";
import {NgClass} from "@angular/common";
import {LawyerCardComponent} from "../../cards/lawyer-card/lawyer-card.component";
import {AILawyerComponent} from "../../ailawyer/ailawyer.component";
import {MatExpansionPanel} from "@angular/material/expansion";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";

@Component({
  selector: 'app-lawyers-page',
  standalone: true,
  imports: [
    ResponsiveHeaderComponent,
    NgClass,
    LawyerCardComponent,
    AILawyerComponent,
    MatExpansionPanel,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    FaIconComponent,
  ],
  templateUrl: './lawyers-page.component.html',
  styleUrl: './lawyers-page.component.css'
})
export class LawyersPageComponent {
  searchIcon = faMagnifyingGlass
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  protected readonly faHeart = faBars;
}

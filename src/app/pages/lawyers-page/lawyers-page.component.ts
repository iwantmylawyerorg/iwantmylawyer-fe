import {Component, OnInit} from '@angular/core';
import {ResponsiveHeaderComponent} from "../../headers/responsive-header/responsive-header.component";
import {NgClass} from "@angular/common";
import {LawyerCardComponent} from "../../cards/lawyer-card/lawyer-card.component";
import {AILawyerComponent} from "../../ailawyer/ailawyer.component";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";


@Component({
  selector: 'app-lawyers-page',
  standalone: true,
  imports: [
    ResponsiveHeaderComponent,
    NgClass,
    LawyerCardComponent,
    AILawyerComponent,
    MatButtonModule,
    MatDatepickerModule,
    FaIconComponent,
  ],
  templateUrl: './lawyers-page.component.html',
  styleUrl: './lawyers-page.component.css'
})
export class LawyersPageComponent{





}

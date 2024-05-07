import { Component } from '@angular/core';
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
    MatPaginatorModule
  ],
  templateUrl: './lawyer-card.component.html',
  styleUrl: './lawyer-card.component.css'
})
export class LawyerCardComponent {
  step = 0;
  searchIcon = faMagnifyingGlass
  protected readonly faHeart = faBars;


  setStep(index: number) {
    this.step = index;
  }
}

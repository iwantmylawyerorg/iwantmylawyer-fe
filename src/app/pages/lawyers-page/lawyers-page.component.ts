import { Component } from '@angular/core';
import {ResponsiveHeaderComponent} from "../../headers/responsive-header/responsive-header.component";
import {NgClass} from "@angular/common";
import {LawyerCardComponent} from "../../cards/lawyer-card/lawyer-card.component";

@Component({
  selector: 'app-lawyers-page',
  standalone: true,
  imports: [
    ResponsiveHeaderComponent,
    NgClass,
    LawyerCardComponent
  ],
  templateUrl: './lawyers-page.component.html',
  styleUrl: './lawyers-page.component.css'
})
export class LawyersPageComponent {
  filterActive:boolean = false;
  handleFilter() {
    this.filterActive = !this.filterActive;
  }
}

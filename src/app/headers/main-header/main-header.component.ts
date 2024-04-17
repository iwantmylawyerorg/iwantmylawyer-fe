import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
  hamActive:boolean = false;


  handleHam() {
    this.hamActive = !this.hamActive;
  }
}

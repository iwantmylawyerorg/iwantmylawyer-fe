import {Component, HostListener} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-responsive-header',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './responsive-header.component.html',
  styleUrl: './responsive-header.component.css'
})
export class ResponsiveHeaderComponent {
  hamActive:boolean = false;
  isSticky: boolean = false;


  handleHam() {
    this.hamActive = !this.hamActive;
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll():void{
    this.isSticky = window.scrollY > 30;
  }
}

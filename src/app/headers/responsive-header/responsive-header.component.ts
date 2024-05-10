import {Component, HostListener, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";
import {MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-responsive-header',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    MatListItem
  ],
  templateUrl: './responsive-header.component.html',
  styleUrl: './responsive-header.component.css'
})
export class ResponsiveHeaderComponent{
  hamActive:boolean = false;
  isSticky: boolean = false;


  handleHam() {
    this.hamActive = !this.hamActive;
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll():void{
    this.isSticky = window.scrollY > 30;
  }

  protected readonly localStorage = localStorage;
}

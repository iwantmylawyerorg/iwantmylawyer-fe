import {Component, HostListener, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";
import {MatListItem} from "@angular/material/list";
import {AuthService} from "../../services/auth.service";

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
  constructor(private authService: AuthService, private router: Router) {
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll():void{
    this.isSticky = window.scrollY > 30;
  }
  logout(){
    this.authService.getLogout();
    localStorage.clear();
    this.router.navigate(['']);
  }

  protected readonly localStorage = localStorage;
}

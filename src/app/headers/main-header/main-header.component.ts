import {Component, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {MatListItem} from "@angular/material/list";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    MatListItem
  ],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent implements OnInit{
  hamActive:boolean = false;
  role = "";


  handleHam() {
    this.hamActive = !this.hamActive;
  }

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
  }
  logout(){
    this.authService.getLogout();
    localStorage.clear();
    this.router.navigate(['']);
  }
  protected readonly localStorage = localStorage;

}

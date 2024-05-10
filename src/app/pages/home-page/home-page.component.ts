import {Component, OnInit} from '@angular/core';

import {RouterLink} from "@angular/router";
import {MainHeaderComponent} from "../../headers/main-header/main-header.component";
import {AILawyerComponent} from "../../ailawyer/ailawyer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MainHeaderComponent,
    RouterLink,
    AILawyerComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
    role = "";
    isLoggedIn = false;
    protected readonly localStorage = localStorage;

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    if(localStorage.getItem('acces_token')){
      this.isLoggedIn = true;
    }
  }
}

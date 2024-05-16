import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {LawyerService} from "../../services/lawyer.service";
import {AuthService} from "../../services/auth.service";
import {DataRowOutlet} from "@angular/cdk/table";

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    RouterOutlet,
    DataRowOutlet,
    RouterLink
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent{

  constructor(private authService: AuthService,private router:Router){}

  logout(){
    this.authService.getLogout();
    localStorage.clear();
    this.router.navigate(['']);
  }


}

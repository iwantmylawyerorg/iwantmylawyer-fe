import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {LawyerService} from "../../services/lawyer.service";

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent{


}

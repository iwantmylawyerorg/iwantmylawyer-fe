import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {SidebarComponent} from "../../headers/sidebar/sidebar.component";
import {AILawyerComponent} from "../../ailawyer/ailawyer.component";

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [
    MatButton,
    FaIconComponent,
    SidebarComponent,
    AILawyerComponent,
  ],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css'
})
export class PostPageComponent {
  faHeart = faHeart;
  protected readonly localStorage = localStorage;
}

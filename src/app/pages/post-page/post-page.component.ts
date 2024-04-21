import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButton} from "@angular/material/button";
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";


@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
    FaIconComponent
  ],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css'
})
export class PostPageComponent {
  faHeart = faHeart;
}

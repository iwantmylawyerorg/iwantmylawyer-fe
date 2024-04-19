import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton
  ],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css'
})
export class PostPageComponent {

}

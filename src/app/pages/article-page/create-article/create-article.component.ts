import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.css'
})
export class CreateArticleComponent {
  headline = '';
  textfield = '';

  constructor(private router: Router) { }

  submitArticle(event: Event) {
    event.preventDefault();
    console.log('Headline: ' + this.headline);
    console.log('Text: ' + this.textfield);
    this.router.navigate(['/article']);
  }

}

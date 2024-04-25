import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [HttpClientModule,RouterModule],
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
  progress: number = 0;
  articleText: string = 'Loading...';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchArticleText();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body, html = document.documentElement;
    const pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.progress = (scrollPosition / (pageHeight - windowHeight)) * 100;
  }

  fetchArticleText() {
    this.http.get('https://cors-anywhere.herokuapp.com/https://loripsum.net/api/12/long/decorate/link/ul/code/bq/headers', { responseType: 'text' })
  .subscribe({
    next: data => this.articleText = data,
    error: err => console.log('Aw shucks, the proxy didnt work')
  });
  }
}
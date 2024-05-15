import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../../services/article.service";
import {ArticleResponse} from "../../model/articleResponse";
import {ResponsiveHeaderComponent} from "../../headers/responsive-header/responsive-header.component";

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [
    ResponsiveHeaderComponent
  ],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.css'
})
export class ArticlePageComponent implements OnInit {
  articleId:string;
  article:ArticleResponse;



  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.articleId = params['id'];
    })
    this.getArticle();
  }

  constructor(private activateRoute: ActivatedRoute,private articleService:ArticleService) {
  }


  getArticle(){
    this.articleService.getArticle(this.articleId).subscribe({
      next: value => {
        this.article = value;
        console.log(value)
      },error: err => {
        console.log(err);
      }
    })
  }
}

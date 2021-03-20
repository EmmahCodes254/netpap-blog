import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Article} from '../article'
import { ARTICLES } from '../mock-articles';
import { ArticleService } from '../article.service'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles():void{
    this.articleService.getArticles().subscribe(articles => (this.articles = articles))
  }
}

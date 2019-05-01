import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Injector } from '@angular/core';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';
import { NewsService } from '../../shared/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Angular 7.x Universal & ASP.NET Core 2.1 advanced starter-kit';
  baseUrl: string;
  news: any;
  errorMessage: string;

  constructor(public translate: TranslateService, private injector: Injector, private newsService: NewsService) {
    this.baseUrl = this.injector.get(ORIGIN_URL);
  }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe(news => {
        this.news = news;
      },
        error => this.errorMessage = <any>error
      );
  }

  public setLanguage(lang) {
    this.translate.use(lang);
  }
}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Injectable, Injector } from '@angular/core';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'Angular 7.x Universal & ASP.NET Core 2.1 advanced starter-kit';
  image: string;
  baseUrl: string;

  constructor(public translate: TranslateService, private injector: Injector) {
    this.baseUrl = this.injector.get(ORIGIN_URL);
  }

  ngOnInit() {
    this.image = `${this.baseUrl}/assets/NHL-Maple-Leafs-celebrate-goal-against-Bruins-1040x572.jpg`;
  }

  public setLanguage(lang) {
    this.translate.use(lang);
  }
}

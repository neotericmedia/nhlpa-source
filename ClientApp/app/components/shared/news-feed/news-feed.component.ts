import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
  encapsulation: ViewEncapsulation.Emulated 
})
export class NewsFeedComponent implements OnInit {

  @Input() item:string;

  constructor() { }

  ngOnInit() {
  }

}

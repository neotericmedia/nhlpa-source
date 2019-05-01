import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-sub',
  templateUrl: './news-sub.component.html',
  styleUrls: ['./news-sub.component.scss']
})
export class NewsSubComponent implements OnInit {

  @Input() news:string;

  constructor() { }

  ngOnInit() {
  }

}

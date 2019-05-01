import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-feature',
  templateUrl: './news-feature.component.html',
  styleUrls: ['./news-feature.component.scss']
})
export class NewsFeatureComponent implements OnInit {

  @Input() news:string;

  constructor() { }

  ngOnInit() {
  }

}

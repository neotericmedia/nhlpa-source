import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extended-news',
  templateUrl: './extended-news.component.html',
  styleUrls: ['./extended-news.component.scss']
})
export class ExtendedNewsComponent implements OnInit {

  @Input() news:string;

  constructor() { }

  ngOnInit() {
  }

}

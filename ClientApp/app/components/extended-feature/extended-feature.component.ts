import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extended-feature',
  templateUrl: './extended-feature.component.html',
  styleUrls: ['./extended-feature.component.scss']
})
export class ExtendedFeatureComponent implements OnInit {

  @Input() news:string;

  constructor() { }

  ngOnInit() {
  }

}

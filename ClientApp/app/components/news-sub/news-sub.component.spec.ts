import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSubComponent } from './news-sub.component';

describe('NewsSubComponent', () => {
  let component: NewsSubComponent;
  let fixture: ComponentFixture<NewsSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

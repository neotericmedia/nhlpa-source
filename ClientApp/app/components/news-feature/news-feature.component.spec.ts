import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeatureComponent } from './news-feature.component';

describe('NewsFeatureComponent', () => {
  let component: NewsFeatureComponent;
  let fixture: ComponentFixture<NewsFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

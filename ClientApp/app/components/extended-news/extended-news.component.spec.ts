import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedNewsComponent } from './extended-news.component';

describe('ExtendedNewsComponent', () => {
  let component: ExtendedNewsComponent;
  let fixture: ComponentFixture<ExtendedNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

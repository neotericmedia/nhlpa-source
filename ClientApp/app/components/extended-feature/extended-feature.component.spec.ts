import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedFeatureComponent } from './extended-feature.component';

describe('ExtendedFeatureComponent', () => {
  let component: ExtendedFeatureComponent;
  let fixture: ComponentFixture<ExtendedFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

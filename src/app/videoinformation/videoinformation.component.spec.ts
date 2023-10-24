import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoinformationComponent } from './videoinformation.component';

describe('VideoinformationComponent', () => {
  let component: VideoinformationComponent;
  let fixture: ComponentFixture<VideoinformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoinformationComponent]
    });
    fixture = TestBed.createComponent(VideoinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

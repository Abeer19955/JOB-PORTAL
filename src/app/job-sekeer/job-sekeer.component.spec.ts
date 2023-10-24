import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSekeerComponent } from './job-sekeer.component';

describe('JobSekeerComponent', () => {
  let component: JobSekeerComponent;
  let fixture: ComponentFixture<JobSekeerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobSekeerComponent]
    });
    fixture = TestBed.createComponent(JobSekeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

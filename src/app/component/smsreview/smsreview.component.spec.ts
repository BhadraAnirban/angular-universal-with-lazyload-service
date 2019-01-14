import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsreviewComponent } from './smsreview.component';

describe('SmsreviewComponent', () => {
  let component: SmsreviewComponent;
  let fixture: ComponentFixture<SmsreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

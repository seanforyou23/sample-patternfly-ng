import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayUpdaterComponent } from './birthday-updater.component';

describe('BirthdayUpdaterComponent', () => {
  let component: BirthdayUpdaterComponent;
  let fixture: ComponentFixture<BirthdayUpdaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayUpdaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

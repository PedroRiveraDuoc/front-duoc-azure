import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenalVitalComponent } from './senal-vital.component';

describe('SenalVitalComponent', () => {
  let component: SenalVitalComponent;
  let fixture: ComponentFixture<SenalVitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenalVitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenalVitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

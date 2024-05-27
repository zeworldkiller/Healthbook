import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthJournalComponent } from './health-journal.component';

describe('HealthJournalComponent', () => {
  let component: HealthJournalComponent;
  let fixture: ComponentFixture<HealthJournalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthJournalComponent]
    });
    fixture = TestBed.createComponent(HealthJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

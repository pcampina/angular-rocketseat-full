import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubject } from './behavior-subject';

describe('BehaviorSubject', () => {
  let component: BehaviorSubject;
  let fixture: ComponentFixture<BehaviorSubject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorSubject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorSubject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorContext } from './behavior-context';

describe('BehaviorContext', () => {
  let component: BehaviorContext;
  let fixture: ComponentFixture<BehaviorContext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorContext]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorContext);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCount } from './products-count';

describe('ProductsCount', () => {
  let component: ProductsCount;
  let fixture: ComponentFixture<ProductsCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

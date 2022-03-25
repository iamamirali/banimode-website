import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpecsTabComponent } from './product-specs-tab.component';

describe('ProductSpecsTabComponent', () => {
  let component: ProductSpecsTabComponent;
  let fixture: ComponentFixture<ProductSpecsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSpecsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSpecsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

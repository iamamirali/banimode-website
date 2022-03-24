import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeaturesTabComponent } from './product-features-tab.component';

describe('FeaturesTabComponent', () => {
  let component: ProductFeaturesTabComponent;
  let fixture: ComponentFixture<ProductFeaturesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFeaturesTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFeaturesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

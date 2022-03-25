import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCommentsTabComponent } from './product-comments-tab.component';

describe('ProductCommentsTabComponent', () => {
  let component: ProductCommentsTabComponent;
  let fixture: ComponentFixture<ProductCommentsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCommentsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCommentsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

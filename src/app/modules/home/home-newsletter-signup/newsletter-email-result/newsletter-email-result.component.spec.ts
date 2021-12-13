import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterEmailResultComponent } from './newsletter-email-result.component';

describe('NewsletterEmailResultComponent', () => {
  let component: NewsletterEmailResultComponent;
  let fixture: ComponentFixture<NewsletterEmailResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterEmailResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterEmailResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

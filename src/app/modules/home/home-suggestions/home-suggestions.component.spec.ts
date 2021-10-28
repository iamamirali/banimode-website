import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSuggestionsComponent } from './home-suggestions.component';

describe('HomeSuggestionsComponent', () => {
  let component: HomeSuggestionsComponent;
  let fixture: ComponentFixture<HomeSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

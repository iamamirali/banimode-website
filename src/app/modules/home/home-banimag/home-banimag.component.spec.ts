import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBanimagComponent } from './home-banimag.component';

describe('HomeBanimagComponent', () => {
  let component: HomeBanimagComponent;
  let fixture: ComponentFixture<HomeBanimagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBanimagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBanimagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

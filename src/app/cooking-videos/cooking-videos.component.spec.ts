import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingVideosComponent } from './cooking-videos.component';

describe('CookingVideosComponent', () => {
  let component: CookingVideosComponent;
  let fixture: ComponentFixture<CookingVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEntertainmentComponent } from './news-entertainment.component';

describe('NewsEntertainmentComponent', () => {
  let component: NewsEntertainmentComponent;
  let fixture: ComponentFixture<NewsEntertainmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsEntertainmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

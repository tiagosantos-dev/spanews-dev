import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSportsComponent } from './news-sports.component';

describe('NewsSportsComponent', () => {
  let component: NewsSportsComponent;
  let fixture: ComponentFixture<NewsSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

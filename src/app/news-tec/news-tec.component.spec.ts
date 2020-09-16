import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTecComponent } from './news-tec.component';

describe('NewsTecComponent', () => {
  let component: NewsTecComponent;
  let fixture: ComponentFixture<NewsTecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotMyHomeComponent } from './not-my-home.component';

describe('NotMyHomeComponent', () => {
  let component: NotMyHomeComponent;
  let fixture: ComponentFixture<NotMyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotMyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotMyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

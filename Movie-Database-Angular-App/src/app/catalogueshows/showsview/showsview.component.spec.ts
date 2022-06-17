import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsviewComponent } from './showsview.component';

describe('ShowsviewComponent', () => {
  let component: ShowsviewComponent;
  let fixture: ComponentFixture<ShowsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

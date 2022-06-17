import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultisearchviewComponent } from './multisearchview.component';

describe('MultisearchviewComponent', () => {
  let component: MultisearchviewComponent;
  let fixture: ComponentFixture<MultisearchviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultisearchviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultisearchviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

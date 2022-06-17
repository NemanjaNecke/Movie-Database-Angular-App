import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreshowsviewComponent } from './genreshowsview.component';

describe('GenreshowsviewComponent', () => {
  let component: GenreshowsviewComponent;
  let fixture: ComponentFixture<GenreshowsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreshowsviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreshowsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

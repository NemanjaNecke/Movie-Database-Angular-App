import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreshowsComponent } from './genreshows.component';

describe('GenreshowsComponent', () => {
  let component: GenreshowsComponent;
  let fixture: ComponentFixture<GenreshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreshowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

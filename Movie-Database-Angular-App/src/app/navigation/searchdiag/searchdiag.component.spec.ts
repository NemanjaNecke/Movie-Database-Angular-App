import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdiagComponent } from './searchdiag.component';

describe('SearchdiagComponent', () => {
  let component: SearchdiagComponent;
  let fixture: ComponentFixture<SearchdiagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchdiagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

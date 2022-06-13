import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchgenresComponent } from './searchgenres.component';

describe('SearchgenresComponent', () => {
  let component: SearchgenresComponent;
  let fixture: ComponentFixture<SearchgenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchgenresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchgenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

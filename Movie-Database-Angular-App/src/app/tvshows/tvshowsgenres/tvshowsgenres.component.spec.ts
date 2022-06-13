import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsgenresComponent } from './tvshowsgenres.component';

describe('TvshowsgenresComponent', () => {
  let component: TvshowsgenresComponent;
  let fixture: ComponentFixture<TvshowsgenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvshowsgenresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowsgenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

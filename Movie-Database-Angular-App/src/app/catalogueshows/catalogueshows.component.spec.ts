import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueshowsComponent } from './catalogueshows.component';

describe('CatalogueshowsComponent', () => {
  let component: CatalogueshowsComponent;
  let fixture: ComponentFixture<CatalogueshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueshowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

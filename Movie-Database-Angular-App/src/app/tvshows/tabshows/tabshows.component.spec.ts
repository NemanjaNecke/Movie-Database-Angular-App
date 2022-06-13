import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabshowsComponent } from './tabshows.component';

describe('TabshowsComponent', () => {
  let component: TabshowsComponent;
  let fixture: ComponentFixture<TabshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabshowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

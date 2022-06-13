import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabshowviewComponent } from './tabshowview.component';

describe('TabshowviewComponent', () => {
  let component: TabshowviewComponent;
  let fixture: ComponentFixture<TabshowviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabshowviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabshowviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

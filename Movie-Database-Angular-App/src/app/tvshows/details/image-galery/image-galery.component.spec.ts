import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGaleryShowsComponent } from './image-galery.component';

describe('ImageGaleryComponent', () => {
  let component: ImageGaleryShowsComponent;
  let fixture: ComponentFixture<ImageGaleryShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageGaleryShowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGaleryShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

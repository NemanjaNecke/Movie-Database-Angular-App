import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogDataComponent } from 'src/app/movie-detail/image-gallery/dialog-data/dialog-data.component';
import { MovieImages } from 'src/app/movies/movie';

@Component({
  selector: 'app-image-galery',
  templateUrl: './image-galery.component.html',
  styleUrls: ['./image-galery.component.scss']
})
export class ImageGaleryShowsComponent implements OnInit {

  @Input() images!: MovieImages;
  imgPath = 'http://image.tmdb.org/t/p/w780/';
  constructor(public dialog: MatDialog) { }
  
  ngOnInit(): void {
   
  }
  openDialog(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
     imgUrl: this.imgPath,
     images: id
    }
    this.dialog.open(DialogDataComponent, dialogConfig)
  }


}

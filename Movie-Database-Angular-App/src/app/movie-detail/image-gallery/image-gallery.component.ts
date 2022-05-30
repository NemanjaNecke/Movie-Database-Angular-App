import { MovieImages } from './../../movies/movie';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogDataComponent } from './dialog-data/dialog-data.component';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
 
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

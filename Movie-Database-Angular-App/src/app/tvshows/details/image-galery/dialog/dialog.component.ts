import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


export interface DialogData {
  imgUrl: string,
  images: string
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  url!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private dialogRef: MatDialogRef<DialogComponent>) {
    this.url = data.imgUrl + data.images;
  }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
}
}

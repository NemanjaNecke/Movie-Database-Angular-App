
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  imgUrl: string,
  images: string
}
@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.scss']
})
export class DialogDataComponent implements OnInit {
  url!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private dialogRef: MatDialogRef<DialogDataComponent>) {
    this.url = data.imgUrl + data.images;
  }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
}
}

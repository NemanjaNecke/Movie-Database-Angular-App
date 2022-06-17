import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  value: string;
}

@Component({
  selector: 'app-searchdiag',
  templateUrl: './searchdiag.component.html',
  styleUrls: ['./searchdiag.component.scss']
})
export class SearchdiagComponent implements OnInit {
  value!:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private dialogRef: MatDialogRef<SearchdiagComponent>) { }
  @Output() search: EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
  }
  searchAll(value: string) {
    this.dialogRef.close(value)
    
  }
}

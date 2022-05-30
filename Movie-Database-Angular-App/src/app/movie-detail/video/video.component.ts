import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() site!: any;
  @Input() key: string | null = null;


  constructor() { }

  ngOnInit(): void {

  }

  

}

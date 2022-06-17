import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-show',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoShowsComponent implements OnInit {
  @Input() site!: any;
  @Input() key: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}

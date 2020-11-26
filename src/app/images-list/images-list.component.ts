import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../app.component';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css'],
})
export class ImagesListComponent implements OnInit {
  @Input() images: Image[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

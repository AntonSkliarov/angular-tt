import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Image {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  fullHDURL: string;
  imageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  favorites: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css'],
})
export class ImagesListComponent implements OnInit {
  appTitle = 'Angular Test Task';
  imagesList;

  constructor(private http: HttpClient) {}

  public images = [];

  ngOnInit() {
    this.http
      .get<any>(
        'https://pixabay.com/api/?key=19263689-03b29d7c418392128dadd7665&q=yellow+flowers&image_type=photo'
      )
      .subscribe((data) => {
        this.imagesList = data.hits;
      });
  }
}

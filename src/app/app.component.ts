import { Component, OnInit } from '@angular/core';
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  appTitle = 'Angular Test Task';
  imagesList;

  constructor(private http: HttpClient) {}

  public images = [
    {
      id: 195893,
      pageURL: 'https://pixabay.com/en/blossom-bloom-flower-195893/',
      type: 'photo',
      tags: 'blossom, bloom, flower',
      previewURL:
        'https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg',
      previewWidth: 150,
      previewHeight: 84,
      webformatURL: 'https://pixabay.com/get/35bbf209e13e39d2_640.jpg',
      webformatWidth: 640,
      webformatHeight: 360,
      largeImageURL: 'https://pixabay.com/get/ed6a99fd0a76647_1280.jpg',
      fullHDURL: 'https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg',
      imageURL: 'https://pixabay.com/get/ed6a9364a9fd0a76647.jpg',
      imageWidth: 4000,
      imageHeight: 2250,
      imageSize: 4731420,
      views: 7671,
      downloads: 6439,
      favorites: 1,
      likes: 5,
      comments: 2,
      user_id: 48777,
      user: 'Josch13',
      userImageURL:
        'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg',
    },
    {
      id: 195894,
      pageURL: 'https://pixabay.com/en/blossom-bloom-flower-195893/',
      type: 'photo',
      tags: 'blossom, bloom, flower',
      previewURL:
        'https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg',
      previewWidth: 150,
      previewHeight: 84,
      webformatURL: 'https://pixabay.com/get/35bbf209e13e39d2_640.jpg',
      webformatWidth: 640,
      webformatHeight: 360,
      largeImageURL: 'https://pixabay.com/get/ed6a99fd0a76647_1280.jpg',
      fullHDURL: 'https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg',
      imageURL: 'https://pixabay.com/get/ed6a9364a9fd0a76647.jpg',
      imageWidth: 4000,
      imageHeight: 2250,
      imageSize: 4731420,
      views: 7671,
      downloads: 6439,
      favorites: 1,
      likes: 5,
      comments: 2,
      user_id: 48777,
      user: 'Bob',
      userImageURL:
        'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg',
    },
    {
      id: 195895,
      pageURL: 'https://pixabay.com/en/blossom-bloom-flower-195893/',
      type: 'photo',
      tags: 'blossom, bloom, flower',
      previewURL:
        'https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg',
      previewWidth: 150,
      previewHeight: 84,
      webformatURL: 'https://pixabay.com/get/35bbf209e13e39d2_640.jpg',
      webformatWidth: 640,
      webformatHeight: 360,
      largeImageURL: 'https://pixabay.com/get/ed6a99fd0a76647_1280.jpg',
      fullHDURL: 'https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg',
      imageURL: 'https://pixabay.com/get/ed6a9364a9fd0a76647.jpg',
      imageWidth: 4000,
      imageHeight: 2250,
      imageSize: 4731420,
      views: 7671,
      downloads: 6439,
      favorites: 1,
      likes: 5,
      comments: 2,
      user_id: 48777,
      user: 'Jim',
      userImageURL:
        'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg',
    },
  ];

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

// public images = [
//   {
//     id: 195893,
//     pageURL: 'https://pixabay.com/en/blossom-bloom-flower-195893/',
//     type: 'photo',
//     tags: 'blossom, bloom, flower',
//     previewURL:
//       'https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg',
//     previewWidth: 150,
//     previewHeight: 84,
//     webformatURL: 'https://pixabay.com/get/35bbf209e13e39d2_640.jpg',
//     webformatWidth: 640,
//     webformatHeight: 360,
//     largeImageURL: 'https://pixabay.com/get/ed6a99fd0a76647_1280.jpg',
//     fullHDURL: 'https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg',
//     imageURL: 'https://pixabay.com/get/ed6a9364a9fd0a76647.jpg',
//     imageWidth: 4000,
//     imageHeight: 2250,
//     imageSize: 4731420,
//     views: 7671,
//     downloads: 6439,
//     favorites: 1,
//     likes: 5,
//     comments: 2,
//     user_id: 48777,
//     user: 'Josch13',
//     userImageURL:
//       'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg',
//   },
//   {
//     id: 195894,
//     pageURL: 'https://pixabay.com/en/blossom-bloom-flower-195893/',
//     type: 'photo',
//     tags: 'blossom, bloom, flower',
//     previewURL:
//       'https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg',
//     previewWidth: 150,
//     previewHeight: 84,
//     webformatURL: 'https://pixabay.com/get/35bbf209e13e39d2_640.jpg',
//     webformatWidth: 640,
//     webformatHeight: 360,
//     largeImageURL: 'https://pixabay.com/get/ed6a99fd0a76647_1280.jpg',
//     fullHDURL: 'https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg',
//     imageURL: 'https://pixabay.com/get/ed6a9364a9fd0a76647.jpg',
//     imageWidth: 4000,
//     imageHeight: 2250,
//     imageSize: 4731420,
//     views: 7671,
//     downloads: 6439,
//     favorites: 1,
//     likes: 5,
//     comments: 2,
//     user_id: 48777,
//     user: 'Bob',
//     userImageURL:
//       'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg',
//   },
//   {
//     id: 195895,
//     pageURL: 'https://pixabay.com/en/blossom-bloom-flower-195893/',
//     type: 'photo',
//     tags: 'blossom, bloom, flower',
//     previewURL:
//       'https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg',
//     previewWidth: 150,
//     previewHeight: 84,
//     webformatURL: 'https://pixabay.com/get/35bbf209e13e39d2_640.jpg',
//     webformatWidth: 640,
//     webformatHeight: 360,
//     largeImageURL: 'https://pixabay.com/get/ed6a99fd0a76647_1280.jpg',
//     fullHDURL: 'https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg',
//     imageURL: 'https://pixabay.com/get/ed6a9364a9fd0a76647.jpg',
//     imageWidth: 4000,
//     imageHeight: 2250,
//     imageSize: 4731420,
//     views: 7671,
//     downloads: 6439,
//     favorites: 1,
//     likes: 5,
//     comments: 2,
//     user_id: 48777,
//     user: 'Jim',
//     userImageURL:
//       'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg',
//   },
// ];

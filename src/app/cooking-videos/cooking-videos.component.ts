import { Component, OnInit } from '@angular/core';
import { Videos } from '../interfaces/videos';

import { VideoService } from '../video.service';

@Component({
  selector: 'app-cooking-videos',
  templateUrl: './cooking-videos.component.html',
  styleUrls: ['./cooking-videos.component.css'],
})
export class CookingVideosComponent implements OnInit {
  basicsArray: Videos[] = [];
  lessonsArray: Videos[] = [];
  breakfastArray: Videos[] = [];
  lunchArray: Videos[] = [];
  dinnerArray: Videos[] = [];
  snacksArray: Videos[] = [];
  teensArray: Videos[] = [];
  collegeArray: Videos[] = [];
  responsiveOptions: {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
  }[];

  showIndex: number = 1;

  constructor(private videoService: VideoService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.basicsArray = this.videoService.getArray(
      this.videoService.kidCookingBasics
    );
    console.log(this.basicsArray);

    this.lessonsArray = this.videoService.getArray(
      this.videoService.cookingLessons
    );

    this.breakfastArray = this.videoService.getArray(
      this.videoService.breakfastArray
    );

    this.lunchArray = this.videoService.getArray(this.videoService.lunchArray);

    this.dinnerArray = this.videoService.getArray(
      this.videoService.dinnerArray
    );

    this.snacksArray = this.videoService.getArray(
      this.videoService.snacksArray
    );

    this.teensArray = this.videoService.getArray(this.videoService.teensArray);

    this.collegeArray = this.videoService.getArray(
      this.videoService.collegeArray
    );
  }

  setShowIndex = (index: number) => {
    this.showIndex = index;
  };
}

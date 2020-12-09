import { Component, OnInit } from '@angular/core';
import { Videos } from '../interfaces/videos';
import { RecipeService } from '../recipe.service';
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
  // videoId: string | null = null;
  constructor(private videoService: VideoService) {}

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
}

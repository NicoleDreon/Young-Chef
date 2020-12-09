import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-cooking-videos',
  templateUrl: './cooking-videos.component.html',
  styleUrls: ['./cooking-videos.component.css'],
})
export class CookingVideosComponent implements OnInit {
  basicsArray: string[] = [];
  // videoId: string | null = null;
  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.basicsArray = this.videoService.getArray(
      this.videoService.kidCookingBasics
    );
    console.log(this.basicsArray);
  }
}

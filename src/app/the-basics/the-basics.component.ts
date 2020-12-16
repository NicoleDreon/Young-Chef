import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-basics',
  templateUrl: './the-basics.component.html',
  styleUrls: ['./the-basics.component.css'],
})
export class TheBasicsComponent implements OnInit {
  showIndex: number = 1;
  imageModal: boolean = false;
  currentImage: any;
  healthSafety = [
    {
      src: '/assets/Kitchen Safety/Cutting_Boards_and_Food_Safety.jpg',
      alt: 'Cutting Board Safety',
    },
    {
      src: '/assets/Kitchen Safety/How to Sanitize vs Disinfect.jpg',
      alt: 'How to Sanitize vs Disinfect',
    },
    {
      src: '/assets/Kitchen Safety/10-Least-Wanted-Poster-English.jpg',
      alt: 'Fight BAC',
    },
    {
      src: '/assets/Kitchen Safety/BFS_ChillAd.jpg',
      alt: 'BFS Chill',
    },
    {
      src: '/assets/Kitchen Safety/BFS_CleanAd.jpg',
      alt: 'BFS Clean Ad',
    },
    {
      src: '/assets/Kitchen Safety/BFS_CookAd.jpg',
      alt: 'BFS Cook Ad',
    },
    {
      src: '/assets/Kitchen Safety/BFSSeparateAd.jpg',
      alt: 'BFS Seperate',
    },
    {
      src: '/assets/Kitchen Safety/IsItDoneYet_poster.jpg',
      alt: 'Is It Done Yet?',
    },
  ];

  kitchenTools = [
    {
      src: 'assets/Kitchen Tools/Kitchen-Utensils-Part1.jpg',
      alt: 'Kitchen Utensils - Part 1',
    },
    {
      src: 'assets/Kitchen Tools/Kitchen-Utensils-Part2.jpg',
      alt: 'Kitchen Utensils - Part 2',
    },
    {
      src: 'assets/Kitchen Tools/In-the-Kitchen-part1.jpg',
      alt: 'In the Kitchen - Part 1',
    },
    {
      src: 'assets/Kitchen Tools/In-the-Kitchen-part2.jpg',
      alt: 'In the Kitchen - Part 2',
    },
  ];

  kitchenMeasurements = [
    {
      src: '/assets/Measurements/lze_large_1889_2_600x.jpg',
      alt: 'Measuring Dry Ingredients',
    },
    {
      src: '/assets/Measurements/lze_large_1889_3_600x.jpg',
      alt: 'Liquid Ingredients',
    },
    {
      src: '/assets/Measurements/lze_large_1889_4_1200x.jpg',
      alt: 'Measuring Spoons',
    },
    {
      src: '/assets/Measurements/lze_large_1889_5_1200x.jpg',
      alt: 'Metric Measurements',
    },
    {
      src: '/assets/Measurements/lze_large_1889_6_1200x.jpg',
      alt: 'Solid Measurements',
    },
    {
      src: '/assets/Measurements/lze_large_1889_7_1200x.jpg',
      alt: 'Units of Measurements',
    },
  ];

  tipsTricks = [
    {
      src: '/assets/Tips & Tricks/sodium_math_poster.jpg',
      alt: 'Sodium Math',
    },
    {
      src:
        '/assets/Tips & Tricks/sugarmath_copy_850a8f8f-68dd-4fb6-9265-f4523252aafe.jpg',
      alt: 'Sugar Math',
    },
    {
      src: '/assets/Tips & Tricks/TheRightOnion.jpg',
      alt: 'Using the Right Onion',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  setShowIndex = (index: number) => {
    this.showIndex = index;
  };

  toggleModal = () => {
    this.imageModal = !this.imageModal;
  };

  setCurrentImage = (src: string, alt: string) => {
    this.toggleModal();
    this.currentImage = {
      src: src,
      alt: alt,
    };
  };
} // end of export

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-basics',
  templateUrl: './the-basics.component.html',
  styleUrls: ['./the-basics.component.css'],
})
export class TheBasicsComponent implements OnInit {
  showIndex: number = 1;
  constructor() {}

  ngOnInit(): void {}

  setShowIndex = (index: number) => {
    this.showIndex = index;
  };
}

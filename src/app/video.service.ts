import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  kidCookingBasics = [
    'jjntUTOCWJw',
    'wTVAalOpJgQ',
    'DTK-uWx_VQo',
    'VjINuQX4hbM',
    'OMRUIrbZDpM',
    'D5YsCyWHufE',
    'wszRf0A3btk',
    'QVtwhOHLP44',
    '4YB-y4hakN8',
    'DCqYoL1a3a4',
    'FccOg9rVr-U',
    'eX2d_BnEve8',
    'eJXNmtsbZRo',
  ];
  cookingLessons = [
    'Sq3Pg7QSi8M',
    'vrpof_QQUe0',
    'xze8atBaVEY',
    '7TiMhu7nDdU',
    '7rLP0ZG0Fps',
    'zrXWIWlF5_M',
    '-1FNuNfOB0E',
    'Wxl9RSwTjoE',
    'WAji6qO0wkU',
    'NCZaq9pSBxQ',
  ];
  breakfastArray = [
    'DqhqIfHww7g',
    'IE50VzCkVLk',
    'qhVXpyEhLRA',
    'Pjt50NbcH_I',
    'WRzq-rAKU4s',
    'oEaIPmoQt-o',
    's2bOI6qOok0',
    'YZrfsu6rzPE',
    'JoU3hkyZ8e8',
    '_WHPW1QZ414',
  ];
  lunchArray = [
    'Sq3Pg7QSi8M',
    '5TwwFQMrLH4',
    'l1IGkj5asmM',
    'LPxkHgMoKK8',
    'CNuLdQsW7sM',
    'nwEpNiSSjd8',
    'H4rsu1D-mJQ',
    'QuMi6_lyPtY',
    'MM5bo0YFq5k',
    'i3RCJgz3Xtw',
  ];
  dinnerArray = [
    'i3RCJgz3Xtw',
    'GNyf_RXnPic',
    'oDIH0wHKkYo',
    'H3WZcZX1KwQ',
    'V2LXrlFMH-g',
    'wOHjnQi9fvc',
    'XCxhX2miwgs',
    'ESQ6d611pDA',
    'LmBI4aMi1ck',
    'Sq3Pg7QSi8M',
  ];
  snacksArray = [
    'JTuvGzutF_8',
    'zrXWIWlF5_M',
    'ilzdSj2dJoY',
    'w4EZgaC5VWc',
    'RWrYGwTn4qI',
    '4-NBWDhjiOY',
    'JTuvGzutF_8',
    'M7IzT1yu1jc',
    'UInIVFql7IY',
    '6CD6riW-j3Q',
  ];
  teensArray = [
    '4Ygl3iK3sq8',
    'Rycnm-Fb_hw',
    '5wDBopPKZhg',
    'OpIO2fNLy5U',
    'vwkzb3FIa5E',
    'iKQvGSXoO4o',
    'f_eWOA9sko4',
    'Xf6N_Be7kaI',
    'LtTgBK4tQ4M',
    'Sa9kfVTGzY4',
    'iTg3WZLlYpo',
    'dqAY6W2iQic',
    'ZqmXupCPChY',
    'oCdpC2-4aWs',
    'P6zq8dBM8yw',
  ];
  collegeArray = [
    'ydbMAFaA6Uw',
    'b_ZkDJLrGHc',
    'DkyKuQBXurE',
    '93iL5cR2SEQ',
    '-ZMevpv7T2s',
    '_TdemdsAZco',
    'kSAyY6e0icI',
    'IlZluRmjiB8',
    '6qk9UHCIWGs',
    'Vv--GCeis5k',
    'dqAY6W2iQic',
    'ZqmXupCPChY',
  ];

  constructor() {}

  getArray = (videoArray: string[]) => {
    return videoArray;
  };
}

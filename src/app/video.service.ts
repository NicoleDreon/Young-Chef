import { Injectable } from '@angular/core';
import { Videos } from './interfaces/videos';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  kidCookingBasics = [
    {
      title:
        '4 Cooking Skills Every Kid Should Know - Basic Cooking Skills for Kids',
      id: 'jjntUTOCWJw',
    },
    {
      title:
        'Cooking Class: Easy Way to Teach Kids to use Knives from Kids Cook Real Food',
      id: 'wTVAalOpJgQ',
    },
    {
      title: 'Whats the Difference Between Fruits and Vegetables?',
      id: 'DTK-uWx_VQo',
    },
    {
      title: 'How To Slice Every Fruit | Method Mastery | Epicurious',
      id: 'VjINuQX4hbM',
    },
    {
      title: 'How To Cook Pasta Properly ( Step by Step Pasta Cooking )',
      id: 'OMRUIrbZDpM',
    },
    // {
    //   title: 'How to Measure - for Kids!',
    //   id: 'D5YsCyWHufE',
    // },
    // {
    //   title: 'Kitchen Math',
    //   id: 'wszRf0A3btk',
    // },
    // {
    //   title: 'How to Keep Kids SAFE in the Kitchen',
    //   id: 'QVtwhOHLP44',
    // },
    // {
    //   title: 'Cooking Verbs',
    //   id: '4YB-y4hakN8',
    // },
    // {
    //   title: 'Cooking Up Fractions Series',
    //   id: 'DCqYoL1a3a4',
    // },
    // {
    //   title:
    //     'Kitchen Tools: Useful List of Essential Kitchen Utensils in English with Pictures',
    //   id: 'FccOg9rVr-U',
    // },
    // {
    //   title:
    //     'Kitchen Tools and Equipment | Appetizer | Cookery | TLE | Ms. Arl',
    //   id: 'eX2d_BnEve8',
    // },
    // {
    //   title: '"Team Cooking" - A story about teamwork in a kitchen',
    //   id: 'eJXNmtsbZRo',
    // },
  ];
  cookingLessons = [
    {
      title: 'Meals Kids can COOK!',
      id: 'Sq3Pg7QSi8M',
    },
    {
      title: '5 Easy 2-Ingredient Recipes',
      id: 'vrpof_QQUe0',
    },
    {
      title: 'How to Bake Cupcakes -- Cooking for Kids',
      id: 'xze8atBaVEY',
    },
    {
      title: 'Easy Homemade Ice Cream | Full-Time Kid | PBS Parents',
      id: '7TiMhu7nDdU',
    },
    {
      title: 'Teaching Kids to Work ~ 3-year-old Making Scrambled Eggs',
      id: '7rLP0ZG0Fps',
    },
    // {
    //   title: 'EAT | 5 Homework Snacks Kids Can Make!!',
    //   id: 'zrXWIWlF5_M',
    // },
    // {
    //   title: 'How To Cook The Perfect Egg - Kids Cooking Lessons',
    //   id: '-1FNuNfOB0E',
    // },
    // {
    //   title:
    //     'Healthy Travel Snacks for Families from Kids Cook Real Food (Cooking Classes for Kids)',
    //   id: 'Wxl9RSwTjoE',
    // },
    // {
    //   title: 'Cooking Camps for Kids',
    //   id: 'WAji6qO0wkU',
    // },
    // {
    //   title: '15 Cooking Tricks Chefs Reveal Only at Culinary Schools',
    //   id: 'NCZaq9pSBxQ',
    // },
  ];
  breakfastArray = [
    {
      title: 'EAT | 3 Breakfasts Your Kids Can Cook Themselves',
      id: 'DqhqIfHww7g',
    },
    {
      title: 'Quick and easy breakfast recipe for kids and teens',
      id: 'IE50VzCkVLk',
    },
    {
      title: 'Teaching Kids How to Make Scrambled Eggs',
      id: 'qhVXpyEhLRA',
    },
    {
      title: 'Breakfast Ideas for Kids! - MOMMY MONDAY',
      id: 'Pjt50NbcH_I',
    },
    {
      title: 'EAT | 3 Mothers Day Breakfasts Kids Can Make',
      id: 'WRzq-rAKU4s',
    },
    {
      title: 'How to Make Easy Pancakes with 6yo Achilla | Cooking with Kids',
      id: 'oEaIPmoQt-o',
    },
    {
      title: 'HOW TO make easy French Toast for KIDS - Fun and Easy recipes',
      id: 's2bOI6qOok0',
    },
    {
      title: 'Lets Cook! Life Skills - Kids with Autism - Toast with Margarine',
      id: 'YZrfsu6rzPE',
    },
    {
      title: 'Kids Kitchen: How to Make a Simple Fruit Salad',
      id: 'JoU3hkyZ8e8',
    },
    {
      title:
        'HOW TO MAKE AMERICAN-STYLE OATMEAL | Easy Recipes for Kids to Make',
      id: '_WHPW1QZ414',
    },
  ];
  lunchArray = [
    {
      title: 'Meals Kids can COOK!',
      id: 'Sq3Pg7QSi8M',
    },
    {
      title: 'Kid Size Cooking: Easy Crock Pot Mac and Cheese',
      id: '5TwwFQMrLH4',
    },
    {
      title: 'Kids learn to cook Krafts Unicorn MAC n cheese',
      id: 'l1IGkj5asmM',
    },
    {
      title: 'Veggie Pizza | Kids Baking | How to make a pizza',
      id: 'LPxkHgMoKK8',
    },
    {
      title: 'Easy Pizza for KIDS!',
      id: 'CNuLdQsW7sM',
    },
    {
      title:
        'How To Make Tacos For TACO TUESDAY! | FOOD EATS KID | Universal Kids',
      id: 'nwEpNiSSjd8',
    },
    {
      title:
        'Lets Cook! Life Skills - Kids with Autism - Peanut Butter and Jam Sandwich (Level 3)',
      id: 'H4rsu1D-mJQ',
    },
    {
      title: 'How to Make a Salad | Easy and For Kids |',
      id: 'QuMi6_lyPtY',
    },
    {
      title:
        'How To Make A Grilled Cheese Sandwich! | FOOD EATS KID | Universal Kids',
      id: 'MM5bo0YFq5k',
    },
    {
      title:
        'Best Chicken Fettuccine Alfredo Recipe || Family Fun Pack Cooking with Chris',
      id: 'i3RCJgz3Xtw',
    },
  ];
  dinnerArray = [
    {
      title: 'Best Chicken Fettuccine Alfredo Recipe',
      id: 'i3RCJgz3Xtw',
    },
    {
      title: 'Cheesy Chicken & Rice Dinner Recipe',
      id: 'GNyf_RXnPic',
    },
    {
      title: 'Kid Size Cooking: Broccoli Cheddar Soup',
      id: 'oDIH0wHKkYo',
    },
    {
      title: 'Kids Make Taco Pizzas! Kids Cook Dinner | Clintus.tv',
      id: 'H3WZcZX1KwQ',
    },
    {
      title:
        'Kid Size Cooking Making Gyoza Japanese Dumpling with Ryans Family Review',
      id: 'V2LXrlFMH-g',
    },
    {
      title: 'Kid Size Cooking: Pita Bread Pizza',
      id: 'wOHjnQi9fvc',
    },
    {
      title: 'Ruby teaching kids to cook #1',
      id: 'XCxhX2miwgs',
    },
    {
      title: 'Video for kids. Kids cook a Thanksgiving Day turkey',
      id: 'ESQ6d611pDA',
    },
    {
      title: '30 Easy Recipes Kids Will Love | Kid Friendly Recipe Super Comp',
      id: 'LmBI4aMi1ck',
    },
    {
      title: 'Meals Kids can COOK!',
      id: 'Sq3Pg7QSi8M',
    },
  ];
  snacksArray = [
    {
      title: 'EDIBLE COOKIE DOUGH Recipe!  SOOO GOOD!!!',
      id: 'JTuvGzutF_8',
    },
    {
      title: 'EAT | 5 Homework Snacks Kids Can Make!!',
      id: 'zrXWIWlF5_M',
    },
    {
      title: 'Easy Recipes Kids Can Make - Part 1 | Swaras Lifestyle',
      id: 'ilzdSj2dJoY',
    },
    {
      title:
        'Kids Cook Dinner! | Pizza Pockets | Stephanie from Millennial Moms',
      id: 'w4EZgaC5VWc',
    },
    {
      title: 'EDIBLE COOKIE DOUGH Recipe!  SOOO GOOD!!!',
      id: 'RWrYGwTn4qI',
    },
    {
      title: 'Rainbow Puppy Chow - Kid Size Cooking',
      id: '4-NBWDhjiOY',
    },
    {
      title: 'Kid Size Cooking:  Rainbow Grilled Cheese Sandwich',
      id: 'JTuvGzutF_8',
    },
    {
      title: 'BEST Hot Fudge Chocolate Lava Cake || Family Fun Pack Cooking',
      id: 'M7IzT1yu1jc',
    },
    {
      title: '3 Easy Snacks Your Kids Can Make On Their Own',
      id: 'UInIVFql7IY',
    },
    {
      title: 'Easy Homemade Fruit Roll-Ups | Healthy Snacks',
      id: '6CD6riW-j3Q',
    },
  ];
  teensArray = [
    {
      title: 'Life Skills: Cooking Basics for Teens Episode 1',
      id: '4Ygl3iK3sq8',
    },
    {
      title: 'Life Skills: Cooking Basics for Teens ~ Snacks!',
      id: 'Rycnm-Fb_hw',
    },
    {
      title: 'Healthy + Easy Recipes for Teens!',
      id: '5wDBopPKZhg',
    },
    {
      title: '24 DELICIOUS ONE-MINUTE BREAKFAST IDEAS',
      id: 'OpIO2fNLy5U',
    },
    {
      title: 'Cooking for Teens #2',
      id: 'vwkzb3FIa5E',
    },
    {
      title: 'Life Skills: Cooking Basics for Teens - Mac and Cheese',
      id: 'iKQvGSXoO4o',
    },
    {
      title:
        'Life Skills: Cooking Basics for Teens ~ The Baking Episode ~ Brownies',
      id: 'f_eWOA9sko4',
    },
    {
      title: 'Life Skills: Cooking Basics for Teens ~ Pizza Episode',
      id: 'Xf6N_Be7kaI',
    },
    {
      title: 'Life Skills: Cooking Basics for Teens ~ Quesadilla',
      id: 'LtTgBK4tQ4M',
    },
    {
      title: 'Life Skills: Cooking Basics for Teens ~ Homemade Granola',
      id: 'Sa9kfVTGzY4',
    },
    {
      title: 'Cooking 101: Teens Learn Cooking Basics - Supreme Grilled Cheese',
      id: 'iTg3WZLlYpo',
    },
    {
      title: 'Delicious Homemade Chicken Nuggets',
      id: 'dqAY6W2iQic',
    },
    {
      title: 'Delicious No Bake Chocolate Peanut Butter Bars',
      id: 'ZqmXupCPChY',
    },
    {
      title: 'How To Make Taco Salad',
      id: 'oCdpC2-4aWs',
    },
    {
      title: 'How To Make Oatmeal Raisin Cookies',
      id: 'P6zq8dBM8yw',
    },
  ];
  collegeArray = [
    {
      title: 'Cheap And Healthy Meals That Even A College Student Could Make',
      id: 'ydbMAFaA6Uw',
    },
    {
      title: 'HOW TO MEAL PREP FOR COLLEGE STUDENTS',
      id: 'b_ZkDJLrGHc',
    },
    // {
    //   title: 'college cook with me: my go to meals that are easy & DELICIOUS',
    //   id: 'DkyKuQBXurE',
    // },
    // {
    //   title: 'Mastering Student Cooking: Lunch - 5 Meals, 5 Ingredients',
    //   id: '93iL5cR2SEQ',
    // },
    // {
    //   title: '4 Meals, 4 Ingredients, 4 Dollars - College Cooking (Pt. 1)',
    //   id: '-ZMevpv7T2s',
    // },
    // {
    //   title: 'Mastering Student Cooking - Equipment + Shopping',
    //   id: '_TdemdsAZco',
    // },
    // {
    //   title: 'Episode 3 Chicken Parm',
    //   id: 'kSAyY6e0icI',
    // },
    // {
    //   title: '24 Dorm-Friendly Microwave Meals',
    //   id: 'IlZluRmjiB8',
    // },
    // {
    //   title: 'The Perfect Chicken Breast | The College Cooking Show',
    //   id: '6qk9UHCIWGs',
    // },
    // {
    //   title: 'How To Make Delicious Meatballs',
    //   id: 'Vv--GCeis5k',
    // },
    // {
    //   title: 'Delicious Homemade Chicken Nuggets',
    //   id: 'dqAY6W2iQic',
    // },
    // {
    //   title: 'Delicious No Bake Chocolate Peanut Butter Bars',
    //   id: 'ZqmXupCPChY',
    // },
  ];

  constructor() {}

  getArray = (videoArray: Videos[]) => {
    return videoArray;
  };
}

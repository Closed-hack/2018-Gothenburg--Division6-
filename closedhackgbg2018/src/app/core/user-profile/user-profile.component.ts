import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  skills: SkillModel[] = [{ name: 'Brave', category: 1 }];
  constructor() { }

  ngOnInit() {
  }

  onClick(x: string) {
    console.log(x);
  }

}

export interface SkillModel {
  name: string;
  category: Category;
}

export enum Category {
  IT,
  Managment
}

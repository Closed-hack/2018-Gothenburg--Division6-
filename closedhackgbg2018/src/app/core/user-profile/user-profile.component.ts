import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  skills: SkillModel[] = [{ field: 'Chefer och verksamhetsledare', skill: Skill.CriticalThinking },
  { field: 'Chefer och verksamhetsledare', skill: Skill.Organized }];
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onClick(x: SkillModel) {
    this.dataService.setSkill(x);
  }

}

export interface SkillModel {
  field: string;
  skill: Skill;
}

export enum Skill {
  CriticalThinking = 'Critical Thinking',
  Organized = 'Organized'
}

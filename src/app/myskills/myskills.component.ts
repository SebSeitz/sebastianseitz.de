import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent implements OnInit {
  javascriptTip = false;
  angularTip = false;
  HTMLtip = false;
  scrumTip = false;
  gitTip = false;
  designTip = false;
  restAPI = false;
  databasesTip = false;
  testTip = false;

  // mySkillsSection = document.getElementById('myskillssection');
  // options = {
  // };

  // observer = new IntersectionObserver(function (entries, options) {
  //   entries.forEach(entry => {
  //     console.log('look at this entry', entry);
  //   });
  // }, this.options);

  constructor() { }

  ngOnInit(): void {
    // this.observer.observe(this.mySkillsSection);
  }
}




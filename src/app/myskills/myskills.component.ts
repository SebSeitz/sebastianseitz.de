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
  constructor() { }

  ngOnInit(): void {
  }

}

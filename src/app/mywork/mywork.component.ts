import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {
  javascript = true;
  showAll = true;
  hoverOver = false;
  showQuiz = false;
  showGame = false;
  showPokedex = false;
  showMusicApp = false;


  showAllWorks(){
    this.showAll = true;
  }

  showAngular(){
    this.javascript = false;
    this.showAll = false;
  }

  showJavascript(){
    this.javascript = true;
    this.showAll = false
  }


  constructor() {

  }

  ngOnInit(): void {
  }

}

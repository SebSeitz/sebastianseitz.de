import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {
  javascript = true;
  showAll = true;
  showMore = false;
  hoverOver = false;


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

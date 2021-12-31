import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  scroll(el: HTMLElement){
    el.scrollIntoView();
  }


  constructor() {

  }

  ngOnInit(): void {
  }

}

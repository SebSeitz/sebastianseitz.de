import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  scroll(selector: string) {
    const element = document.querySelector(selector);
    element ? element.scrollIntoView({behavior: "smooth"}): null;
}

  constructor() {

  }

  ngOnInit(): void {
  }

}

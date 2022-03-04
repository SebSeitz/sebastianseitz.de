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

// topSection = document.getElementById('topSection');
  options = {
  };
  observer = new IntersectionObserver(function (entries, options) {
    entries.forEach(entry => {
      console.log('look at this entry', entry);
    });
  }, this.options);

  constructor() { }


  ngOnInit(): void {
    this.observer.observe(document.getElementById('topSection'));
  }

}

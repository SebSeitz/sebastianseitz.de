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


  // options = {
  //   root: document.querySelector('topSection'),
  //   threshold: 0.8,
  //   rootMargin: "0px",
  // };

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('flyIn', entry.isIntersecting);
    });
  });

  constructor() { }

  ngOnInit(): void {
     this.observer.observe(document.getElementById('skills-row1'));
     this.observer.observe(document.getElementById('skills-row2'));
     this.observer.observe(document.getElementById('skills-row3'));
  }
}




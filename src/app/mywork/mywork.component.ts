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

  goToLink(url: string){
    window.open(url, "_blank");
  }

  showAngular(){
    this.javascript = false;
    this.showAll = false;
  }

  showJavascript(){
    this.javascript = true;
    this.showAll = false
  }

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('box-animation', entry.isIntersecting);
    });
  });


  constructor() {

  }

  ngOnInit(): void {
    this.observer.observe(document.getElementById('image-row'));
    this.observer.observe(document.getElementById('image-row2'));
  }
}

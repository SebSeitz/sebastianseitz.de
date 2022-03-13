import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {
  javascript = true;
  showAll = true;
  angular = true;
  hoverOver = false;
  showQuiz = false;
  showGame = false;
  showPokedex = false;
  showMusicApp = false;


  showAllWorks(){
    this.angular = false;
    this.javascript = false;
    this.showAll = true;
    // document.getElementById('row4').classList.remove('box-animation');
    // document.getElementById('preview-container').classList.add('box-animation');
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  showAngular(){
    this.angular = true;
    this.javascript = false;
    this.showAll = false;
    // document.getElementById('preview-container').classList.remove('box-animation');
    // document.getElementById('row4').classList.add('box-animation');
  }

  showJavascript(){
    this.javascript = true;
    this.showAll = false;
    this.angular = false;
    // document.getElementById('preview-container').classList.remove('box-animation');
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

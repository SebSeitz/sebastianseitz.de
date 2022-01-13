import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scroll(selector: string) {
    const element = document.querySelector(selector);
    element ? element.scrollIntoView({ behavior: "smooth" }) : null;
    this.menuIsOpen=false;
  }

  menuIsOpen = false;
 openCloseMenu() {
    if (!this.menuIsOpen) {
      this.menuIsOpen=true;
    }
    else {
      this.menuIsOpen=false;
    }

  }


  @Input() alternativeMode = true;
  constructor() { }

  ngOnInit(): void {
  }

}

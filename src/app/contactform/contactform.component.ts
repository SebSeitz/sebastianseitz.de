import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {
  placeholder = 'Angular';

  onSubmit(value: any) {
    console.log(value);
  }

  constructor() { }

  ngOnInit(): void {

  }

}

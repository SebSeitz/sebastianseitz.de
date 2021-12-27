import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss'],
  styles: [`input.ng-invalid{border-left: 5px solid red;}
  input.ng-valid{border-left: 5px solid green;}`]
})
export class ContactformComponent implements OnInit {
  placeholder = 'Angular';
  firstname = "";

  onSubmit(value: any) {
    console.log(value);
  }

  constructor() { }

  ngOnInit(): void {

  }

}

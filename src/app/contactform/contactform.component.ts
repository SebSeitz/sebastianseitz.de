import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss'],
  styles: [`input.ng-invalid{border-left: 5px solid grey;}
  input.ng-valid{border-left: 5px solid green;}`]
})
export class ContactformComponent implements OnInit {

  firstname = '';
  lastname = '';
  email = '';
  message = '';

  async onSubmit(value: any) {
    console.log(value);
    alert('your messaged has been forwarded');
    let url = 'http://sebastian-seitz.developerakademie.com/send_mail.php';
    let formData = new FormData();
    formData.append('firstname', `${this.firstname}`);
    formData.append('lastname', `${this.lastname}`);
    formData.append('email', `${this.email}`);
    formData.append('message', `${this.message}`);
    let resp = await fetch(url, { method: 'POST' , body: formData});
    console.log('Received answer', resp);

  }

  constructor() { }

  ngOnInit(): void {

  }

}

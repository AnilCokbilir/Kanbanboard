import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  name :string;
  email :string;
  password : any;

  constructor() { }

  ngOnInit(): void {
  }

  signUp(){

  }



}

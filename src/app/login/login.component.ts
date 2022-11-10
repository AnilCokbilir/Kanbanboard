import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { AlltasksService } from '../alltasks.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  constructor(private allTasksService: AlltasksService, public router: Router) { }

  ngOnInit(): void {

  }

  login() {
    setTimeout(() => {
      this.allTasksService.loggedIn = true;
    }, 100);

  }



}

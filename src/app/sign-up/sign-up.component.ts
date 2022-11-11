import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { AlltasksService } from '../alltasks.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  name: string;
  email: string;
  password: any;

  constructor(private allTasksService: AlltasksService, public router: Router) { }

  ngOnInit(): void {
  }


  createAccount() {
    setTimeout(() => {
      this.allTasksService.loggedIn = true;
      this.router.navigateByUrl('/summary')
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

      sendEmailVerification(auth.currentUser)
        .then(() => {
          // Email verification sent!
          // ...
        });
    }, 10);


  }


}

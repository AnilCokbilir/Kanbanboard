import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openContactForm() {
    this.opened = true;
  }

  closeForm() {
    setTimeout(() => {

    }, 500);
    this.opened = false;
  }

}

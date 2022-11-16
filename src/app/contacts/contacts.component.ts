import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  opened: boolean = false;
  showTextContent: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openContactForm() {
    this.opened = true;
    this.showTextContent = false;
  }

  closeForm() {
    this.showTextContent = true;
    setTimeout(() => {
      this.opened = false;
    }, 400);

  }

}

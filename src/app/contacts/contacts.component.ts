import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  opened: boolean = false;
  showTextContent: boolean = false;
  contactName: string = '';
  contactEmail: string;
  contactPhone: number;
  test: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  openContactForm() {
    this.opened = true;
    this.showTextContent = false;
  }
  createContact() {
    console.log('Test')
  }
  closeForm() {
    this.showTextContent = true;
    setTimeout(() => {
      this.opened = false;
    }, 400);

  }

  checkTypes() {
    console.log(this.contactName)
  }



}

import { AddContactFormComponent } from './add-contact-form/add-contact-form.component';
import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts = [
    {
      phone: 123123,
      name: 'Nik'
    },
    {
      phone: 4566789,
      name: 'Alex'
    },
    {
      phone: 454545,
      name: 'Andrew'
    }
  ]

  constructor(public dialog: MdDialog) {

  }

  addContact() {
    const addContactRef = this.dialog.open(AddContactFormComponent);
    addContactRef.afterClosed().subscribe((data) => {
      this.contacts.push({ phone: data.phone, name: data.name });
    });
  }
}

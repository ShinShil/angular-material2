import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MaterialModule } from '@angular/material';

import 'hammerjs';
import { AddContactFormComponent } from './add-contact-form/add-contact-form.component';
import { MdDatepickerModule, MdNativeDateModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    AddContactFormComponent
  ],
  entryComponents: [
    AddContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

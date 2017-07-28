import { Observable } from 'rxjs/Rx';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.css']
})
export class AddContactFormComponent implements OnInit {

  form: FormGroup;

  starDate = new Date();

  filteredCategories: Observable<string[]>

  categories = [
    'Friend',
    'Kinsman',
    'Collegue',
    'Love'
  ]

  constructor() { }


  ngOnInit() {
    this.initForm();
    console.log(this.form.get('role'));
    this.filteredCategories = this.form.get('role').valueChanges
    .startWith(null)
    .map(val => this.filter(val));
  }

  filter(val): string[] {
    return val ? this.categories.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.categories;
  }

  initForm() {
    this.form = new FormGroup({
      'name': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.required),
      'email': new FormControl(''),
      'tags': new FormControl(''),
      'addToPopular': new FormControl(''),
      'dateBirth': new FormControl(''),
      'role': new FormControl('')
    });
  }

  getFormValue() {
    console.log(this.form);
  }
}

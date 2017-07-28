import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  selected = '';
  items = [
    { text: 'Refresh' },
    { text: 'Settings' },
    { text: 'Help', disabled: true },
    { text: 'Sign Out' }
  ];

  iconItems = [
    { text: 'Redial', icon: 'dialpad' },
    { text: 'Check voicemail', icon: 'voicemail', disabled: true },
    { text: 'Disable alerts', icon: 'notifications_off' }
  ];

  constructor() { }

  ngOnInit() {
  
  }

  select(text: string) { this.selected = text; }

}

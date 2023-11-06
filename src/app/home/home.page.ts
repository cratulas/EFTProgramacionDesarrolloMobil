import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userEmail: string = '';
  constructor() {
    this.userEmail = localStorage.getItem('email') || ''; 
  }

  

}

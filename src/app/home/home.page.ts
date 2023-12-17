import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userEmail: string = '';
  constructor(private router: Router) {
    this.userEmail = localStorage.getItem('email') || ''; 
  }

  irAPaginaVisa() {
    this.router.navigateByUrl('/visa-info');
  }
  

}

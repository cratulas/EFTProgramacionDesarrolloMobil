import { Component } from '@angular/core';

@Component({
  selector: 'app-visa-info',
  templateUrl: 'visa-info.page.html',
  styleUrls: ['visa-info.page.scss']
})
export class VisaInfoPage {
  showRequisitos = false;

  constructor() {}

  showDetails(section: string) {
    if (section === 'requisitos') {
      this.showRequisitos = !this.showRequisitos;
    }
  }
}

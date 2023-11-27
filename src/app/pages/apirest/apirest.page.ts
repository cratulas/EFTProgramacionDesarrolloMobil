import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../services/apiclient.service';

@Component({
  selector: 'app-apirest',
  templateUrl: './apirest.page.html',
  styleUrls: ['./apirest.page.scss'],
})
export class ApirestPage implements OnInit {
  todosList: any[] = [];

  constructor(private apiClient: ApiClientService) { }

  ngOnInit() {
    this.apiClient.getTodos().subscribe((data: any) => {
      this.todosList = data;
    });
  }
}

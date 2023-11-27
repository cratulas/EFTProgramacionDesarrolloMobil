import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SQLiteService } from 'src/app/services/api-bd.service';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient, private sqliteService: SQLiteService) { }

  getTodos() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .toPromise()
      .then((data: any[] | undefined) => {
        if (data) {
          // Si se obtienen datos, guardarlos en la base de datos
          this.sqliteService.saveTodos(data);
          return data;
        } else {
          return this.sqliteService.getStoredTodos();
        }
      })
      .catch(async (error: any) => {
        // En caso de error al obtener datos, obtener datos almacenados en la base de datos
        return await this.sqliteService.getStoredTodos();
      });
  }
}


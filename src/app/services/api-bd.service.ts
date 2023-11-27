import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class SQLiteService {

  constructor(private sqlite: SQLite) { }

  createDatabase() {
    return this.sqlite.create({
      name: 'todos.db',
      location: 'default'
    });
  }

  
  saveTodos(todos: any[]) {
    return this.createDatabase().then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, title TEXT, completed INTEGER)', [])
        .then(() => {
          db.sqlBatch(todos.map(todo => ['INSERT INTO todos (userId, title, completed) VALUES (?, ?, ?)', [todo.userId, todo.title, todo.completed ? 1 : 0]]))
            .then(() => console.log('Datos guardados en la base de datos'))
            .catch(error => console.error('Error al guardar datos en la base de datos', error));
        })
        .catch(error => console.error('Error al crear tabla en la base de datos', error));
    });
  }

  
  getStoredTodos() {
    return this.createDatabase().then((db: SQLiteObject) => {
      return db.executeSql('SELECT * FROM todos', []).then(data => {
        let todos = [];
        if (data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            todos.push(data.rows.item(i));
          }
        }
        return todos;
      });
    });
  }
}

/*
import { TestBed } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLiteService } from 'src/app/services/api-bd.service';

describe('SQLiteService', () => {
  let service: SQLiteService;
  let sqliteMock: any; 
  let sqliteObjectMock: any;

  beforeEach(() => {
    sqliteObjectMock = jasmine.createSpyObj('SQLiteObject', ['executeSql', 'sqlBatch']);
    sqliteMock = jasmine.createSpyObj('SQLite', ['create']);
    sqliteMock.create.and.returnValue(Promise.resolve(sqliteObjectMock));

    TestBed.configureTestingModule({
      providers: [
        SQLiteService,
        { provide: SQLite, useValue: sqliteMock } 
      ]
    });
    service = TestBed.inject(SQLiteService);
  });

  it('should create a database', async () => {
    await service.createDatabase();
    expect(sqliteMock.create).toHaveBeenCalledWith({
      name: 'todos.db',
      location: 'default'
    });
  });

  it('should save todos to the database', async () => {
    const mockTodos = [
      { userId: 1, title: 'Task 1', completed: false },
      { userId: 2, title: 'Task 2', completed: true }
    ];

    await service.saveTodos(mockTodos);
    
    expect(sqliteMock.create).toHaveBeenCalledWith({
      name: 'todos.db',
      location: 'default'
    });

    expect(sqliteObjectMock.executeSql).toHaveBeenCalledWith(
      'CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, title TEXT, completed INTEGER)',
      []
    );

    expect(sqliteObjectMock.sqlBatch).toHaveBeenCalledWith([
      ['INSERT INTO todos (userId, title, completed) VALUES (?, ?, ?)', [1, 'Task 1', 0]],
      ['INSERT INTO todos (userId, title, completed) VALUES (?, ?, ?)', [2, 'Task 2', 1]]
    ]);
  });

  it('should retrieve stored todos from the database', async () => {
    const storedTodos = [
      { id: 1, userId: 1, title: 'Task 1', completed: 0 },
      { id: 2, userId: 2, title: 'Task 2', completed: 1 }
    ];
    
    // Mocking SQLiteObject executeSql to return storedTodos
    sqliteObjectMock.executeSql.and.returnValue(Promise.resolve({ rows: { length: storedTodos.length, item: (index: number) => storedTodos[index] } }));
    
    const retrievedTodos = await service.getStoredTodos();

    expect(sqliteMock.create).toHaveBeenCalledWith({
      name: 'todos.db',
      location: 'default'
    });

    expect(sqliteObjectMock.executeSql).toHaveBeenCalledWith(
      'SELECT * FROM todos',
      []
    );

    expect(retrievedTodos).toEqual(storedTodos);
  });
});
*/
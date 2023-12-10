import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { ActivatedRoute } from '@angular/router';

import { ServiceDBService } from '../../services/service-db.service'; 
import { ModificarPage } from './modificar.page'; 

describe('ModificarPage', () => {
  let component: ModificarPage;
  let fixture: ComponentFixture<ModificarPage>;

  beforeEach(async () => {
    const activatedRouteMock = {
      queryParams: {
        subscribe: () => {} 
      }
    };
    

    await TestBed.configureTestingModule({
      declarations: [ModificarPage],
      providers: [
        ServiceDBService,
        SQLite,
        { provide: ActivatedRoute, useValue: activatedRouteMock } 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

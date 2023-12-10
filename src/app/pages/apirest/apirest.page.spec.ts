import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApirestPage } from './apirest.page';
import { ApiClientService } from '../../services/apiclient.service';
import { SQLiteService } from 'src/app/services/api-bd.service';


class MockSQLiteService {
  
}

describe('ApirestPage', () => {
  let component: ApirestPage;
  let fixture: ComponentFixture<ApirestPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApirestPage],
      imports: [HttpClientModule],
      providers: [
        { provide: SQLiteService, useClass: MockSQLiteService }, 
        ApiClientService //
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ApirestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

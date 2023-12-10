import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CamaraPage } from './camara.page';
import { IonicModule } from '@ionic/angular';

describe('CamaraPage', () => {
  let component: CamaraPage;
  let fixture: ComponentFixture<CamaraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CamaraPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CamaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize imageSource as null', () => {
    expect(component.imageSource).toBeNull();
  });
});

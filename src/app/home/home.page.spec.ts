import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Prueba de inicialización del componente
  it('should create the home page component', () => {
    expect(component).toBeTruthy();
  });
  // Prueba de visualización de bienvenida
  it('should display welcome message with user email', () => {
    component.userEmail = 'example@example.com';
    fixture.detectChanges();
    const welcomeMessage = fixture.nativeElement.querySelector('ion-text strong');
    expect(welcomeMessage.textContent).toContain('Bienvenido: example@example.com');
  });

  //Prueba de existencia de elementos
  it('should contain specific elements', () => {
    const pageTitle = fixture.nativeElement.querySelector('ion-title');
    const destinationHeader = fixture.nativeElement.querySelector('h2');
    const cardTitles = fixture.nativeElement.querySelectorAll('ion-card-title');
  
    expect(pageTitle).toBeTruthy();
    expect(destinationHeader).toBeTruthy();
    expect(cardTitles.length).toBeGreaterThan(0); 
  });
  
  
});

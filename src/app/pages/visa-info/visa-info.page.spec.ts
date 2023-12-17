import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisaInfoPage } from './visa-info.page';

describe('VisaInfoPage', () => {
  let component: VisaInfoPage;
  let fixture: ComponentFixture<VisaInfoPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(VisaInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

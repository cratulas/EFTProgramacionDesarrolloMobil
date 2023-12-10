import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisasPage } from './visas.page';

describe('VisasPage', () => {
  let component: VisasPage;
  let fixture: ComponentFixture<VisasPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(VisasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

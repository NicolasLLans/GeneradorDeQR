import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereadorQrComponent } from './genereador-qr.component';

describe('GenereadorQrComponent', () => {
  let component: GenereadorQrComponent;
  let fixture: ComponentFixture<GenereadorQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenereadorQrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenereadorQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

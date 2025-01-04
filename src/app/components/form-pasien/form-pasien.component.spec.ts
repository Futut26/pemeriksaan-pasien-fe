import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPasienComponent } from './form-pasien.component';

describe('FormPasienComponent', () => {
  let component: FormPasienComponent;
  let fixture: ComponentFixture<FormPasienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPasienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

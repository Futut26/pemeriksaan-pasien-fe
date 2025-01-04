import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPemeriksaanComponent } from './form-pemeriksaan.component';

describe('FormPemeriksaanComponent', () => {
  let component: FormPemeriksaanComponent;
  let fixture: ComponentFixture<FormPemeriksaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPemeriksaanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPemeriksaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

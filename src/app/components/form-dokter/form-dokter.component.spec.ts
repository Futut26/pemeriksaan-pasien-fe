import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDokterComponent } from './form-dokter.component';

describe('FormDokterComponent', () => {
  let component: FormDokterComponent;
  let fixture: ComponentFixture<FormDokterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDokterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDokterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

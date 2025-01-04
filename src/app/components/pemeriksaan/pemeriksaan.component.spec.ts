import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemeriksaanComponent } from './pemeriksaan.component';

describe('PemeriksaanComponent', () => {
  let component: PemeriksaanComponent;
  let fixture: ComponentFixture<PemeriksaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemeriksaanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemeriksaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

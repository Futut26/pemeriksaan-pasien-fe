import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PemeriksaanService } from '../../services/pemeriksaan.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-pemeriksaan',
  templateUrl: './form-pemeriksaan.component.html',
  styleUrls: ['./form-pemeriksaan.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class FormPemeriksaanComponent implements OnInit {
  @Input() pemeriksaanData: any = null; // Data untuk edit
  @Output() formSubmit = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  pemeriksaanForm: FormGroup;
  dokterList: any[] = [];
  pasienList: any[] = [];

  constructor(private fb: FormBuilder, private pemeriksaanService: PemeriksaanService) {
    this.pemeriksaanForm = this.fb.group({
      id_dokter: ['', Validators.required],
      id_pasien: ['', Validators.required],
      hasil_diagnosa: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadDokterList();
    this.loadPasienList();
    if (this.pemeriksaanData) {
      this.pemeriksaanForm.patchValue(this.pemeriksaanData);
    }
  }

  loadDokterList(): void {
    this.pemeriksaanService.getAllPemeriksaan().subscribe((data) => {
      this.dokterList = data.dokter;
    });
  }

  loadPasienList(): void {
    this.pemeriksaanService.getAllPemeriksaan().subscribe((data) => {
      this.pasienList = data.pasien;
    });
  }

  onSubmit(): void {
    if (this.pemeriksaanForm.valid) {
      this.formSubmit.emit(this.pemeriksaanForm.value);
      this.pemeriksaanForm.reset();
    }
  }

  onCancel(): void {
    this.cancel.emit();
    // reset selectedPemeriksaan
    this.pemeriksaanData = null;
  }
}

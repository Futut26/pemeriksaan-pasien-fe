import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasienService } from '../../services/pasien.service';

@Component({
  selector: 'app-form-pasien',
  templateUrl: './form-pasien.component.html',
  styleUrl: './form-pasien.component.css',
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
  ],

})
export class FormPasienComponent implements OnInit {
  @Input() pasienData: any = null; 
  @Output() formSubmit = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  pasienForm :FormGroup;

  constructor(private fb: FormBuilder){
    this.pasienForm = this.fb.group({
      nama_pasien: ['', Validators.required],
      umur: ['', Validators.required],
      jenis_kelamin: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.pasienData) {
      this.pasienForm.patchValue(this.pasienData);
    }
  }

  onSubmit(): void {
    if (this.pasienForm.valid) {
      this.formSubmit.emit(this.pasienForm.value);
      this.pasienForm.reset();
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}

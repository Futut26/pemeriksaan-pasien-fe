import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DokterService } from '../../services/dokter.service';

@Component({
  selector: 'app-form-dokter',
  templateUrl: './form-dokter.component.html',
  styleUrl: './form-dokter.component.css',
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
  ],
})
export class FormDokterComponent implements OnInit {
  @Input() dokterData: any = null; 
  @Output() formSubmit = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  dokterForm :FormGroup;

  constructor(private fb: FormBuilder){
    this.dokterForm = this.fb.group({
      nama_dokter: ['', Validators.required],
      spesialis: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.dokterData) {
      this.dokterForm.patchValue(this.dokterData);
    }
  }

  onSubmit(): void {
    if (this.dokterForm.valid) {
      this.formSubmit.emit(this.dokterForm.value);
      this.dokterForm.reset();
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}

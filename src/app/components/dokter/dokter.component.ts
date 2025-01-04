import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DokterService } from '../../services/dokter.service';
import { FormDokterComponent } from '../form-dokter/form-dokter.component';

@Component({
  selector: 'app-dokter',
  imports: [CommonModule, FormDokterComponent],
  templateUrl: './dokter.component.html',
  styleUrl: './dokter.component.css'
})
export class DokterComponent {
  no: number = 1;
  dokter: any[] = [];
  selectedDokter: any = null;
  isFormVisible = false;

  constructor(
    private dokterService: DokterService
  ){}

  ngOnInit(): void {
    this.loadDokterData();
    console.log(this.dokter);
  }

  loadDokterData(): void {
    this.dokterService.getAllDokter().subscribe((data) => {
      this.dokter = data;
      console.log(this.dokter);
      console.log(data);
    });
  }

  onAdd(): void {
    this.selectedDokter = null;
    this.isFormVisible = true;
  }

  onEdit(data: any): void {
    this.selectedDokter = data;
    this.isFormVisible = true;
  }

  onCancel(): void {
    this.isFormVisible = false;
  }

  handleFormSubmit(data: any): void {
    if (this.selectedDokter) {
      // Update data
      this.dokterService.updateDokter(this.selectedDokter.id_dokter, data).subscribe({
        next: () => {
          this.loadDokterData();
          this.isFormVisible = false;
          alert('Data dokter berhasil diperbarui.');
        },
        error: (err) => {
          console.error('Error updating data:', err);
          alert('Terjadi kesalahan saat memperbarui data. Silakan coba lagi.');
        }
      });
    } else {
      // Add new data
      this.dokterService.createDokter(data).subscribe({
        next: () => {
          this.loadDokterData();
          this.isFormVisible = false;
          alert('Data dokter berhasil ditambahkan.');
        },
        error: (err) => {
          console.error('Error adding data:', err);
          alert('Terjadi kesalahan saat menambahkan data. Silakan coba lagi.');
        }
      });
    }
  }

  onDelete(id: string): void {
    if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      this.dokterService.deleteDokter(id).subscribe({
        next: () => {
          this.loadDokterData();
          alert('Data dokter berhasil dihapus.');
        },
        error: (err) => {
          console.error('Error deleting data:', err);
          alert('Terjadi kesalahan saat menghapus data. Silakan coba lagi.');
        }
      });
    }
  }

}
